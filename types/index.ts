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
  status?: number
  nativeName: string
  borders: string[]
  topLevelDomain: string[]
  currencies?: { name: string }[]
  subregion?: string
  languages?: { name: string }[]
  flags: {
    svg: string
    png: string
  }
}

// used in CountryInfo.tsx
export interface CountryData extends CountryListItem {
  nativeName: string
  borders: Border[]
  topLevelDomain?: string[]
  currencies?: { name: string }[]
  subregion?: string
  languages?: { name: string }[]
}

interface Border {
  name: string
  alpha3Code: string
}

export type ThemeMode = 'dark' | 'light'
