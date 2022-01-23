import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

interface Props {
  region: string
  setRegion: Dispatch<SetStateAction<string>>
}

const Filter = ({ region, setRegion }: Props) => {
  return (
    <div>
      <Menu>
        <StyledMenuButton>
          <span>{region ? region : 'Filter by Region'} </span>
          <span aria-hidden>
            <StyledArrowDown />
          </span>
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
    </div>
  )
}

const StyledMenuButton = styled(MenuButton)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.el};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  font-size: ${({ theme }) => theme.fs[6]};
  font-weight: ${({ theme }) => theme.fw.semiBold};
  width: 200px;
  height: 50px;
  padding: 0 24px;

  &:focus {
    outline: 2px solid #444;
  }
`

const StyledMenuList = styled(MenuList)`
  background: ${({ theme }) => theme.el};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  font-size: ${({ theme }) => theme.fs[6]};
  font-weight: ${({ theme }) => theme.fw.semiBold};
  cursor: pointer;
  width: 200px;
  border-radius: 5px;
  margin-top: 4px;
  padding: 6px 0;

  > div {
    color: ${({ theme }) => theme.text};
    padding: 7.5px 0;
    padding-left: 24px;

    &[data-reach-menu-item][data-selected] {
      background: hsl(211, 81%, 36%);
      border-radius: 3px;
      color: white;
      outline: none;
    }
  }
`

const StyledArrowDown = styled(RiArrowDownSLine)`
  transform: translateY(3px);
`

export default Filter
