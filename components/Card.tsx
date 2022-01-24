/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import Link from 'next/link'
import { numberWithCommas } from 'utils'
import type { CountryListItem } from 'types'

const Card = (c: CountryListItem) => (
  <Link href={`/${c.alpha3Code}`} passHref>
    <CardWrapper>
      <img src={c.flag} alt={c.name} />
      <div>
        <h2>{c.name}</h2>
        <p>
          <span>Population:</span> {numberWithCommas(c.population)}
        </p>
        <p>
          <span>Region:</span> {c.region}
        </p>
        <p>
          <span>Capital:</span> {c.capital}
        </p>
      </div>
    </CardWrapper>
  </Link>
)

const CardWrapper = styled.a`
  display: block;
  cursor: pointer;
  background: ${({ theme }) => theme.el};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  height: 336px;
  width: 264px;
  border-radius: 3px;

  > img {
    height: 159px;
    width: 264px;
    border-radius: 5px 5px 0 0;
  }

  > div {
    padding: 24px;

    > h2 {
      font-size: ${({ theme }) => theme.fs[4]};
      font-weight: ${({ theme }) => theme.fw.extraBold};
      letter-spacing: 0.06em;
      padding-bottom: 18px;
    }

    > p {
      font-size: ${({ theme }) => theme.fs[5]};
      letter-spacing: 0.035em;
      padding-bottom: 6px;

      > span {
        font-weight: ${({ theme }) => theme.fw.semiBold};
      }
    }
  }
`

export default Card
