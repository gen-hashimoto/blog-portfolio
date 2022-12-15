import styled from 'styled-components'
import { layout } from 'styles/style-utils'

type TwoColumnProps = {
  children: React.ReactNode
}

type TwoColumnMainProps = {
  children: React.ReactNode
}

type TwoColumnSidebarProps = {
  children: React.ReactNode
}

const StyledFlexContainer = styled.div`
  ${layout.sideBySide}
  gap: var(--space-md);
  margin: var(--space-md) 0 var(--space-lg);
`

const StyledMain = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    max-width: 768px;
  }
`

const StyledSidebar = styled.div`
  @media (min-width: 768px) {
    min-width: 240px;
    position: sticky;
    top: 40px;
    align-self: flex-start;

    & * {
      text-align: right;
    }

    & :is(div, ul) {
      width: fit-content;
      margin-left: auto;
      place-items: flex-end;
      place-content: flex-end;
    }
  }
`

const TwoColumn = ({ children }: TwoColumnProps) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>
}

const TwoColumnMain = ({ children }: TwoColumnMainProps) => {
  return <StyledMain>{children}</StyledMain>
}

const TwoColumnSidebar = ({ children }: TwoColumnSidebarProps) => {
  return <StyledSidebar>{children}</StyledSidebar>
}

export { TwoColumn, TwoColumnMain, TwoColumnSidebar }
