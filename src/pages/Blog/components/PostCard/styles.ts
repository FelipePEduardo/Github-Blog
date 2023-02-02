import styled from 'styled-components'

export const PostCardContainer = styled.button`
  max-width: 41rem;
  max-height: 26rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-post']};
  padding: 3.2rem;

  border: 0;
  border-radius: 10px;

  text-align: start;

  cursor: pointer;

  > div {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-bottom: 2rem;

    h2 {
      max-width: 25rem;

      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-title']};
    }

    time {
      font-size: 1.4rem;
      line-height: 160%;

      padding-top: 0.5rem;

      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};

    max-width: 35rem;
    max-height: 11.2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
