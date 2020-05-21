import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Jost';
    font-size: 1.6rem;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Jost', sans-serif;
    font-size: 1.8rem;
    color: #ffffff;
    letter-spacing: 1.1;
  }

  button:hover {
    background: #ffffff;
    color: #252223;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
