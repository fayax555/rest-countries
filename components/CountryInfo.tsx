/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { numberWithCommas } from 'utils'
import type { CountryData } from 'types'
import BorderCountries from './BorderCountries'
import ListItem from './ListItem'

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
      <ListItem title='Top Level Domain' dataStr={country.topLevelDomain} />
      <ListItem title='Currencies' dataObj={country.currencies} />
      <ListItem title='Languages' dataObj={country.languages} />
      <br />
      <BorderCountries borders={country.borders} />
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
