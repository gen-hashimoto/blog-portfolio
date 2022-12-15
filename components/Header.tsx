import styled from 'styled-components'
import Container from 'components/Container'
import Nav from 'components/Nav'
import { layout } from 'styles/style-utils'

const S_flexContainer = styled.div`
  ${layout.spaceBetween}
`
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  background: var(--gray-10);
`

const Header = () => {
  return (
    <header>
      <StyledWrapper>
        <Container large>
          <S_flexContainer>
            <Nav />
          </S_flexContainer>
        </Container>
      </StyledWrapper>
    </header>
  )
}

export default Header
