import { Work } from '../components/sections/Work'
import { PageHero } from '../components/ui/PageHero'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Selected projects"
        title="Systems built to work in the real world."
        description="Platforms I have engineered across human resources, education, government services, payments, real-time systems, and mobile experiences."
      />
      <Work />
    </>
  )
}
