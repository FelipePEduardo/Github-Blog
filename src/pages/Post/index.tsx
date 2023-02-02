import { useEffect, useState } from 'react'
import { PostInfo } from './components/PostInfo'
import { TextContainer, TextContent } from './styles'

import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

interface postContentType {
  title: string
  body: string
  comments: number
  html_url: string
  updated_at: Date
  user: {
    login: string
  }
}

export function Post() {
  const { number } = useParams()

  const [postContent, setPostContent] = useState({} as postContentType)

  useEffect(() => {
    const loadPost = async () => {
      const response = await api.get(
        `repos/FelipePEduardo/Github-blog/issues/${number}`,
      )

      setPostContent(response.data)
    }

    loadPost()
  }, [number])

  return (
    <div>
      <PostInfo onPostContent={postContent} />

      <TextContainer>
        <TextContent>
          <p>{postContent.body}</p>
        </TextContent>
      </TextContainer>
    </div>
  )
}
