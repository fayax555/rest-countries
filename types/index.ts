export interface CountryListItem {
  name: string
  population: number
  region: string
  capital: string
  flag: string
  alpha2Code: string
}

export interface UnfilteredCountryListItem extends CountryListItem {
  nativeName: string
  borders: string[]
  topLevelDomain: string[]
  currencies: { name: string }[]
  subregion: string
  languages: { name: string }[]
  flags: {
    svg: string
  }
}

export interface CountryData extends CountryListItem {
  nativeName: string
  borders: string[]
  topLevelDomain: string[]
  currencies: { name: string }[]
  subregion: string
  languages: { name: string }[]
}