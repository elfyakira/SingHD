import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface GuideArticle {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  featured: boolean
  tags: string[]
  readingTime: string
  image: string
  content: string
}

const guideDirectory = path.join(process.cwd(), 'src/content/guide')

export function getAllGuideSlugs(): string[] {
  try {
    if (!fs.existsSync(guideDirectory)) return []
    return fs
      .readdirSync(guideDirectory)
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

export function getGuideArticle(slug: string): GuideArticle | null {
  try {
    const fullPath = path.join(guideDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category || '',
      excerpt: data.excerpt || '',
      featured: data.featured || false,
      tags: data.tags || [],
      readingTime: data.readingTime || '3分',
      image: data.image || `/img/recruit/guide/${slug}.png`,
      content,
    }
  } catch {
    return null
  }
}

export function getAllGuideArticles(): GuideArticle[] {
  return getAllGuideSlugs()
    .map((slug) => getGuideArticle(slug))
    .filter((a): a is GuideArticle => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getGuidesByCategory(category: string): GuideArticle[] {
  const all = getAllGuideArticles()
  if (category === 'all') return all
  return all.filter((a) => a.category === category)
}

/** Markdown → HTML（簡易レンダラー） */
export function renderMarkdown(md: string): string {
  const lines = md.split('\n')
  const html: string[] = []
  let inList = false

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed === '') {
      if (inList) { html.push('</ul>'); inList = false }
      continue
    }
    if (trimmed === '---') {
      if (inList) { html.push('</ul>'); inList = false }
      html.push('<hr class="my-8 border-gray-200" />')
      continue
    }
    if (trimmed.startsWith('### ')) {
      if (inList) { html.push('</ul>'); inList = false }
      html.push(`<h3 class="text-lg font-bold text-[#1C2A44] mt-8 mb-3">${inline(trimmed.slice(4))}</h3>`)
      continue
    }
    if (trimmed.startsWith('## ')) {
      if (inList) { html.push('</ul>'); inList = false }
      html.push(`<h2 class="text-xl font-bold text-[#1C2A44] mt-10 mb-4 pb-2 border-b border-gray-200">${inline(trimmed.slice(3))}</h2>`)
      continue
    }
    if (trimmed.startsWith('# ')) {
      if (inList) { html.push('</ul>'); inList = false }
      html.push(`<h1 class="text-2xl font-bold text-[#1C2A44] mt-10 mb-4">${inline(trimmed.slice(2))}</h1>`)
      continue
    }
    if (trimmed.startsWith('> ')) {
      if (inList) { html.push('</ul>'); inList = false }
      html.push(`<blockquote class="border-l-4 border-[#2563EB]/30 pl-4 my-4 text-gray-600 italic">${inline(trimmed.slice(2))}</blockquote>`)
      continue
    }
    if (trimmed.startsWith('- ')) {
      if (!inList) { html.push('<ul class="list-disc pl-6 my-4 space-y-1 text-gray-700">'); inList = true }
      html.push(`<li>${inline(trimmed.slice(2))}</li>`)
      continue
    }

    if (inList) { html.push('</ul>'); inList = false }
    html.push(`<p class="text-gray-700 leading-relaxed mb-4">${inline(trimmed)}</p>`)
  }

  if (inList) html.push('</ul>')
  return html.join('\n')
}

function inline(text: string): string {
  return text
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#2563EB] hover:underline">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#1C2A44]">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$1</code>')
}
