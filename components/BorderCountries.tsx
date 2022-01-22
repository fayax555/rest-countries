import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Border } from 'types'

interface Props {
  borders?: Border[]
}

const BorderCountries = ({ borders }: Props) => {
  if (!borders) return null
  
  return (
    <Wrapper>
      <span>Border Countries:</span>
      <ButtonsWrapper>
        {borders.map(({ name, alpha3Code }) => (
          <Fragment key={name}>
            <Link href={`/${alpha3Code}`} passHref>
              <Button>{name} </Button>
            </Link>
          </Fragment>
        ))}
      </ButtonsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  gap: 1rem;
  > span {
    font-weight: ${({ theme }) => theme.fw.semiBold};
  }
  @media (min-width: 1000px) {
    display: flex;
  }
`

const ButtonsWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Button = styled.a`
  all: unset;
  display: block;
  padding: 0.5rem 2rem;
  box-shadow: ${({ theme }) => theme.shadow[1]};
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
`

export default BorderCountries
