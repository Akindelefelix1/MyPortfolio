import { Contact } from '../components/sections/Contact'
import { PageHero } from '../components/ui/PageHero'

export function ContactPage() {
  return (
    <>
      <PageHero
        index="04"
        className="contact-page-hero"
        eyebrow="Contact"
        title="Good products begin with a clear conversation."
        description="I’m open to technical leadership, full-stack product development, architecture, and selected collaboration opportunities."
      />
      <Contact />
    </>
  )
}
