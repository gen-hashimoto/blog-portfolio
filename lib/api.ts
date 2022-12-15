import { createClient } from 'microcms-js-sdk'

// Initialize Client SDK.
const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})

const getPostBySlug = async (slug: string) => {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log('+++ getPostBySlug +++')
    console.log(err)
  }
}

const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug',
        orders: '-customPublishedDate',
        limit: limit,
      },
    })
    return slugs.contents
  } catch (err) {
    console.log('+++ getAllBySlug +++')
    console.log(err)
  }
}

const getAllPosts = async (limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields:
          'title,slug,eyecatch,customPublishedDate,customUpdatedDate,soon',
        orders: '-customPublishedDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('+++ getAllPosts +++')
    console.log(err)
  }
}

const getAllCategories = async (limit = 100) => {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })
    return categories.contents
  } catch (err) {
    console.log('+++ getAllCategories +++')
    console.log(err)
  }
}

const getAllPostsByCategories = async (
  catID: string,
  limit = 100,
  order = 'desc',
) => {
  try {
    const orders =
      order === 'desc' ? '-customPublishedDate' : 'customPublishedDate'
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields:
          'title,slug,description,eyecatch,customPublishedDate,customUpdatedDate,soon',
        orders: orders,
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('+++ getAllPostsByCategories +++')
    console.log(err)
  }
}

export {
  client,
  getPostBySlug,
  getAllSlugs,
  getAllPosts,
  getAllCategories,
  getAllPostsByCategories,
}
