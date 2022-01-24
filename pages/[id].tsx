import CountryInfo from 'components/CountryInfo'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { CountryData, UnfilteredCountryListItem } from 'types'

interface Props {
  countryData: CountryData
}

const CountryPage = ({ countryData }: Props) => (
  <>
    <Head>
      <title>{countryData.name}</title>
    </Head>
    <CountryInfo {...countryData} />
  </>
)

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://restcountries.com/v2/alpha/${context?.params?.id}`
  )

  const unfilteredCountryData = (await res.json()) as UnfilteredCountryListItem
  if (unfilteredCountryData.status === 400) {
    return {
      notFound: true,
    }
  }

  const {
    name,
    population,
    region,
    capital,
    flags,
    alpha3Code,
    nativeName,
    borders,
    topLevelDomain,
    currencies,
    subregion,
    languages,
  } = unfilteredCountryData

  const borderCountryRes = borders
    ? await fetch(
        `https://restcountries.com/v2/alpha?codes=${borders.toString()}`
      )
    : null
  const borderCountryData =
    (await borderCountryRes?.json()) as UnfilteredCountryListItem[]

  const borderCountryList = borderCountryData?.map(({ name, alpha3Code }) => ({
    name,
    alpha3Code,
  }))

  const countryData = {
    name,
    population,
    region,
    capital,
    flag: flags.svg,
    alpha3Code,
    nativeName,
    borders: borderCountryList,
    topLevelDomain,
    currencies,
    subregion,
    languages,
  }

  return {
    props: { countryData: JSON.parse(JSON.stringify(countryData)) },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const unfilteredCountryList =
    (await res.json()) as UnfilteredCountryListItem[]

  const paths = unfilteredCountryList.map(({ alpha3Code }) => ({
    params: { id: alpha3Code },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default CountryPage
