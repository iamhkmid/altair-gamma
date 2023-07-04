import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Inter", sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.variant === 'light' ? 'white' : 'black'};
    margin: 0;
    transition: background-color 0.3s ease-in-out;
  }
`
