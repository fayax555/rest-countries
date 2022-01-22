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
  max-width: 1400px;
  margin: 0 auto;
  gap: 2rem;
  justify-content: center;
  padding: 1rem 2rem;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default CardList
