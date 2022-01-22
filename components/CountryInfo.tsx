/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { numberWithCommas } from 'utils'
import BorderCountries from './BorderCountries'
import Link from 'next/link'
import { CgArrowLeft } from 'react-icons/cg'
import type { CountryData } from 'types'

interface ListItemProps {
  title: string
  value: string
}

const ListItem = ({ title, value }: ListItemProps) => (
  <StyledListItem>
    <span>{title}: </span>
    {value}
  </StyledListItem>
)

const StyledListItem = styled.div`
  line-height: 1.8;
  > span {
    font-weight: ${({ theme }) => theme.fw.semiBold};
  }
`

const CountryInfo = (c: CountryData) => (
  <Wrapper>
    <Link href={`/`} passHref>
      <BackButton>
        <CgArrowLeft />
        Back
      </BackButton>
    </Link>
    <Content>
      <img src={c.flag} alt={c.name} />
      <Details>
        <h2>{c.name}</h2>
        <div>
          <ListItem title='Native Name' value={c.nativeName} />
          <ListItem title='Population' value={numberWithCommas(c.population)} />
          <ListItem title='Region' value={c.region} />
          <ListItem title='Sub Region' value={c.subregion} />
          <ListItem title='Capital' value={c.capital} />
        </div>
        <div>
          <ListItem
            title='Top Level Domain'
            value={c.topLevelDomain.join(', ')}
          />
          <ListItem
            title='Currencies'
            value={c.currencies.map(({ name }) => name).join(', ')}
          />
          <ListItem
            title='Languages'
            value={c.languages.map(({ name }) => name).join(', ')}
          />
        </div>
        <BorderCountries borders={c.borders} />
      </Details>
    </Content>
  </Wrapper>
)

const Details = styled.div`
  display: grid;
  gap: 1rem 2rem;

  @media (min-width: 1000px) {
    align-content: center;
    grid-template-columns: 1fr 1fr;

    > h2,
    > *:last-child {
      grid-column: 1 / -1;
    }
  }
`

const Wrapper = styled.div`
  max-width: 300px;
  margin: 1rem auto;
  padding: 1rem;

  @media (min-width: 1000px) {
    max-width: 1100px;
  }
`

const Content = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 45% 50%;
    gap: 1rem;
  }
`

const BackButton = styled.button`
  all: unset;
  padding: 0.5rem 2rem;
  margin-bottom: 3rem;
  box-shadow: ${({ theme }) => theme.shadow[2]};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;

  > * {
    font-size: 1.5rem;
  }
`

export default CountryInfo
