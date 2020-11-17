import '../../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import 'sanitize.css'

const theme = {}

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
