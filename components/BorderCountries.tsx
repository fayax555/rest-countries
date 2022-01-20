import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Border } from 'types'

interface Props {
  borders?: Border[]
}

const BorderCountries = ({ borders }: Props) => {
  if (!borders) return null

  return (
    <div>
      <br />
      Border Countries:
      <div>
        {borders.map(({ name, alpha3Code }) => (
          <Fragment key={name}>
            <Link href={`/${alpha3Code}`} passHref>
              <Button>{name} </Button>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const Button = styled.a`
  display: inline-block;
  border: 2px solid #444;
  margin: 0.25rem;
  padding: 0.35rem 1rem;
  cursor: pointer;
`

export default BorderCountries
