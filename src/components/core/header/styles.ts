// Packages
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors['header-background']};
    color: ${theme.colors['header-color']};
    padding: 1rem;

    @media (max-width: ${theme.breakpoints.MD}) {
      font-size: 1.4rem;
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  `}
`;
