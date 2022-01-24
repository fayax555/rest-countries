import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { CountryData } from 'types'

interface Props {
  borders: CountryData['borders']
}

const BorderCountries = ({ borders }: Props) => (
  <Wrapper>
    {borders && (
      <>
        <Title>Border Countries:</Title>
        <ButtonsWrapper>
          {borders.map(({ name, alpha3Code }) => (
            <Fragment key={name}>
              <Link href={`/${alpha3Code}`} passHref>
                <Button>{name} </Button>
              </Link>
            </Fragment>
          ))}
        </ButtonsWrapper>
      </>
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.bp3} {
    display: flex;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fs[4]};
  font-weight: ${({ theme }) => theme.fw.semiBold};
`

const ButtonsWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Button = styled.a`
  all: unset;
  display: block;
  padding: 0.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fs[7]};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  background: ${({ theme }) => theme.el};
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  min-width: 100px;
  letter-spacing: 0.04em;

  @media ${({ theme }) => theme.bp3} {
    font-size: ${({ theme }) => theme.fs[4]};
  }
`

export default BorderCountries
