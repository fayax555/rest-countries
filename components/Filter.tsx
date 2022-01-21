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
          <MenuItem onSelect={() => setRegion('Afria')}>Afria</MenuItem>
          <MenuItem onSelect={() => setRegion('Ameria')}>Ameria</MenuItem>
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
  padding: 1rem;
  border: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* width: 130px; */

  &:focus {
    outline: 2px solid #444;
  }
`

const StyledMenuList = styled(MenuList)`
  cursor: pointer;
  background: #fff;
  border: 2px solid #444;
  margin-top: 0.25rem;
  width: 150px;

  > div {
    color: red;
    padding: 0.25rem 1rem;

    &[data-reach-menu-item][data-selected] {
      background: hsl(211, 81%, 36%);
      color: white;
      outline: none;
    }
  }
`

export default Filter
