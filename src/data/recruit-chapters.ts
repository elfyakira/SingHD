export interface RecruitChapter {
  id: string
  number: string
  title: string
  titleEn: string
  href: string
  phase: 'hook' | 'empathy' | 'growth' | 'apply'
}

export const recruitChapters: RecruitChapter[] = [
  { id: 'top', number: '①', title: 'TOP', titleEn: 'TOP', href: '/miraiku/recruit', phase: 'hook' },
  { id: 'brand-story', number: '②', title: 'ブランドストーリー', titleEn: 'BRAND STORY', href: '/miraiku/recruit/about#brand-story', phase: 'hook' },
  { id: 'founder', number: '③', title: '創業ストーリー', titleEn: 'FOUNDER STORY', href: '/miraiku/recruit/about#founder', phase: 'empathy' },
  { id: 'letter', number: '④', title: '子供への手紙', titleEn: 'LETTER', href: '/miraiku/recruit/about#letter', phase: 'empathy' },
  { id: 'sing-name', number: '⑤', title: 'Singという名前', titleEn: 'OUR NAME', href: '/miraiku/recruit/about#sing-name', phase: 'empathy' },
  { id: 'mission', number: '⑥', title: '企業理念', titleEn: 'MISSION & VISION', href: '/miraiku/recruit/about#mission', phase: 'empathy' },
  { id: 'last-boss', number: '⑦', title: 'ラスボス', titleEn: 'LAST BOSS', href: '/miraiku/recruit/last-boss', phase: 'growth' },
  { id: 'adventure-map', number: '⑧', title: '冒険マップ', titleEn: 'ADVENTURE MAP', href: '/miraiku/recruit/adventure-map', phase: 'growth' },
  { id: 'characters', number: '⑨', title: '求める人物', titleEn: 'WHO WE ARE LOOKING FOR', href: '/miraiku/recruit/characters', phase: 'growth' },
  { id: 'oath', number: '⑩', title: '冒険者の誓い', titleEn: "ADVENTURER'S OATH", href: '/miraiku/recruit/oath', phase: 'growth' },
  { id: 'story-watanabe', number: '⑪', title: '渡邉大輝の物語', titleEn: 'CHALLENGER STORY', href: '/miraiku/recruit/stories/watanabe', phase: 'growth' },
  { id: 'story-iida', number: '⑪', title: '飯田思遠の物語', titleEn: 'CHALLENGER STORY', href: '/miraiku/recruit/stories/iida', phase: 'growth' },
  { id: 'message', number: '⑫', title: '最後のメッセージ', titleEn: 'LAST MESSAGE', href: '/miraiku/recruit/entry#message', phase: 'apply' },
  { id: 'jobs', number: '⑬', title: '募集要項', titleEn: 'RECRUIT', href: '/miraiku/recruit/entry#jobs', phase: 'apply' },
]

export function getChapterNav(currentId: string) {
  const index = recruitChapters.findIndex((c) => c.id === currentId)
  return {
    current: recruitChapters[index],
    prev: index > 0 ? recruitChapters[index - 1] : null,
    next: index < recruitChapters.length - 1 ? recruitChapters[index + 1] : null,
  }
}
