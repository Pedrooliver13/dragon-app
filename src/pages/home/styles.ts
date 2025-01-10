// Packages
import styled, { css } from 'styled-components';

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: ${theme.breakpoints.LG}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakpoints.MD}) {
      grid-template-columns: 1fr;
    }
  `}
`;
