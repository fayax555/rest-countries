import { useState } from 'react'
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

  return (
    <div>
      <Search {...{ search, setSearch }} />
      <Filter />

      {countryList.map((country) => (
        <Card key={country.alpha3Code} {...country} />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const unfilteredCountryList =
    (await res.json()) as UnfilteredCountryListItem[]
  const countryList = unfilteredCountryList
    .slice(0, 30)
    .map(({ name, population, region, capital, flags, alpha3Code }) => ({
      name,
      population,
      region,
      capital,
      flag: flags.svg,
      alpha3Code: alpha3Code.toLowerCase(),
    }))

  return {
    props: { countryList: JSON.parse(JSON.stringify(countryList)) },
    revalidate: 1,
  }
}

export default Home
