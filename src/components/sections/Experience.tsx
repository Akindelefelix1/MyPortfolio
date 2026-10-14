import { experience } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'
import { Reveal } from '../ui/Reveal'

export function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionLabel index="03">Experience</SectionLabel>
      <h2 id="experience-title">Where I’ve worked and what I’ve learned.</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <Reveal key={`${item.period}-${item.role}`} delay={index * 65}>
          <article>
            <p className="experience-period">{item.period}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
            </div>
            <p className="experience-summary">{item.summary}</p>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
