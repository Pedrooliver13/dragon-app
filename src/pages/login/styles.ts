// Packages
import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media (max-width: ${theme.breakpoints.MD}) {
      height: 100vh;
      justify-content: center;
    }

    .background {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 3rem;
      max-width: 65%;
      width: 100%;
      height: 100vh;
      padding: 90px;
      background: linear-gradient(
        ${theme.colors['purple-400']},
        #8234e9,
        ${theme.colors['purple-800']}
      );

      &__generic-01,
      &__generic-02 {
        position: absolute;
        max-width: 100%;
        width: 450px;
        opacity: 0.5;
      }

      &__generic-01 {
        top: 0;
        right: 0;
        transform: rotate(180deg);
      }

      &__generic-02 {
        bottom: 0;
        left: 0;
      }

      @media (max-width: ${theme.breakpoints.MD}) {
        display: none;
      }
    }

    .login {
      flex: 1;
      max-width: 500px !important;
      width: 100%;
      padding: 0 30px;

      @media (max-width: ${theme.breakpoints.MD}) {
        max-width: 100%;
      }

      &__header {
        margin-bottom: 30px;

        h1 {
          font-size: 2.5rem;
        }
      }

      &__content {
        margin-bottom: 1rem;
      }

      &__footer button {
        width: 100%;
      }
    }
  `}
`;
