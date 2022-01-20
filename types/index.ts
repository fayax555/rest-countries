// used in Card.tsx
export interface CountryListItem {
  name: string
  population: number
  region: string
  capital: string
  flag: string
  alpha3Code: string
}

export interface UnfilteredCountryListItem extends CountryListItem {
  alpha3Code: string
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

// used in CountryInfo.tsx
export interface CountryData extends CountryListItem {
  nativeName: string
  borders?: Border[]
  topLevelDomain: string[]
  currencies: { name: string }[]
  subregion: string
  languages: { name: string }[]
}

export interface Border {
  name: string
  alpha3Code: string
}
