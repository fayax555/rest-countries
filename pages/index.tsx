import { useState, useMemo } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Card from 'components/Card'
import type { CountryListItem, UnfilteredCountryListItem } from 'types'
import Search from 'components/Search'
import Filter from 'components/Filter'

interface Props {
  countryList: CountryListItem[]
}

const Home: NextPage<Props> = ({ countryList }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  const filteredList = useMemo(
    () =>
      countryList.filter(
        (country) =>
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          // if there is no region selected, code below is set to true (using `!region`), otherwise
          // nothing will be returned when region = '', as the whole boolean will result to false
          (!region || country.region === region)
      ),
    [countryList, region, search]
  )

  return (
    <div>
      <Search {...{ search, setSearch }} />
      <Filter {...{ region, setRegion }} />
      {filteredList.map((country) => (
        <Card key={country.alpha3Code} {...country} />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const unfilteredCountryList =
    (await res.json()) as UnfilteredCountryListItem[]
  const countryList = unfilteredCountryList.map(
    ({ name, population, region, capital, flags, alpha3Code }) => ({
      name,
      population,
      region,
      capital,
      flag: flags.svg,
      alpha3Code: alpha3Code.toLowerCase(),
    })
  )

  return {
    props: { countryList: JSON.parse(JSON.stringify(countryList)) },
    revalidate: 1,
  }
}

export default Home
