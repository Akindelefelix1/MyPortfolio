import { Reveal } from '../ui/Reveal'

const focusAreas = [
  { number: '01', title: 'Lead', text: 'I guide engineering teams, align stakeholders, and turn complex delivery goals into clear execution.' },
  { number: '02', title: 'Architect', text: 'I design secure, scalable systems across React, React Native, Node.js, APIs, databases, and real-time services.' },
  { number: '03', title: 'Deliver', text: 'I stay close to the work—from integrations and payment gateways to testing, deployment, and polished user experiences.' },
]

export function ProfessionSummary() {
  return (
    <section className="profession-summary" aria-labelledby="profession-summary-title">
      <div className="profession-summary-heading">
        <p className="profession-summary-label">Professional Summary</p>
        <h2 id="profession-summary-title">Full-stack Engineering with Technical Leadership.</h2>
        <p className="profession-summary-intro">
          I am a results-driven Full-Stack Developer, Mobile Engineer, and Technical Lead experienced in leading
          cross-functional teams, managing product lifecycles, and architecting scalable mobile and software solutions.
          I work across React Native, JavaScript, real-time systems, API integrations, and end-to-end delivery.
          With over 6 years of experience, I have delivered products across HR, education, government services,
          e-commerce, payments, and real-time platforms. I combine hands-on engineering with stakeholder communication,
          code review, testing, deployment, and team mentorship to turn ambitious ideas into maintainable software.
        </p>
      </div>
      <div className="profession-summary-grid">
        {focusAreas.map((area, index) => (
          <Reveal key={area.number} delay={index * 70}>
            <article>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
