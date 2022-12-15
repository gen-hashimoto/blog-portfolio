import styled from 'styled-components'
import Container from 'components/Container'
import Logo from 'components/Logo'
import Social from 'components/Social'
import { layout } from 'styles/style-utils'

const StyledFlexContainer = styled.div`
  ${layout.sideBySideCenter}
  gap: 1em;
`

const StyledWrapper = styled.div`
  padding: var(--space-xs) 0;
  background: var(--gray-10);
`

const Footer = () => {
  return (
    <footer>
      <StyledWrapper>
        <Container>
          <StyledFlexContainer>
            <Logo />
            <Social />
          </StyledFlexContainer>
        </Container>
      </StyledWrapper>
    </footer>
  )
}

export default Footer
