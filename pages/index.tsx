import type { GetStaticProps, NextPage } from 'next'
import type { CountryListItem, UnfilteredCountryListItem } from 'types'
import Card from 'components/Card'

interface Props {
  countryList: CountryListItem[]
}

const Home: NextPage<Props> = ({ countryList }) => {
  console.log(countryList)

  return (
    <>
      {countryList.map((country) => (
        <Card key={country.alpha2Code} {...country} />
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const unfilteredCountryList =
    (await res.json()) as UnfilteredCountryListItem[]
  const countryList = unfilteredCountryList
    .slice(0, 20)
    .map(({ name, population, region, capital, flags, alpha2Code }) => ({
      name,
      population,
      region,
      capital,
      flag: flags.svg,
      alpha2Code,
    }))

  return {
    props: { countryList: JSON.parse(JSON.stringify(countryList)) },
    revalidate: 1,
  }
}

export default Home
