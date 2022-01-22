import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Topbar from 'components/Topbar'
import { ThemeProvider } from 'styled-components'
import { light, dark, GlobalStyle } from 'utils/theme'
import type { AppProps } from 'next/app'

type Mode = 'dark' | 'light'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<Mode>('light')

  useEffect(() => {
    setMode((window.localStorage.getItem('mode') as Mode) || 'light')
  }, [])

  const modes = { light, dark }

  return (
    <ThemeProvider theme={modes[mode]}>
      <GlobalStyle />
      <Topbar setMode={setMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
