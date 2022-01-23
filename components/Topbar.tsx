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
    <Wrapper>
      <Link href={'/'}>
        <a>
          <Heading>Where in the world?</Heading>
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
    </Wrapper>
  </Header>
)

const Header = styled.header`
  box-shadow: ${({ theme }) => theme.shadow[1]};
  background-color: ${({ theme }) => theme.el};
  color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 16px;
  height: 80px;

  @media ${({ theme }) => theme.bp2} {
    padding: 0 40px;
  }
  @media ${({ theme }) => theme.bp4} {
    padding: 0 80px;
  }
`

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fs[5]};
  font-weight: ${({ theme }) => theme.fw.extraBold};
  letter-spacing: 0.035em;

  @media ${({ theme }) => theme.bp2} {
    font-size: ${({ theme }) => theme.fs[2]};
  }
`

const Button = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fs[6]};

  @media ${({ theme }) => theme.bp2} {
    font-size: ${({ theme }) => theme.fs[4]};
  }

  > * {
    height: 16px;
    width: 16px;
  }
`

export default Topbar
