import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { SkillsPage } from './pages/SkillsPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageShell />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skill" element={<SkillsPage />} />
          <Route path="skills" element={<Navigate to="/skill" replace />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="projects" element={<Navigate to="/portfolio" replace />} />
          <Route path="work" element={<Navigate to="/portfolio" replace />} />
          <Route path="experience" element={<Navigate to="/portfolio" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
