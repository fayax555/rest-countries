import { useState, useMemo } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Search from 'components/Search'
import Filter from 'components/Filter'
import styled from 'styled-components'
import CardList from 'components/CardList'

import type { CountryListItem, UnfilteredCountryListItem } from 'types'

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
    <Wrapper>
      <Head>
        <title>Search Countries</title>
      </Head>
      <FilterWrapper>
        <Search {...{ search, setSearch }} />
        <Filter {...{ region, setRegion }} />
      </FilterWrapper>
      <CardList {...{ filteredList }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const FilterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 16px;

  @media ${({ theme }) => theme.bp3} {
    flex-direction: row;
  }
`

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
      flag: flags.png,
      alpha3Code: alpha3Code.toLowerCase(),
    })
  )

  return {
    props: { countryList: JSON.parse(JSON.stringify(countryList)) },
    revalidate: 1,
  }
}

export default Home
