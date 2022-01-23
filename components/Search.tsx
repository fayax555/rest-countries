import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'

interface Props {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <InputWrapper>
      <label htmlFor='search'>
        <StyledIcon />
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
  /* height: 100%; */
  position: relative;
  margin-top: 24px;
  margin-bottom: 40px;
`

const StyledIcon = styled(IoIosSearch)`
  position: absolute;
  top: 26%;
  left: 2rem;
  height: 20px;
  width: 20px;
  font-size: 1.25rem;
`

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fs[6]};
  letter-spacing: 0.01em;
  box-shadow: ${({ theme }) => theme.shadow[1]};
  background: ${({ theme }) => theme.el};
  border: none;
  padding: 1rem 4.5rem;
  display: block;
  border-radius: 5px;
  width: 100%;
  height: 50px;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }

  @media ${({ theme }) => theme.bp3} {
    width: 450px;
  }
`

export default Search
