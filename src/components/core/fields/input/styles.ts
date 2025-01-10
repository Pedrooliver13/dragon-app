// Packages
import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors['text-default']};
    border: none;
    height: 100px;

    label {
      padding: .5rem 0;
      font-size: 1.5rem;
    }

    input {
      padding: 1.2rem;
      border-radius: 6px;
      border: 2px solid ${theme.colors['input-border']};
      color: ${theme.colors['input-color']};
      background-color: ${theme.colors['background-body']};
      outline: none;
      transition: all 0.2s ease;
      
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:focus {
        box-shadow: 0 0 0 2px ${theme.colors['purple-400']};
      }

      &.input-error {
        border-color: none;
        box-shadow: 0 0 0 2px ${theme.colors['red-400']}};
      }
    }

    .error {
      padding: 0;
      padding-top: 1rem;
      font-size: 1.2rem;
      color: ${theme.colors['red-400']};
    }
    
    `}
`;
