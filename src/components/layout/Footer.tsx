import { profile } from '../../data/portfolio'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name} <span>— Built with intention.</span></p>
      <div className="site-footer-contact">
        <address>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
        </address>
        <Link to="/">Home ↑</Link>
      </div>
    </footer>
  )
}
