/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { numberWithCommas } from 'utils'
import type { CountryData } from 'types'
import BorderCountries from './BorderCountries'

const CountryInfo = (country: CountryData) => {
  return (
    <Wrapper>
      <img src={country.flag} alt={country.name} />
      <h1>{country.name}</h1>
      <p>Native Name: {country.nativeName}</p>
      <p>Population: {numberWithCommas(country.population)}</p>
      <p>Region: {country.region}</p>
      <p>Sub region: {country.subregion}</p>
      <p>Capital: {country.capital}</p>
      <br />
      <p>
        Top Level Domain:{' '}
        {country.topLevelDomain.map((domain) => (
          <span key={domain}>{domain} </span>
        ))}
      </p>
      <p>
        Currencies:{' '}
        {country.currencies.map(({ name }) => (
          <span key={name}>{name}</span>
        ))}
      </p>
      <p>
        Languages:{' '}
        {country.languages.map(({ name }) => (
          <span key={name}>{name}, </span>
        ))}
      </p>
      <br />
      <BorderCountries {...country.borders} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid #444;
  max-width: 300px;
  margin: auto;
  padding: 1rem;
`

export default CountryInfo
