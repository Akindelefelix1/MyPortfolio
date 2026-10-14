import { certifications, education } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'
import { Reveal } from '../ui/Reveal'

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <SectionLabel>About</SectionLabel>
      <Reveal className="about-grid">
        <h2 id="about-title">Curious by nature. Precise by practice.</h2>
        <div className="about-copy">
          <p>
            I’m a technical lead and full-stack software developer focused on scalable mobile-first products,
            dependable systems, and high-quality delivery.
          </p>
          <p>
            I work across architecture, React Native, React, Node.js, real-time systems, and third-party integrations,
            while helping cross-functional teams turn product goals into secure, maintainable software.
          </p>
        </div>
      </Reveal>
      <div className="credentials-grid">
        <Reveal>
          <div className="credential-block">
            <p className="credential-label">Education</p>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <span>{education.period}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="credential-block">
            <p className="credential-label">Certifications</p>
            <ul>
              {certifications.map((certification) => <li key={certification}>{certification}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
