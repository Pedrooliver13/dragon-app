// Packages
import styled, { css } from 'styled-components';

export const DragonFormContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;
    max-width: 600px !important;
    margin: 20px auto;

    header {
      display: flex;
      align-items: center;

      h1 {
        font-size: 1.6rem;
        flex: 1;
      }
    }

    .form {
      margin-top: 20px;
      padding: 1.6rem;
      background-color: ${theme.colors['gray-700']};
      border: 1px solid ${theme.colors['gray-300']};
      border-radius: 4px;

      .form__row {
        display: flex;
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;

        @media (max-width: ${theme.breakpoints.MD}) {
          display: block;
        }

        div {
          flex: 1;
        }
      }

      .form__footer {
        display: flex;
        gap: 10px;
        margin-top: 20px;

        a,
        button {
          width: 100%;
        }
      }
    }

    .info {
      font-weight: bold;
      padding: 1rem;
      margin-top: 20px;
      background-color: ${theme.colors['purple-800']};
      border: 2px solid ${theme.colors['purple-400']};
      border-radius: 8px;

      ul {
        list-style: none;
        padding: 1rem 2rem;

        @media (max-width: ${theme.breakpoints.MD}) {
          margin-top: 20px;
          padding: 0;
        }
      }

      p {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  `}
`;
