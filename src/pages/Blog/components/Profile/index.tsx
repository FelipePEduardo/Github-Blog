import {
  InfoContainer,
  NameContainer,
  ProfileContainer,
  ProfileContent,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface UserProps {
  name: string
  bio: string
  login: string
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState({} as UserProps)

  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get('users/FelipePEduardo')

      setUser(response.data)
    }

    loadUser()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={`${user.html_url}.png`} alt="" />

        <div>
          <NameContainer>
            <h2>{user.name}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </NameContainer>
          <p>{user.bio}</p>
          <InfoContainer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </span>
          </InfoContainer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
