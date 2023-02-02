import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faComment,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  LinksContainer,
  PostInfoContainer,
  PostInfoContent,
  PostLinksInfoContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface postContentProps {
  title: string
  body: string
  comments: number
  html_url: string
  updated_at: Date
  user: {
    login: string
  }
}

interface onPostContentProps {
  onPostContent: postContentProps
}

export function PostInfo({ onPostContent }: onPostContentProps) {
  const dateFormatted = onPostContent.updated_at
    ? formatDistanceToNow(new Date(onPostContent.updated_at), {
        locale: ptBR,
      })
    : ''

  const navigate = useNavigate()

  function handleBackToBlogPage() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <PostInfoContent>
        <LinksContainer>
          <button onClick={handleBackToBlogPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </button>
          <a href={onPostContent.html_url} target="_blank" rel="noreferrer">
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </LinksContainer>

        <h2>{onPostContent.title}</h2>

        <PostLinksInfoContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {onPostContent.user ? onPostContent.user.login : ''}
          </span>
          <time>
            <FontAwesomeIcon icon={faCalendarDay} />
            {dateFormatted}
          </time>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {onPostContent.comments} comentários
          </span>
        </PostLinksInfoContainer>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
