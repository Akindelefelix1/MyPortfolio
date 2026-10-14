export interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  href: string
  overviewHref?: string
  accent: string
  number: string
  coverImage?: string
  coverAlt?: string
  logoImage?: string
}

export interface Experience {
  period: string
  role: string
  company: string
  summary: string
  highlights: string[]
}
