import '../styles/globals.css'
import Topbar from 'components/Topbar'
import type { AppProps } from 'next/app'

const themes = {
  media: {
    bp1: '(min-width: 480px)',
  },
}

const lightMode = {
  ...themes,
  text: '#444',
}

const darkMode = {
  ...themes,
  text: '#fff',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
