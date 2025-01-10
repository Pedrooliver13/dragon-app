// Packages
import styled, { css, DefaultTheme } from 'styled-components';

type variantType = 'primary' | 'secondary';

interface ButtonContainerProps {
  variant: variantType;
}

const variantStyles = (theme: DefaultTheme, variant: variantType) =>
  ({
    primary: css`
      height: auto;
      background-color: ${theme.colors['button-background-primary']};
      color: ${theme.colors['button-color-primary']};
      font-weight: bold;

      &:hover:not(:disabled) {
        filter: brightness(1.1);
      }
    `,
    secondary: css`
      padding: 1.2rem 0.05rem;
      height: auto;
      background-color: ${theme.colors['button-background-secondary']};
      color: ${theme.colors['button-color-secondary']};

      &:hover:not(:disabled) {
        filter: brightness(1.1);
      }
    `,
  }[variant]);

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, variant }) => css`
    ${variantStyles(theme, variant)}

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    font-size: 100%;
    height: 40px;
    gap: 10px;

    appearance: button;
    backface-visibility: hidden;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
    cursor: pointer;
    line-height: 1.15;
    outline: none;
    overflow: hidden;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all 0.2s, box-shadow 0.08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    @media (max-width: ${theme.breakpoints.MD}) {
      padding: 1rem 0.6rem;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }

    &:focus {
      box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
        rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
        rgba(50, 151, 211, 0.3) 0 0 0 4px;
    }

    .loading {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
