import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 6.4rem 0 13.4rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`
