import { additionalLeadershipProjects, experience, projects } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'

export function HomeProjects() {
  return (
    <section className="portfolio-page" aria-labelledby="portfolio-title">
      <header className="portfolio-masthead">
        <p className="portfolio-eyebrow">Portfolio / Selected work and experience</p>
        <h1 id="portfolio-title"><span>Products shipped.</span><br /><em>Teams led.</em></h1>
        <div className="portfolio-masthead-bottom">
          <p>Full-stack platforms, mobile products, government services, and technical leadership across complex deliveries.</p>
          <a href="#experience">Explore experience <span aria-hidden="true">↓</span></a>
        </div>
        <div className="portfolio-signal" aria-hidden="true">
          <i /><i /><i />
          <span>06 / 06</span>
        </div>
      </header>

      <div className="portfolio-projects" aria-label="Selected projects">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 45} className="portfolio-project-reveal">
            <article className={`portfolio-project-card ${project.accent}`}>
              <div className="portfolio-project-visual">
                {project.coverImage ? (
                  <img className="portfolio-project-cover" src={project.coverImage} alt={project.coverAlt ?? ''} />
                ) : (
                  <div className="portfolio-project-placeholder" aria-hidden="true">
                    <span>Selected work / {project.number}</span>
                    {project.logoImage ? <img className="portfolio-project-logo" src={project.logoImage} alt="" /> : <strong>{project.title}</strong>}
                    <small>{project.category}</small>
                  </div>
                )}
              </div>
              <div className="portfolio-project-copy">
                <div className="portfolio-project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="portfolio-project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="portfolio-project-actions">
                  {project.overviewHref && <a href={project.overviewHref} target="_blank" rel="noreferrer">Case overview ↗</a>}
                  <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {project.href.startsWith('http') ? 'Visit product ↗' : 'Discuss project ↗'}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="career-section" id="experience" aria-labelledby="experience-title">
        <div className="career-heading">
          <p>Professional experience</p>
          <h2 id="experience-title">More of the work behind these highlights.</h2>
        </div>
        <div className="career-timeline">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 30}>
              <article className="career-entry">
                <div className="career-marker" aria-hidden="true" />
                <p className="career-period"><span>Timeline</span>{item.period}</p>
                <div className="career-content">
                  <div className="career-content-heading">
                    <div>
                      <p className="career-company">{item.company}</p>
                      <h3>{item.role}</h3>
                    </div>
                    <span className="career-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="career-summary">{item.summary}</p>
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="additional-leadership" aria-labelledby="additional-title">
        <div><p>Additional project leadership</p><h2 id="additional-title">Coordinated and led technically.</h2></div>
        <div className="leadership-projects">
          {additionalLeadershipProjects.map((project) => <span key={project}>{project}</span>)}
        </div>
      </section>

      <div className="portfolio-cta">
        <p>Have a product challenge that needs technical ownership?</p>
        <a href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
