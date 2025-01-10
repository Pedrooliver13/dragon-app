// Packages
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import isPropValid from '@emotion/is-prop-valid';

// Routes
import { Router } from 'routes/router';

// Styles
import { GlobalStyle } from 'styles/global';
import { defaultTheme } from 'styles/theme/default';
import 'react-toastify/dist/ReactToastify.css';

function App(): ReactElement {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <ToastContainer theme="dark" />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
