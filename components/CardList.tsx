import styled from 'styled-components'
import { CountryListItem } from 'types'
import Card from './Card'

interface Props {
  filteredList: CountryListItem[]
}

const CardList = ({ filteredList }: Props) => (
  <CardListWrapper count={filteredList.length}>
    {filteredList.map((country) => (
      <Card key={country.alpha3Code} {...country} />
    ))}
  </CardListWrapper>
)

const CardListWrapper = styled.section<{ count: number }>`
  display: grid;
  justify-content: center;
  padding: 32px 0;
  row-gap: 60px;

  @media ${({ theme }) => theme.bp2} {
    grid-template-columns: repeat(2, auto);
    justify-content: space-evenly;
  }

  @media ${({ theme }) => theme.bp3} {
    gap: clamp(0px, 10vw-10rem, 75px);
    grid-template-columns: repeat(${(p) => (p.count < 4 ? p.count : 4)}, auto);
    justify-content: ${(p) => (p.count < 4 ? 'space-evenly' : 'space-between')};
  }
`

export default CardList
