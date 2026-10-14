import { projects } from '../../data/portfolio'
import { SectionLabel } from '../ui/SectionLabel'
import { Reveal } from '../ui/Reveal'

export function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <SectionLabel index="01">Selected projects</SectionLabel>
      <h2 id="work-title">Products I’m proud to have helped bring to life.</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 70}>
          <article className="project-card">
            <div className={`project-visual ${project.accent}`} aria-hidden={project.coverImage ? undefined : true}>
              <span className="visual-index">PROJECT / {project.number}</span>
              {project.coverImage ? (
                <img className="project-cover" src={project.coverImage} alt={project.coverAlt ?? ''} />
              ) : (
                <div className={`product-frame product-frame-${project.id}`}>
                  <div className="frame-top"><i /><i /><i /><b>{project.title}</b></div>
                  <div className="frame-body">
                    <aside><i /><i /><i /><i /></aside>
                    <div className="frame-content">
                      <span>{project.category}</span>
                      <strong>{project.title}</strong>
                      <div className="frame-grid"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
              )}
              <span className="visual-status">LIVE SYSTEM <i /></span>
            </div>
            <div className="project-copy">
              <div className="project-heading">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <span>{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-actions">
                {project.overviewHref && (
                  <a href={project.overviewHref} target="_blank" rel="noreferrer">
                    View overview <span aria-hidden="true">↗</span>
                  </a>
                )}
                <a
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {project.href.startsWith('http') ? 'Open live project' : 'Discuss this project'} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
