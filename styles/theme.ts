// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

// - Homepage Items: 14px
// - Detail Page: 16px
// - Weights: 300, 600, 800

import { createGlobalStyle, css } from 'styled-components'

const theme = {
  bp1: `(min-width: ${480 / 16}rem)`,
  bp2: `(min-width: ${700 / 16}rem)`,
  bp3: `(min-width: ${1250 / 16}rem)`,
  bp4: `(min-width: ${1400 / 16}rem)`,
  fs: {
    // todo fix: this should be in reverse order
    1: `${30 / 16}rem`,
    2: `${24 / 16}rem`,
    3: `${21 / 16}rem`,
    4: `${16 / 16}rem`,
    5: `${13 / 16}rem`,
    6: `${12 / 16}rem`,
    7: `${11 / 16}rem`,
  },
  fw: {
    light: '300',
    semiBold: '600',
    extraBold: '800',
  },
  shadow: {
    1: '0px 1px 6px rgba(0, 0, 0, 0.1)',
    2: '0px 0px 10px rgba(0, 0, 0, 0.35)',
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
  ${({ theme }) =>
    // add dark scrollbar on dark mode
    theme.body === 'hsl(207, 26%, 17%)' &&
    css`
      html::-webkit-scrollbar {
        width: 15px;
      }
      html::-webkit-scrollbar-track {
        background-color: hsl(207, 26%, 12%);
      }
      html::-webkit-scrollbar-thumb {
        background-color: hsl(209, 23%, 35%);
      }
    `};


  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }
`
