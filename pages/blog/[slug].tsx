import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps } from 'next'
import Image from 'next/legacy/image'
import { getPlaiceholder } from 'plaiceholder'
import styled from 'styled-components'
import Container from 'components/Container'
import ConvertBody from 'components/ConvertBody'
import Meta from 'components/Meta'
import Pagination from 'components/Pagination'
import PostBody from 'components/PostBody'
import PostCategories from 'components/PostCategories'
import PostHeader from 'components/PostHeader'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/TwoColumn'
import { getPostBySlug, getAllSlugs } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { prevNextPost } from 'lib/prev-next-post'
import type { Blog, Slug } from 'types/blog'

const StyledFigure = styled.figure`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  & span {
    border-radius: 8px;
  }
`

const Post = ({
  title,
  published,
  updated,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}: Blog) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader
          title={title}
          subtitle="Blog Article"
          published={published}
          updated={updated}
        />

        <StyledFigure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 640px) 640px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </StyledFigure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export default Post

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }: Slug) => `/blog/${slug}`),
    fallback: 'blocking',
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const post = await getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  } else {
    const eyecatch = post.eyecatch ?? eyecatchLocal

    const updated = post.customUpdatedDate ?? ''

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
      props: {
        title: post.title,
        published: post.customPublishedDate,
        updated: updated,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: post.description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    }
  }
}
