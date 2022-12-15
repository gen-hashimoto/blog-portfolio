import { Tooltip } from '@chakra-ui/react'
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa'
import styled from 'styled-components'

type SocialProps = {
  iconSize?: string
}

const StyledList = styled.ul<SocialProps>`
  display: flex;
  gap: 0.5em;
  font-size: ${({ iconSize }) => iconSize ?? '24px'};

  & a {
    display: flex;
    align-items: center;
  }
`

const Social = ({ iconSize }: SocialProps) => {
  return (
    <StyledList iconSize={iconSize}>
      <li>
        <a href="https://twitter.com/_genhashimoto">
          <FaTwitterSquare />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/gen-hashimoto/">
          <FaGithubSquare />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
      <li>
        <Tooltip hasArrow label="coming soon" placement="top">
          <div>
            <FaEnvelopeSquare />
            <span className="sr-only">Mail</span>
          </div>
        </Tooltip>
      </li>
    </StyledList>
  )
}

export default Social
