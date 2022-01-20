import { Dispatch, SetStateAction } from 'react'

interface Props {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <input
      placeholder='Search for a country...'
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default Search
