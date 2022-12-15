import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import PortfolioSwiper from 'components/PortfolioSwiper'
import { getAllCategories, getAllPostsByCategories } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import type { CatSlug, PostsProps } from 'types/blog'

const Home = ({ posts }: PostsProps) => {
  return (
    <>
      <Container>
        <Meta />

        <Hero title="PORTFOLIO" subtitle="Gen Hashimoto" />
        {/* <Hero title="PORTFOLIO" subtitle="Gen Hashimoto" imageOn /> */}
      </Container>
      <PortfolioSwiper posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const catSlug = 'p_list'

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }: CatSlug) => slug === catSlug)

  const posts = await getAllPostsByCategories(cat.id, 100, 'asc')

  for (const post of posts) {
    if (post && !Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  // console.log(posts)

  return {
    props: {
      posts: posts,
    },
  }
}
