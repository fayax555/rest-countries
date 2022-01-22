// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

// - Homepage Items: 14px
// - Detail Page: 16px
// - Weights: 300, 600, 800

import { createGlobalStyle } from 'styled-components'

const theme = {
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 800px)',
    bp3: '(min-width: 1000px)',
  },
  sizes: {
    1: '14px',
    2: '16px',
  },
  fw: {
    light: '300',
    semiBold: '600',
    extraBold: '800',
  },
  shadow: {
    1: '0px 0 5px rgba(0, 0, 0, 0.25)',
    2: '0px 0 5px rgba(0, 0, 0, 0.5)',
  },
}

export const light = {
  ...theme,
  el: 'hsl(0, 0%, 100%)',
  text: 'hsl(200, 15%, 8%)',
  body: 'hsl(0, 0%, 98%)',
  input: 'hsl(0, 0%, 52%)',
}

export const dark = {
  ...theme,
  el: 'hsl(209, 23%, 22%)',
  text: 'hsl(0, 0%, 100%)',
  body: 'hsl(207, 26%, 17%)',
}

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }
`
