import { useState, useMemo, SetStateAction, Dispatch, useEffect } from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Search from 'components/Search'
import Filter from 'components/Filter'
import styled from 'styled-components'
import CardList from 'components/CardList'
import type { CountryListItem, UnfilteredCountryListItem } from 'types'

interface Props {
  countryList: CountryListItem[]
  search: string
  region: string
  setSearch: Dispatch<SetStateAction<string>>
  setRegion: Dispatch<SetStateAction<string>>
}

const Home = (props: Props) => {
  const { countryList, search, region, setSearch, setRegion } = props
  const [num, setNum] = useState(12)
  const [screenWidth, setScreenWidth] = useState(0)

  const filteredList = useMemo(
    () =>
      countryList
        .filter(
          (country) =>
            country.name.toLowerCase().includes(search.toLowerCase()) &&
            (!region || country.region === region)
        )
        .slice(0, num),
    [countryList, num, region, search]
  )

  useEffect(() => {
    setScreenWidth(window.innerHeight)

    const handleScroll = () => {
      const d = document.documentElement
      const diff = d.scrollHeight - (window.innerHeight + window.scrollY)

      if (diff < 100) {
        setNum((num) => num + 12)
      }
    }

    const resize = () => {
      setScreenWidth(window.innerWidth)
      // add more items for large screens
      if (window.innerHeight > 800) setNum((num) => num + 24)
      if (window.innerHeight > 1300) setNum((num) => num + 72)
      if (window.innerHeight > 7000) setNum((num) => num + 300)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <Wrapper>
      <Head>
        <title>Search Countries</title>
        <meta name='description' content='Search for country information' />
      </Head>
      <FilterWrapper>
        <Search {...{ search, setSearch, screenWidth }} />
        <Filter {...{ region, setRegion }} />
      </FilterWrapper>
      <CardList {...{ filteredList }} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 24px;

  @media ${({ theme }) => theme.bp2} {
    margin-top: 48px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${({ theme }) => theme.bp4} {
    margin-top: 48px;
    padding-left: 80px;
    padding-right: 80px;
  }
`

const FilterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 16px;

  @media ${({ theme }) => theme.bp2} {
    flex-direction: row;
    padding: 0;
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
