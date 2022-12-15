import { getSeverSideSitemap } from 'next-sitemap'
import { getAllSlugs, getAllCategories } from 'lib/api'
import { siteMeta } from 'lib/constants'

const Sitemap = () => {
  return
}

export async function getServerSideProps(context) {
  const posts = await getAllSlugs()
  const postFields = posts.map((post) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/${post.slug}`,
      lastmod: post.revisedAt,
      changefreq: 'daily',
    }
  })

  const cats = await getAllCategories()
  const catFields = cats.map((cat) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/${cat.slug}`,
    }
  })

  const allFields = [...postFields, ...catFields]

  return await getSeverSideSitemap(context, allFields)
}

export default Sitemap
