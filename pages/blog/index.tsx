import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import Posts from 'components/Posts'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import type { Post } from 'types/blog'

type BlogIndexProps = {
  posts: Post[]
}

const BlogIndex = ({ posts }: BlogIndexProps) => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="Blog index" />

      <Hero title="Blog" subtitle="[ ... portfolio ]" />
      <Posts posts={posts} />
    </Container>
  )
}
export default BlogIndex

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  // const posts = (await getAllPosts()) as Post[]

  for (const post of posts) {
    // console.log('post:', post)
    if (post && !Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
