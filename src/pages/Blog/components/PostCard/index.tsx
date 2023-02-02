import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

interface onIssueItems {
  title: string
  body: string
  number: number
  updated_at: Date
}

interface onIssueProps {
  onIssue: onIssueItems
}

export function PostCard({ onIssue }: onIssueProps) {
  const navigate = useNavigate()

  function handleOpenPost() {
    navigate(`/post/${onIssue.number}`)
  }

  const publicationDate = new Date(onIssue.updated_at)
  const publicationDateFormatted = format(
    publicationDate,
    "d 'de' LLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )
  const publicationDateRelativeToNow = formatDistanceToNow(publicationDate, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer onClick={handleOpenPost}>
      <div>
        <h2>{onIssue.title}</h2>
        <time
          title={publicationDateFormatted}
          dateTime={publicationDate.toISOString()}
        >
          {publicationDateRelativeToNow}
        </time>
      </div>

      <p>{onIssue.body}</p>
    </PostCardContainer>
  )
}
