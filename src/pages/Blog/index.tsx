import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsContainer, MainContainer } from './styles'

interface itemProps {
  id: number
  body: string
  title: string
  number: number
  updated_at: Date
}

interface issuesProps {
  items: itemProps[]
  total_count: number
}

export function Blog() {
  const [issues, setIssues] = useState({} as issuesProps)
  const [issuesList, setIssuesList] = useState<itemProps[]>([])

  const loadPosts = async (query?: string) => {
    const response = await api.get(
      `search/issues?q=repo:FelipePEduardo/Github-Blog`,
      {
        params: {
          q: query,
        },
      },
    )

    setIssues(response.data)
    setIssuesList(response.data.items)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div>
      <Profile />

      <MainContainer>
        <SearchForm totalIssues={issues.total_count} onLoadPosts={loadPosts} />

        <CardsContainer>
          {issuesList.map((issue) => {
            return <PostCard key={issue.id} onIssue={issue} />
          })}
        </CardsContainer>
      </MainContainer>
    </div>
  )
}
