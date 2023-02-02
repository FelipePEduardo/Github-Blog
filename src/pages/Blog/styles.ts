import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto 23rem;
  padding: 0 2.4rem;
`

export const CardsContainer = styled.section`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
