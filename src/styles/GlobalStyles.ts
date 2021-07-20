import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,input,textarea,button {
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }
`