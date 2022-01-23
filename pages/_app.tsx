import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Topbar from 'components/Topbar'
import { ThemeProvider } from 'styled-components'
import { light, dark, GlobalStyle } from 'styles/theme'
import type { AppProps } from 'next/app'
import type { ThemeMode } from 'types'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    setMode((window.localStorage.getItem('mode') as ThemeMode) || 'light')
  }, [])

  const modes = { light, dark }

  return (
    <ThemeProvider theme={modes[mode]}>
      <GlobalStyle />
      <Topbar {...{ mode, setMode }} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
