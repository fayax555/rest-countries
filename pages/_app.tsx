import '../styles/globals.css'
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
  return <Component {...pageProps} />
}

export default MyApp
