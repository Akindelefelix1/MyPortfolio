import { capabilities } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

export function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionLabel>Core competencies</SectionLabel>
      <div className="skills-hero">
        <div className="skills-heading">
          <p className="skills-overline">01 / Engineering capability</p>
          <h2 id="skills-title">Technical depth backed by delivery leadership.</h2>
          <p className="skills-intro">Core competencies spanning architecture, Node.js, NestJS, mobile engineering, APIs, databases, delivery, and team leadership.</p>
        </div>
        <div className="skills-hero-visual" aria-hidden="true">
          <div className="skills-orbit skills-orbit-one" />
          <div className="skills-orbit skills-orbit-two" />
          <div className="skills-core"><span>BUILD</span><strong>+</strong><span>LEAD</span></div>
          <span className="skill-float skill-float-one">Architecture</span>
          <span className="skill-float skill-float-two">APIs</span>
          <span className="skill-float skill-float-three">Payments</span>
          <span className="skill-float skill-float-four">Delivery</span>
        </div>
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
