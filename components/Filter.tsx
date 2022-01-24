import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { TiDelete } from 'react-icons/ti'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

interface Props {
  region: string
  setRegion: Dispatch<SetStateAction<string>>
}

const Filter = ({ region, setRegion }: Props) => (
  <Wrapper>
    <Menu>
      <StyledMenuButton>
        <span>{region ? region : 'Filter by Region'} </span>
        <span aria-hidden>
          <ArrowDownIcon />
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
      <DeleteIcon title='remove filter' onClick={() => setRegion('')} />
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  display: flex;
`

const DeleteIcon = styled(TiDelete)`
  cursor: pointer;
  font-size: 2rem;
  top: 20px;
  transform: translateY(8px);

  &:hover {
    color: #f87373;
  }

  @media ${({ theme }) => theme.bp2} {
    transform: revert;
    position: absolute;
    right: 0;
    top: -32px;
  }
`

const StyledMenuButton = styled(MenuButton)`
  all: unset;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.el};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  font-size: ${({ theme }) => theme.fs[6]};
  font-weight: ${({ theme }) => theme.fw.semiBold};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 3px;
  width: 200px;
  height: 55px;
  padding: 0 24px;

  &:focus {
    outline: 2px solid #444;
  }

  @media ${({ theme }) => theme.bp3} {
    font-size: ${({ theme }) => theme.fs[5]};
  }
`

const StyledMenuList = styled(MenuList)`
  background: ${({ theme }) => theme.el};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  font-size: ${({ theme }) => theme.fs[6]};
  font-weight: ${({ theme }) => theme.fw.semiBold};
  cursor: pointer;
  width: 200px;
  border-radius: 3px;
  margin-top: 4px;
  padding: 6px 0;

  > div {
    color: ${({ theme }) => theme.text};
    padding: 7.5px 0;
    padding-left: 24px;

    @media ${({ theme }) => theme.bp3} {
      font-size: ${({ theme }) => theme.fs[5]};
    }

    &[data-reach-menu-item][data-selected] {
      background: hsl(211, 81%, 36%);
      border-radius: 3px;
      color: white;
      outline: none;
    }
  }
`

const ArrowDownIcon = styled(RiArrowDownSLine)`
  transform: translateY(1px);
  font-size: clamp(1rem, 1vw, 1.2rem);
`

export default Filter
