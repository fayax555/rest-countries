import { useState, useMemo } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Search from 'components/Search'
import Filter from 'components/Filter'
import styled from 'styled-components'
import type { CountryListItem, UnfilteredCountryListItem } from 'types'
import CardList from 'components/CardList'

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
          (!region || country.region === region)
      ),
    [countryList, region, search]
  )

  return (
    <div>
      <Head>
        <title>Search Countries</title>
      </Head>
      <FilterWrapper>
        <Search {...{ search, setSearch }} />
        <Filter {...{ region, setRegion }} />
      </FilterWrapper>
      <CardList {...{ filteredList }} />
    </div>
  )
}

const FilterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
  margin-top: 2rem;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const unfilteredCountryList =
    (await res.json()) as UnfilteredCountryListItem[]
  const countryList = unfilteredCountryList
    .slice(0, 20)
    .map(({ name, population, region, capital, flags, alpha3Code }) => ({
      name,
      population,
      region,
      capital,
      flag: flags.png,
      alpha3Code: alpha3Code.toLowerCase(),
    }))

  return {
    props: { countryList: JSON.parse(JSON.stringify(countryList)) },
    revalidate: 1,
  }
}

export default Home
