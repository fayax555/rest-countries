import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

interface Props {
  region: string
  setRegion: Dispatch<SetStateAction<string>>
}

const Filter = ({ region, setRegion }: Props) => {
  return (
    <>
      <Menu>
        <StyledMenuButton>
          {region ? region : 'Filter by Region'} <span aria-hidden>▾</span>
        </StyledMenuButton>
        <StyledMenuList>
          <MenuItem onSelect={() => setRegion('Africa')}>Africa</MenuItem>
          <MenuItem onSelect={() => setRegion('Americas')}>Americas</MenuItem>
          <MenuItem onSelect={() => setRegion('Asia')}>Asia</MenuItem>
          <MenuItem onSelect={() => setRegion('Europe')}>Europe</MenuItem>
          <MenuItem onSelect={() => setRegion('Oceania')}>Oceania</MenuItem>
        </StyledMenuList>
      </Menu>
      {region && (
        <button title='remove filter' onClick={() => setRegion('')}>
          X
        </button>
      )}
    </>
  )
}

const StyledMenuButton = styled(MenuButton)`
  margin-top: 2rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.el};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  width: 200px;

  &:focus {
    outline: 2px solid #444;
  }
`

const StyledMenuList = styled(MenuList)`
  cursor: pointer;
  background: ${({ theme }) => theme.el};
  margin-top: 0.25rem;
  width: 200px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow[1]};
  padding: 0.5rem;

  > div {
    color: ${({ theme }) => theme.text};
    padding: 0.25rem 1rem;

    &[data-reach-menu-item][data-selected] {
      background: hsl(211, 81%, 36%);
      border-radius: 3px;
      color: white;
      outline: none;
    }
  }
`

export default Filter
