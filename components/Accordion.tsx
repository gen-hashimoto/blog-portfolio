import React, { useState, useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import styled from 'styled-components'

type AccordionProps = {
  heading: string
  children: React.ReactNode
}

type StyledButtonProps = {
  textIsOpen: boolean
}

type StyledTargetProps = {
  textIsOpen: boolean
  currentHeight: string
}

const StyledBox = styled.div`
  border: solid 1px var(--gray-25);
  border-radius: 4px;
`

const StyledHeading = styled.div`
  font-size: var(--body);
`

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  outline: revert;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  & svg {
    color: var(--gray-25);
    font-size: 1.25em;
    transition: 0.4s;
    ${({ textIsOpen }) => textIsOpen && `transform: rotate(180deg);`}
  }
`

const StyledTarget = styled.div<StyledTargetProps>`
  overflow: hidden;
  height: 0;
  transition: none;
  animation: closeAnim 0.5s forwards;
  ${({ textIsOpen }) =>
    textIsOpen &&
    `
    height: auto;
    animation: openAnim 0.5s forwards;
  `}

  @keyframes openAnim {
    0% {
      height: 0;
    }
    50% {
      height: ${({ currentHeight }) => currentHeight};
    }
    100% {
      height: auto;
    }
  }

  @keyframes closeAnim {
    0% {
      height: ${({ currentHeight }) => currentHeight};
    }
    100% {
      height: 0;
    }
  }
`

const StyledText = styled.div`
  padding: 0 1.14em 1.14em;
  font-size: calc(val(--body) * 0.875);
`

const Accordion = ({ heading, children }: AccordionProps) => {
  const [textIsOpen, setTextIsOpen] = useState(false)

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }

  const refText = useRef<HTMLDivElement>(null)
  const currentHeight = refText.current
    ? `${refText.current.scrollHeight}px`
    : '0px'

  return (
    <StyledBox>
      <StyledHeading>
        <StyledButton onClick={toggleText} textIsOpen={textIsOpen}>
          <span>{heading}</span>
          <FaAngleDown />
        </StyledButton>
      </StyledHeading>
      <StyledTarget
        textIsOpen={textIsOpen}
        ref={refText}
        currentHeight={currentHeight}
      >
        <StyledText>{children}</StyledText>
      </StyledTarget>
    </StyledBox>
  )
}

export default Accordion
