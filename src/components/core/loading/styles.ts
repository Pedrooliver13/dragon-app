// Packages
import styled, { css } from 'styled-components';

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 1.6rem;
    text-align: center;

    p {
      font-weight: bold;
      padding-left: 20px;
    }

    div {
      display: flex;
      justify-content: center;
    }

    canvas {
      width: 30% !important;
      height: 30% !important;

      @media (max-width: ${theme.breakpoints.SM}) {
        width: 100% !important;
        height: 100% !important;
      }
      }
    }
  `}
`;
