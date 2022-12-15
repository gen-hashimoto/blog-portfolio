import Link from 'next/link'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import styled from 'styled-components'
import { layout } from 'styles/style-utils'

type PaginationProps = {
  prevText: string
  prevUrl: string
  nextText: string
  nextUrl: string
}

const StyledList = styled.ul`
  ${layout.spaceBetween}
  margin: var(--space-lg) 0;
`

const StyledPrev = styled.li`
  & a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    & span {
      max-width: 30vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`

const StyledNext = styled(StyledPrev)`
  margin-left: auto;
`

const Pagination = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}: PaginationProps) => {
  return (
    <StyledList>
      {prevText && prevUrl && (
        <StyledPrev>
          <Link href={prevUrl}>
            <FaArrowAltCircleLeft />
            <span>{prevText}</span>
          </Link>
        </StyledPrev>
      )}
      {nextText && nextUrl && (
        <StyledNext>
          <Link href={nextUrl}>
            <FaArrowAltCircleRight />
            <span>{nextText}</span>
          </Link>
        </StyledNext>
      )}
    </StyledList>
  )
}

export default Pagination
