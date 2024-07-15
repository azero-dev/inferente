import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${'' /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain) */}
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  ${'' /* HTML5 display-role reset for older browsers */}
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ${'' /* End of CSS reset */}



  * {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: ${(props) => props.theme.textColor};
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    background-color: ${(props) => props.theme.bodyBg};
  }

  p {
    color: ${(props) => props.theme.textColor};
    margin-bottom: 2rem;
    font-size: 1.125em;
  }

  h1 {
    color: ${(props) => props.theme.primaryColor};
    font-size: 3em;
    margin-bottom: 2rem;
  }

  h2 {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.8em;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 1rem;
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    text-decoration: none;
    cursor: pointer;
    transition: 0.18s;

    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

export default GlobalStyles;
