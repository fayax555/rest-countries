import styled from 'styled-components'
import { CountryListItem } from 'types'
import Card from './Card'

interface Props {
  filteredList: CountryListItem[]
}

const CardList = ({ filteredList }: Props) => {
  return (
    <CardListWrapper>
      {filteredList.map((country) => (
        <Card key={country.alpha3Code} {...country} />
      ))}
    </CardListWrapper>
  )
}

const CardListWrapper = styled.section`
  display: grid;
  justify-content: center;
  padding: 32px 0;
  row-gap: 60px;

  @media ${({ theme }) => theme.bp2} {
    grid-template-columns: repeat(2, auto);
    justify-content: space-evenly;
  }

  @media ${({ theme }) => theme.bp3} {
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
  
  }
`

export default CardList
