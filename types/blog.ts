export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title?: string
  slug: string
  published: string
  updated: string
  soon: boolean
  description: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
    blurDataURL: string
  }
  categories: Category[]
  prevPost: Slug
  nextPost: Slug
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  slug: string
}

export type Slug = {
  title: string
  slug: string
}

export type Post = {
  title: string
  slug: string
  description: string
  eyecatch: {
    url: string
    height: number
    width: number
    blurDataURL?: string
  }
  customPublishedDate: string
  customUpdatedDate: string
  soon: boolean
}

export type CatSlug = {
  name: string
  id: string
  slug: string
}

export type CategoryProps = {
  name: string
  posts: Post[]
}

export type PostsProps = {
  posts: Post[]
}
