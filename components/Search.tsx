import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'

interface Props {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => (
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

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.bp3} {
    margin-bottom: 16px;
  }
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
  border-radius: 3px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.045em;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }

  @media ${({ theme }) => theme.bp3} {
    font-size: ${({ theme }) => theme.fs[5]};
    width: 480px;
  }
`

export default Search
