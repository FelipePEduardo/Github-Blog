import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`

export const PostInfoContent = styled.div`
  margin-top: -8rem;
  padding: 3.2rem 4rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  > h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};

    margin-bottom: 0.8rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  a,
  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    background: none;
    border: 0;
    cursor: pointer;
  }
`

export const PostLinksInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  time,
  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${(props) => props.theme['base-span']};
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
