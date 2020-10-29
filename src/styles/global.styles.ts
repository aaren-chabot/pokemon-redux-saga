import { createGlobalStyle } from 'styled-components';
import { elements, typography } from './colours.styles'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${elements.background}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${elements.link.base};
    font-weight: 500;

    &:hover {
      color: ${elements.link.hover};
    }
  }

  p, span, div {
    color: ${typography.body};
    font-weight: 500;
  }

  h1, h2, h3, h4, h5 {
    color: ${typography.heading}
  }
  h1 {
    font-size: 42px;
  }
  h2 {
    font-size: 32px;
  }
  p, li {
    font-size: 22px;
  }

  
`;
