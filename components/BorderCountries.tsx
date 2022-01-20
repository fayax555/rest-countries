import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Border } from 'types'

interface Props {
  borders?: Border[]
}

const BorderCountries = ({ borders }: Props) => {
  return (
    <div>
      Border Countries:
      {/* {borders.map(({ name, alpha3Code }) => (
        <Fragment key={name}>
          <Link href={`/${alpha3Code.toLocaleLowerCase()}`} passHref>
            <Button>{name} </Button>
          </Link>
        </Fragment>
      ))} */}
    </div>
  )
}

const Button = styled.button`
  border: 2px solid #444;
  margin: 0.25rem;
  padding: 0.35rem;
  cursor: pointer;
`

export default BorderCountries
