interface SectionLabelProps {
  index?: string
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="section-label">{children}</p>
  )
}
