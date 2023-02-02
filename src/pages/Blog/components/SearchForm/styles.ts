import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  align-items: center;

  margin-bottom: 4.8rem;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;

    padding: 1.2rem 1.6rem;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
