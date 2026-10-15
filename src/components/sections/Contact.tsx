import { profile } from '../../data/portfolio'
import { ContactIcon } from '../ui/ContactIcon'
import { CvBuilder } from './CvBuilder'

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-heading">
          <p className="contact-kicker"><span /> Available for thoughtful technical partnerships</p>
          <h2 id="contact-title">Let&rsquo;s make something worth remembering.</h2>
          <p className="contact-note">
            Tell me what you are building, where the challenge is, and what success looks like. I&rsquo;ll bring the
            technical clarity and hands-on delivery needed to move it forward.
          </p>
        </div>
        <div className="contact-links" aria-label="Contact details">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="contact-card-label"><ContactIcon name="email" />Email</span>
            <strong>{profile.email}</strong>
            <small>Start a conversation <span aria-hidden="true">↗</span></small>
          </a>
          <a className="contact-card" href={`tel:${profile.phoneHref}`}>
            <span className="contact-card-label"><ContactIcon name="phone" />Phone</span>
            <strong>{profile.phone}</strong>
            <small>Let&rsquo;s talk through the details <span aria-hidden="true">↗</span></small>
          </a>
          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-card-label"><ContactIcon name="linkedin" />LinkedIn</span>
            <strong>Connect with me</strong>
            <small>View my professional profile <span aria-hidden="true">↗</span></small>
          </a>
        </div>
      </div>
      <div className="contact-orbit" aria-hidden="true"><span>Say hello · Start a project · </span></div>
      <CvBuilder />
    </section>
  )
}
