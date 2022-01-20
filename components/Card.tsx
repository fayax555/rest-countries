/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import type { CountryListItem } from 'types'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Card = (country: CountryListItem) => {
  const router = useRouter()
  const { name, population, region, flag, capital, alpha2Code } = country

  return (
    <Link href={`/${alpha2Code}`} passHref>
      <CardWrapper>
        <img src={flag} alt={name} />
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </CardWrapper>
    </Link>
  )
}

const CardWrapper = styled.article`
  cursor: pointer;
  margin-left: 10rem;
  margin-top: 2rem;
  width: 300px;
  border: 2px solid #444;
`

export default Card
