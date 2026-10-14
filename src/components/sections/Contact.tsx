import { profile } from '../../data/portfolio'

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <p>Have a project in mind?</p>
      <h2 id="contact-title">Let’s make something worth remembering.</h2>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
        <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
      </div>
      <div className="contact-orbit" aria-hidden="true"><span>Say hello · Start a project · </span></div>
    </section>
  )
}
