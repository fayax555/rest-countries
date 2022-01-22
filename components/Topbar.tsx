import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Mode = 'dark' | 'light'
interface Props {
  setMode: Dispatch<SetStateAction<Mode>>
}

const Topbar = ({ setMode }: Props) => {
  return (
    <Header>
      <h1>Where in the world?</h1>
      <button
        onClick={() => {
          setMode((currTheme) => {
            const mode = currTheme === 'light' ? 'dark' : 'light'
            window.localStorage.setItem('mode', mode)
            return mode
          })
        }}
      >
        Dark Mode
      </button>
    </Header>
  )
}

const Header = styled.header`
  box-shadow: ${({ theme }) => theme.shadow[1]};
  background-color: ${({ theme }) => theme.el};
  color: ${({ theme }) => theme.text};
  padding: 1rem;

  > h1 {
    font-size: ${({ theme }) => theme.sizes[2]};
    font-weight: ${({ theme }) => theme.fw.extraBold};
  }
`

export default Topbar
