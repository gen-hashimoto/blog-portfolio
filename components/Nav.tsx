import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

type StyledNavProps = {
  isOpen: boolean
}

type StyledButtonProps = {
  isOpen: boolean
  isSticky: boolean
}

const StyledList = styled.ul<StyledNavProps>`
  display: grid;
  gap: 40px;
  place-content: center;
  text-align: center;
  font-size: var(--heading2);
  font-weight: bold;

  position: fixed;
  inset: 0 100% 0 -100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  color: var(--gray-50);
  opacity: 0;
  transition: 0.4s;

  ${({ isOpen }) =>
    isOpen &&
    `
      transform: translateX(100%);
      opacity:1;
    `}

  @media (hover: none) {
    & a {
      -webkit-tap-highlight-color: transparent;
    }

    & a:active {
      color: var(--accent);
    }
  }
`

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  outline: revert;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  & span {
    z-index: 200;
    filter: drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.8));
    transition: 0.4s;

    ${({ isSticky }) =>
      isSticky &&
      `
      animation: navBtn-fix 1s both;
      position: fixed !important;
      top: 25px;
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8));
    `}

    ${({ isOpen }) =>
      isOpen &&
      `
      filter: drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.8));
    `}

    @keyframes navBtn-fix {
      0% {
        transform: translateY(-90px);
      }

      100% {
        transform: translateY(0);
      }
    }
  }

  & img {
    z-index: 20;
  }
`

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  // navBtn on off
  const [isSticky, setIsSticky] = useState(false)

  const toggleSticky = () => {
    window.scrollY > 90 ? setIsSticky(true) : setIsSticky(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleSticky)
    return () => window.removeEventListener('scroll', toggleSticky)
  }, [])

  return (
    <nav>
      {navIsOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
            /* position: fixed; */
            width: 100%;
          }
        `}</style>
      )}
      <StyledButton onClick={toggleNav} isSticky={isSticky} isOpen={navIsOpen}>
        {/* <img src="/favicon.png" alt="" width="40" height="40" /> */}
        <Image
          layout="fixed"
          src="/favicon.png"
          width={40}
          height={40}
          alt=""
        />
      </StyledButton>
      <StyledList isOpen={navIsOpen}>
        <li>
          <Link href="/" onClick={closeNav}>
            Top
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            Blog
          </Link>
        </li>
      </StyledList>
    </nav>
  )
}

export default Nav
