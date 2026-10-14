import { About } from '../components/sections/About'
import { ProfessionSummary } from '../components/sections/ProfessionSummary'
import { PageHero } from '../components/ui/PageHero'

export function AboutPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Profile"
        title="Technical depth. Leadership clarity."
        description="I connect product thinking, software architecture, and hands-on engineering to help teams deliver dependable digital products."
        className="about-page-hero"
      />
      <ProfessionSummary />
      <About />
    </>
  )
}
