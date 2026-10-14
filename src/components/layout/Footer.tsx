import { profile } from '../../data/portfolio'
import { Link } from 'react-router-dom'
import { ContactIcon } from '../ui/ContactIcon'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name} <span>— Built with intention.</span></p>
      <div className="site-footer-contact">
        <div className="site-footer-social">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><ContactIcon name="linkedin" />LinkedIn ↗</a>
          <a href={`https://wa.me/${profile.phoneHref}`} target="_blank" rel="noreferrer"><ContactIcon name="whatsapp" />WhatsApp ↗</a>
        </div>
        <address>
          <a href={`mailto:${profile.email}`}><ContactIcon name="email" />{profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}><ContactIcon name="phone" />{profile.phone}</a>
        </address>
        <Link to="/">Home ↑</Link>
      </div>
    </footer>
  )
}
