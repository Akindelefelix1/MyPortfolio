import { capabilities } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

export function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionLabel>Core competencies</SectionLabel>
      <div className="skills-heading">
        <h2 id="skills-title">Technical depth backed by delivery leadership.</h2>
        <p>Core competencies spanning architecture, Node.js, NestJS, mobile engineering, APIs, databases, delivery, and team leadership.</p>
      </div>
      <div className="skills-grid">
        {capabilities.map((skill, index) => (
          <Reveal key={skill} delay={index * 35}>
            <article><span aria-hidden="true">✦</span><h3>{skill}</h3></article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
