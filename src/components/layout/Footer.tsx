import { profile } from '../../data/portfolio'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name} <span>— Built with intention.</span></p>
      <div>
        <Link to="/">Home ↑</Link>
      </div>
    </footer>
  )
}
