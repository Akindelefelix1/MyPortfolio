interface PageHeroProps {
  index: string
  eyebrow: string
  title: string
  description: string
  className?: string
}

export function PageHero({ index, eyebrow, title, description, className = '' }: PageHeroProps) {
  return (
    <header className={`page-hero ${className}`}>
      <div className="page-hero-meta">
        <span>{index}</span>
        <p>{eyebrow}</p>
      </div>
      <h1>{title}</h1>
      <p className="page-hero-description">{description}</p>
      <div className="page-hero-mark" aria-hidden="true"><i /><i /></div>
    </header>
  )
}
