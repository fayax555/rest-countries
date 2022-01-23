/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import Link from 'next/link'
import type { CountryListItem } from 'types'
import { numberWithCommas } from 'utils'

const Card = (country: CountryListItem) => {
  const { name, population, region, flag, capital, alpha3Code } = country

  return (
    <Link href={`/${alpha3Code}`} passHref>
      <CardWrapper>
        <img src={flag} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>
            <span>Population:</span> {numberWithCommas(population)}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </CardWrapper>
    </Link>
  )
}

const CardWrapper = styled.a`
  display: block;
  cursor: pointer;
  background: ${({ theme }) => theme.el};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  height: 336px;
  width: 264px;
  border-radius: 5px;

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
