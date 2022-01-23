import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bp1: string
    bp2: string
    bp3: string
    bp4: string
    fs: {
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
    }
    fw: {
      light: string
      semiBold: string
      extraBold: string
    }
    shadow: {
      1: string
      2: string
    }
    text: string
    el: string
    input?: string
    body: string
  }
}
