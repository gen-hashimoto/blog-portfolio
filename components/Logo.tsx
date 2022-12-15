import Link from 'next/link'
import styled, { css } from 'styled-components'

type LogoProps = {
  boxOn?: boolean
}

type StyledLogoProps = {
  boxOn: boolean
}

const logoBasic = css`
  font-size: var(--heading2);
  font-weight: bold;
`

const logoBox = css`
  font-size: var(--small-heading2);
  font-weight: 700;
  background-color: var(--gray-75);
  padding: 1em 2em;
  color: var(--white);
  transition: 0.4s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--gray-75);
    transition: 0.4s;
  }

  @media (hover: hover) {
    &:hover {
      &::after {
        height: 4px;
      }
    }
  }

  @media (hover: none) {
    & a {
      -webkit-tap-highlight-color: transparent;
    }

    & a:active {
      color: var(--accent);
    }
  }
`

const StyledLogo = styled.div<StyledLogoProps>`
  ${({ boxOn }) => (boxOn ? logoBox : logoBasic)}
`

const Logo = ({ boxOn = false }: LogoProps): JSX.Element => {
  return (
    <Link href="/">
      <StyledLogo boxOn={boxOn}>_gh</StyledLogo>
    </Link>
  )
}

export default Logo
