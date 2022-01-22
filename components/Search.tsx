import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

interface Props {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <InputWrapper>
      <label htmlFor='search'>
        <StyledFaSearch />
      </label>
      <Input
        placeholder='Search for a country...'
        type='text'
        id='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  height: 100%;
  position: relative;
`

const StyledFaSearch = styled(FaSearch)`
  position: absolute;
  top: 1rem;
  left: 2rem;
`

const Input = styled.input`
  color: ${({ theme }) => theme.input};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  border: none;
  padding: 1rem 4.5rem;
  display: block;
  border-radius: 5px;

  @media (min-width: 1100px) {
    width: 450px;
  }
`

export default Search
