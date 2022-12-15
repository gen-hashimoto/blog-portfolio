import { FaRegClock, FaEdit } from 'react-icons/fa'
import styled from 'styled-components'
import ConvertDate from 'components/ConvertDate'

type PostHeaderProps = {
  title?: string
  subtitle: string
  published: string
  updated: string
}

const StyledPostHeader = styled.div`
  padding: var(--space-sm) 0;

  & > * + * {
    margin-top: var(--stack-space, 1em);
  }
`

const StyledSubtitle = styled.p`
  font-size: var(--small-heading2);
  font-weight: bold;
`

const StyledTitle = styled.h1`
  --stack-space: 0.2em;
  font-size: var(--heading1);
  padding-left: 8px;
  border-left: 8px solid var(--gray-25);
  line-height: 1;
`

const StyledPublished = styled.div`
  display: flex;
  gap: 0.5em;
  color: var(--gray-50);
  font-size: var(--small-heading3);
  align-items: center;
`

const StyledUpdated = styled(StyledPublished)`
  color: var(--gray-25);
`

const PostHeader = ({
  title,
  subtitle,
  published = '',
  updated = '',
}: PostHeaderProps) => {
  return (
    <StyledPostHeader>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle>{title}</StyledTitle>
      {published && (
        <StyledPublished>
          <FaRegClock />
          <ConvertDate dateISO={published} />
        </StyledPublished>
      )}
      {updated && (
        <StyledUpdated>
          <FaEdit />
          <ConvertDate dateISO={updated} />
        </StyledUpdated>
      )}
    </StyledPostHeader>
  )
}

export default PostHeader
