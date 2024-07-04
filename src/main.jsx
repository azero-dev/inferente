import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
