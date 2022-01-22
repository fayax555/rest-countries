import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

interface Props {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <Input
      placeholder='Search for a country...'
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

const Input = styled.input`
  color: ${({ theme }) => theme.input};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  border: none;
  padding: 0.25rem 1rem;
`

export default Search
