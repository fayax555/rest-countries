import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // media?: {
    //   bp1: string
    //   bp2: string
    //   bp3: string
    // }
    sizes: {
      1: string
      2: string
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
