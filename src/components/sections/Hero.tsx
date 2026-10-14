import { profile } from '../../data/portfolio'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-light" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-greeting">Hi, I am</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">Technical Lead / Full-Stack Developer</p>
          <p className="hero-intro">I turn ambitious product ideas into secure, scalable software people enjoy using.</p>
          <div className="hero-actions">
            <a className="hero-primary" href="/portfolio">View portfolio</a>
            <a className="hero-text-link" href={`mailto:${profile.email}`}>Let&rsquo;s work together <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img src="/idowu-akindele-felix.jpeg" alt="Portrait of Idowu Akindele Felix" fetchPriority="high" decoding="async" />
        </figure>
      </div>
    </section>
  )
}
