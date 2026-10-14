import { Experience } from '../components/sections/Experience'
import { PageHero } from '../components/ui/PageHero'

export function ExperiencePage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Career"
        title="A track record of ownership and delivery."
        description="From individual engineering to technical direction, I have led products and teams through architecture, implementation, integration, and launch."
      />
      <Experience />
    </>
  )
}
