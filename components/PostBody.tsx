import styled from 'styled-components'

type PostBodyProps = {
  children: React.ReactNode
}

const StyledStack = styled.div`
  & > * + * {
    margin-top: var(--stack-space, 1.5em);
  }

  & h2,
  & h3 {
    --stack-space: 2em;
  }

  & h2 + *,
  & h3 + * {
    --stack-space: 0.8em;
  }

  & h2 {
    font-size: var(--heading2);
    font-weight: bold;
    padding-left: 8px;
    border-left: 8px solid var(--accent);
    line-height: 1;
  }

  & h3 {
    font-size: var(--heading3);
    font-weight: bold;
    margin-left: 8px;
    line-height: 1;
  }

  & p {
    line-height: 1.8;
  }

  & ul {
    padding: revert;
    list-style: revert;
  }

  & img {
    /* width: 100%;
    max-width: 640px;
    margin: 0 auto; */
    border-radius: 4px;
  }
`

const PostBody = ({ children }: PostBodyProps) => {
  return <StyledStack>{children}</StyledStack>
}

export default PostBody
