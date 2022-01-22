import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { IoMoonSharp, IoMoonOutline } from 'react-icons/io5'
import type { ThemeMode } from 'types'
import Link from 'next/link'

interface Props {
  mode: string
  setMode: Dispatch<SetStateAction<ThemeMode>>
}

const Topbar = ({ mode, setMode }: Props) => (
  <Header>
    <Link href={'/'}>
      <a>
        <h1>Where in the world?</h1>
      </a>
    </Link>
    <Button
      onClick={() => {
        setMode((currTheme) => {
          const mode = currTheme === 'light' ? 'dark' : 'light'
          window.localStorage.setItem('mode', mode)
          return mode
        })
      }}
    >
      {mode === 'dark' ? <IoMoonSharp /> : <IoMoonOutline />}
      Dark Mode
    </Button>
  </Header>
)

const Button = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  > * {
    font-size: 1.2rem;
  }
`

const Header = styled.header`
  box-shadow: ${({ theme }) => theme.shadow[1]};
  background-color: ${({ theme }) => theme.el};
  color: ${({ theme }) => theme.text};
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;

  > a > h1 {
    font-size: ${({ theme }) => theme.sizes[2]};
    font-weight: ${({ theme }) => theme.fw.extraBold};
  }
`

export default Topbar
