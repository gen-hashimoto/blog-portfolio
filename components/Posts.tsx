import { Tooltip } from '@chakra-ui/react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FaRegClock, FaEdit } from 'react-icons/fa'
import styled from 'styled-components'
import ConvertDate from 'components/ConvertDate'
import { postTag } from 'styles/style-utils'
import type { PostsProps } from 'types/blog'

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-jump);
  margin-top: var(--space-xs);
  margin-bottom: var(--space-lg);
`

const StyledEachPost = styled.article`
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  & h2 {
    font-size: var(--small-heading3);
    font-weight: normal;
  }

  & figure {
    aspect-ratio: 16/9;

    & img {
      transition: 0.4s;
      @media (hover: hover) {
        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }
`

const StyledTag = styled.div`
  ${postTag}

  @media (max-width: 767px) {
    & span {
      width: 8px;
      height: 8px;
    }
  }
`

const StyledBody = styled.div`
  padding: calc(var(--space-xs) * 0.5);
`

const StyledPublished = styled.div`
  display: flex;
  gap: 0.5em;
  color: var(--gray-50);
  font-size: var(--small-heading3);
  align-items: center;
  justify-content: flex-end;
`

const StyledUpdated = styled(StyledPublished)`
  color: var(--gray-25);
`

const Posts = ({ posts }: PostsProps) => {
  return (
    <StyledGridContainer>
      {posts.map(
        ({
          title,
          slug,
          eyecatch,
          customPublishedDate: published,
          customUpdatedDate: updated,
          soon,
        }) => {
          const currentTime = new Date().getTime()
          const publishedTime = new Date(Date.parse(published)).getTime()
          const updatedTime = new Date(Date.parse(updated)).getTime()

          const pastDaysPublished =
            (currentTime - publishedTime) / (1000 * 60 * 60 * 24)
          const pastDaysUpdated =
            (currentTime - updatedTime) / (1000 * 60 * 60 * 24)

          return (
            <StyledEachPost key={slug}>
              <Link href={`/blog/${slug}`}>
                <figure>
                  <Image
                    src={eyecatch.url}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    width={eyecatch.width}
                    height={eyecatch.height}
                    sizes="(min-width: 1152px) 576px, 50vw"
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}
                  />
                  <StyledTag>
                    {published && pastDaysPublished <= 7 && (
                      <Tooltip hasArrow label="new" placement="top">
                        <span className="new"></span>
                      </Tooltip>
                    )}
                    {updated && pastDaysUpdated <= 7 && (
                      <Tooltip hasArrow label="updated" placement="top">
                        <span className="updated"></span>
                      </Tooltip>
                    )}
                    {soon && (
                      <Tooltip hasArrow label="coming soon" placement="top">
                        <span className="soon"></span>
                      </Tooltip>
                    )}
                  </StyledTag>
                </figure>
                <StyledBody>
                  <h2>{title}</h2>
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
                </StyledBody>
              </Link>
            </StyledEachPost>
          )
        },
      )}
    </StyledGridContainer>
  )
}

export default Posts
