import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto 7.2rem;
  padding: 0 2.4rem;
`

export const ProfileContent = styled.div`
  margin-top: -8rem;
  padding: 3.2rem 4rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > p {
      margin-bottom: 2.4rem;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;

    > div {
      text-align: center;
    }
  }
`

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 0.8rem;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-weight: 700;
    font-size: 1.2rem;
    line-height: 160%;

    text-transform: uppercase;
    text-decoration: none;

    color: ${(props) => props.theme.blue};
  }

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0.8rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1rem;
  }
`
