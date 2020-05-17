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
    padding: 80px 65px 0;
    font-family: 'Raleway';
    font-size: 1.6rem;
    color: #ffffff;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Raleway';
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
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
