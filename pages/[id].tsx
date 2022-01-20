import CountryInfo from 'components/CountryInfo'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { CountryData, CountryListItem, UnfilteredCountryListItem } from 'types'

interface Props {
  countryData: CountryData
}

const CountryPage: NextPage<Props> = ({ countryData }) => {
  return (
    <div>
      <CountryInfo {...countryData} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://restcountries.com/v2/alpha/${context?.params?.id}`
  )

  const unfilteredCountryData = (await res.json()) as UnfilteredCountryListItem

  console.log(unfilteredCountryData)

  const {
    name,
    population,
    region,
    capital,
    flags,
    alpha2Code,
    nativeName,
    borders,
    topLevelDomain,
    currencies,
    subregion,
    languages,
  } = unfilteredCountryData

  const countryData = {
    name,
    population,
    region,
    capital,
    flag: flags.svg,
    alpha2Code,
    nativeName,
    borders,
    topLevelDomain,
    currencies,
    subregion,
    languages,
  }

  return {
    props: { countryData },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'AF' } }],
    fallback: 'blocking',
  }
}

export default CountryPage
