import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const newsDirectory = path.join(process.cwd(), 'content', 'news')

export interface NewsArticle {
  slug: string
  title: string
  date: string
  category: string
}

export interface NewsArticleDetail extends NewsArticle {
  contentHtml: string
}

export function getAllNews(): NewsArticle[] {
  if (!fs.existsSync(newsDirectory)) return []

  const fileNames = fs.readdirSync(newsDirectory).filter((f) => f.endsWith('.md'))

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(newsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      category: data.category as string,
    }
  })

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getNewsBySlug(slug: string): Promise<NewsArticleDetail | null> {
  const fullPath = path.join(newsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const result = await remark().use(html).process(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as string,
    contentHtml: result.toString(),
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(newsDirectory)) return []

  return fs
    .readdirSync(newsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
