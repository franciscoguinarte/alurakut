import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family : sans-serif;
    background-color : #D9E6F6;
  }

  #__next{
    display: flex;
    min-height : 100vh;
    flex-direction : column;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
