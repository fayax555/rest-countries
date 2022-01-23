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
  gap: 40px;
  justify-content: center;
  padding-top: 32px;

  @media ${({ theme }) => theme.bp2} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.bp3} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default CardList
