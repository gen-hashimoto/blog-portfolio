import styled, { css } from 'styled-components'

type ContainerProps = {
  large?: boolean
  children: React.ReactNode
}

type StyledContainerProps = {
  large: boolean
}

const container_default = css`
  width: 92%;
  max-width: 1152px;
  margin: 0 auto;
`

const container_large = css`
  ${container_default}
  max-width: 1280px;
`

const StyledContainer = styled.div<StyledContainerProps>`
  ${({ large }) => (large ? container_large : container_default)}
`

const Container = ({ large = false, children }: ContainerProps) => {
  return <StyledContainer large={large}>{children}</StyledContainer>
}

export default Container
