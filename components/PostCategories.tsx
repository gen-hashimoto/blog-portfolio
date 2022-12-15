import Link from 'next/link'
import { FaRegFolderOpen } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import type { Category } from 'types/blog'

type PostCategoriesProps = {
  categories: Category[]
}

const baseFlex = css`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  color: var(--gray-50);

  @media (min-width: 768px) {
    flex-direction: column;
  }
`

const StyledFlexContainer = styled.div`
  ${baseFlex}
  align-items: center;
`

const StyledHeading = styled.span`
  font-size: var(--heading3);
  display: flex;
`

const StyledList = styled.ul`
  ${baseFlex}

  font-size: var(--small-heading2);
  gap: 0.75rem;
`

const PostCategories = ({ categories }: PostCategoriesProps) => {
  return (
    <StyledFlexContainer>
      <StyledHeading>
        <FaRegFolderOpen />
        <span className="sr-only">Categories</span>
      </StyledHeading>
      <StyledList>
        {categories.map(({ id, name, slug }) => (
          <li key={id}>
            <Link href={`/blog/category/${slug}`}>{name}</Link>
          </li>
        ))}
      </StyledList>
    </StyledFlexContainer>
  )
}

export default PostCategories
