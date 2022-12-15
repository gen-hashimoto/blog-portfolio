import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import Container from 'components/Container'
import Meta from 'components/Meta'
import PostHeader from 'components/PostHeader'
import Posts from 'components/Posts'
import { getAllCategories, getAllPostsByCategories } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import type { CatSlug, CategoryProps } from 'types/blog'

const Category = ({ name, posts }: CategoryProps) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader
        title={name}
        subtitle="Blog Category"
        published=""
        updated=""
      />
      <Posts posts={posts} />
    </Container>
  )
}

export default Category

export async function getStaticPaths() {
  const allCats = await getAllCategories()

  return {
    paths: allCats.map(({ slug }: CatSlug) => `/blog/category/${slug}`),
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  // 変数名を変更して分割代入
  const { slug: catSlug } = context.params as IParams

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }: CatSlug) => slug === catSlug)

  const posts = await getAllPostsByCategories(cat.id)

  for (const post of posts) {
    if (post && !Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  }
}
