/* eslint-disable @next/next/no-img-element */
import styled, { css } from 'styled-components'
import { numberWithCommas } from 'utils'
import BorderCountries from './BorderCountries'
import Link from 'next/link'
import { CgArrowLeft } from 'react-icons/cg'
import type { CountryData } from 'types'

interface ListItemProps {
  title: string
  value?: string
}

const ListItem = ({ title, value }: ListItemProps) =>
  value ? (
    <StyledListItem>
      <span>{title}: </span>
      {value}
    </StyledListItem>
  ) : null

const StyledListItem = styled.div`
  font-size: ${({ theme }) => theme.fs[5]};
  line-height: 30px;
  letter-spacing: 0.035em;

  > span {
    font-weight: ${({ theme }) => theme.fw.semiBold};
  }

  @media ${({ theme }) => theme.bp3} {
    font-size: ${({ theme }) => theme.fs[4]};
  }
`

const CountryInfo = (c: CountryData) => (
  <Wrapper>
    <Link href={`/`} passHref>
      <BackButton>
        <StyledArrowLeft />
        <span>Back</span>
      </BackButton>
    </Link>
    <Content>
      <Flag src={c.flag} alt={c.name} />
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
            value={c.topLevelDomain?.join(', ')}
          />
          <ListItem
            title='Currencies'
            value={c.currencies?.map(({ name }) => name).join(', ')}
          />
          <ListItem
            title='Languages'
            value={c.languages?.map(({ name }) => name).join(', ')}
          />
        </div>
        <BorderCountries borders={c.borders} />
      </Details>
    </Content>
  </Wrapper>
)

const Wrapper = styled.main`
  max-width: 1440px;
  margin: auto;
  padding: clamp(40px, 7vw, 80px) clamp(28px, 7vw, 80px);
`

const BackButton = styled.button`
  all: unset;
  box-shadow: ${({ theme }) => theme.shadow[2]};
  background: ${({ theme }) => theme.el};
  font-size: ${({ theme }) => theme.fs[5]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 24px;
  height: 32px;
  width: 104px;
  margin-bottom: clamp(64px, 7vw, 80px);
  border-radius: 3px;
  letter-spacing: 0.05em;
`

const StyledArrowLeft = styled(CgArrowLeft)`
  height: 16px;
  width: 16px;
`

const Content = styled.div`
  display: grid;
  justify-content: center;
  gap: 44px;

  @media ${({ theme }) => theme.bp3} {
    justify-content: space-between;
    grid-template-columns: 50% 45%;
  }
`

const Flag = styled.img`
  width: 320px;
  @media ${({ theme }) => theme.bp2} {
    width: 500px;
  }
  @media ${({ theme }) => theme.bp3} {
    width: 560px;
  }
`

const Details = styled.div`
  display: grid;
  gap: 30px;
  max-width: 320px;

  > h2 {
    ${({ theme: { fs, fw } }) => css`
      font-size: clamp(${fs[3]}, 0.9vw + 1.1rem, ${fs[1]});
      font-weight: ${fw.extraBold};
    `};
  }

  > div {
    margin-bottom: 8px;
  }

  @media ${({ theme }) => theme.bp2} {
    align-content: center;
    grid-template-columns: 1fr 1fr;
    max-width: 500px;

    > h2 {
      font-weight: ${({ theme }) => theme.fw.extraBold};
      letter-spacing: 0.02em;
    }

    > h2,
    > *:last-child {
      grid-column: 1 / -1;
    }
  }

  @media ${({ theme }) => theme.bp3} {
    max-width: revert;
  }
`

export default CountryInfo
