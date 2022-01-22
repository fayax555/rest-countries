/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import Link from 'next/link'
import type { CountryListItem } from 'types'
import { numberWithCommas } from 'utils'

const Card = (country: CountryListItem) => {
  const { name, population, region, flag, capital, alpha3Code } = country

  return (
    <Link href={`/${alpha3Code}`} passHref>
      <CardWrapper>
        <img src={flag} alt={name} />
        <h2>{name}</h2>
        <p>Population: {numberWithCommas(population)}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </CardWrapper>
    </Link>
  )
}

const CardWrapper = styled.a`
  display: block;
  cursor: pointer;
  margin-left: 10rem;
  margin-top: 2rem;
  padding: 2rem;
  width: 300px;
  background: ${({ theme }) => theme.el};
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.sizes[1]};
  box-shadow: ${({ theme }) => theme.shadow[1]};

  > h2 {
    font-weight: ${({ theme }) => theme.fw.extraBold};
  }
`

export default Card
