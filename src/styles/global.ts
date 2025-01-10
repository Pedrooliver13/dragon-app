// Packages
import { createGlobalStyle } from 'styled-components';

// Styles
import { Container } from 'styles/container';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props): string =>
      props.theme.colors['purple-400']};
  }

  body {
    background-color: ${({ theme }): string => theme.colors['background-body']};
    color: ${({ theme }): string => theme.colors['text-default']};
    --webkit-font-smoothing: antialised;
  }
  
  body, input, textarea, button {
    font-weight: 400;
    font-family: ${({ theme }): string => theme.fonts.default};
    font-size: 1.6rem;
  }

  img {
    max-width: 100%;
    position: relative;
    display: inline-block;
    object-fit: contain;
  }

  a {
    color: inherit;
    background-color: inherit;
    text-decoration: none;
    
  }

  .container {
    ${Container};
  }
`;
