import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'

type LayoutProps = {
  children: React.ReactNode
}

const StyledGridLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <StyledGridLayout>
      <Header />

      <main>{children}</main>

      <Footer />
    </StyledGridLayout>
  )
}

export default Layout
