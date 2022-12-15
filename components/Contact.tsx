import styled from 'styled-components'
import Social from 'components/Social'

const StyledStack = styled.div`
  & > * + * {
    margin-top: var(--stack-space, 1em);
  }
`

const StyledHeading = styled.h3`
  font-size: var(--body);
`

const Contact = () => {
  return (
    <StyledStack>
      <StyledHeading>CONTACT</StyledHeading>
      <Social iconSize="30px" />
    </StyledStack>
  )
}

export default Contact
