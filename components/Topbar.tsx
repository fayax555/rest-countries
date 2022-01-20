import styled from 'styled-components'

interface Props {}

const Topbar = () => {
  return (
    <Header>
      <h1>Where in the world?</h1>
      <div>Dark Mode</div>
    </Header>
  )
}

const Header = styled.header`
  border: 2px solid #444;
`

export default Topbar
