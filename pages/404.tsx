import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'

const Custom404 = () => {
  return (
    <Container>
      <Meta pageTitle="404 - This page could not be found." />
      <Hero title="404" subtitle="Page not found" />
      {/* <Hero title="PORTFOLIO" subtitle="Gen Hashimoto" imageOn /> */}
    </Container>
  )
}

export default Custom404
