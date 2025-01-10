// Packages
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    flex: 1;
    min-width: 200px;
    min-height: 200px;
    max-height: 200px;
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid ${theme.colors['gray-300']};
    border-bottom: none;
    background-color: ${theme.colors[`card-background`]};
    transition: all 0.5s ease-in-out;
    animation: ${fadeIn} 0.5s;

    &:hover {
      box-shadow: 0 0 10px 0 ${theme.colors['gray-300']};
    }

    &::after {
      content: '';

      display: block;
      position: absolute;
      width: 100%;
      bottom: 0px;
      left: 0px;
      height: 8px;
      background-color: ${theme.colors[`purple-800`]};
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    .header {
      display: flex;
      align-items: center;

      img {
        object-fit: cover;
        object-position: top;
        position: relative;
        border-radius: 50%;
        border: 4px solid ${theme.colors['purple-400']};
        margin-right: 1rem;
      }

      &__title {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      &__actions {
        display: flex;
        gap: 0.5rem;
      }
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 1rem;
      margin-top: 1rem;
      border-radius: 4px;
      background-color: ${theme.colors[`gray-400`]};
      overflow-y: auto;

      p {
        margin-top: 1rem;
        max-width: 100%;
        word-wrap: break-word;
      }

      &__subtitle {
        padding: 1rem 0;

        span {
          font-size: 1.2rem;

          font-weight: bold;
          text-transform: uppercase;
          background-color: ${theme.colors[`purple-400`]};
          color: ${theme.colors[`gray-900`]};
          border-radius: 10px;
          padding: 0.2rem 0.5rem;
        }
      }
    }
  `}
`;
