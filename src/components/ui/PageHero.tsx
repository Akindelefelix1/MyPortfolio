interface PageHeroProps {
  index: string
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="page-hero-meta">
        <p>{eyebrow}</p>
      </div>
      <h1>{title}</h1>
      <p className="page-hero-description">{description}</p>
      <div className="page-hero-mark" aria-hidden="true"><i /><i /></div>
    </header>
  )
}
