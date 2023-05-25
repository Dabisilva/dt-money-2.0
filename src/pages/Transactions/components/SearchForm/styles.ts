import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
`

export const InputForm = styled.input`
  flex: 1;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const ButtomForm = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 0;
  padding: 1rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme['green-300']};
  border-radius: 6px;

  color: ${({ theme }) => theme['green-300']};
  font-weight: bold;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-500']};
    border-color: ${({ theme }) => theme['green-500']};

    color: ${({ theme }) => theme.white};

    transition: all 0.2s;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
