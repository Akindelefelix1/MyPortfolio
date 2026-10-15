import { useState, type FormEvent, type ReactNode } from 'react'
import { certifications, education, experience, profile, projects } from '../../data/portfolio'

const aboutSummary = 'I’m a technical lead and full-stack software developer focused on scalable mobile-first products, dependable systems, and high-quality delivery. I work across architecture, React Native, React, Node.js, real-time systems, and third-party integrations, while helping cross-functional teams turn product goals into secure, maintainable software.'
const skills = 'Technical Leadership & Team Management|Solution Architecture & System Design|Mobile App Development (React Native & Expo)|Node.js (Express & NestJS)|React|API Integration & Third-Party Services|Software Design & Code Review|Project Planning & Agile Execution|Real-time Systems (WebSockets)|CI/CD & Version Control (GitHub, SVN)|Performance Optimization & Profiling|Stakeholder Communication & Documentation'

type SectionKey = 'summary' | 'skills' | 'experience' | 'projects' | 'education' | 'certifications'

export function CvBuilder() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [passwordOpen, setPasswordOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [visible, setVisible] = useState<Record<SectionKey, boolean>>({ summary: true, skills: true, experience: true, projects: true, education: true, certifications: true })
  const [selectedProjects, setSelectedProjects] = useState(projects.map((project) => project.id))
  const [projectText, setProjectText] = useState(projects.map((project) => `${project.title} — ${project.category} (${project.year})`).join('|'))
  const [name, setName] = useState(profile.name.toUpperCase())
  const [role, setRole] = useState('Technical Lead & Solutions Architect')
  const [email, setEmail] = useState(profile.email)
  const [phone, setPhone] = useState(profile.phone)
  const [summary, setSummary] = useState(aboutSummary)
  const [skillText, setSkillText] = useState(skills)
  const [educationText, setEducationText] = useState(`${education.degree} ${education.institution} — ${education.period}`)
  const [certificationText, setCertificationText] = useState(certifications.join('|'))
  const [experienceText, setExperienceText] = useState(experience.map((item) => ({ role: item.role, company: `${item.company} — ${item.period}`, highlights: item.highlights })))

  const unlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password === '1234321') { setIsUnlocked(true); setPasswordOpen(false); setPassword(''); setPasswordError('') }
    else setPasswordError('Incorrect password. Please try again.')
  }

  const toggleSection = (key: SectionKey, checked: boolean) => setVisible((current) => ({ ...current, [key]: checked }))
  const toggleProject = (id: number, checked: boolean) => {
    setSelectedProjects((current) => checked ? [...current, id] : current.filter((projectId) => projectId !== id))
    if (!checked) setProjectText((current) => current.split('|').filter((item) => !item.startsWith(`${projects.find((project) => project.id === id)?.title} —`)).join('|'))
    if (checked) {
      const project = projects.find((item) => item.id === id)
      if (project) setProjectText((current) => current ? `${current}|${project.title} — ${project.category} (${project.year})` : `${project.title} — ${project.category} (${project.year})`)
    }
  }

  return <section className="cv-builder" aria-labelledby="cv-builder-title">
    {!isUnlocked && <div className="cv-access">{!passwordOpen ? <button className="cv-access-button" type="button" onClick={() => setPasswordOpen(true)}>Preview, tailor, and download my CV</button> : <form className="cv-access-form" onSubmit={unlock}><label htmlFor="cv-password">Enter password to continue</label><div><input id="cv-password" type="password" value={password} onChange={(event) => { setPassword(event.target.value); setPasswordError('') }} autoFocus /><button type="submit">Continue</button></div>{passwordError && <p role="alert">{passwordError}</p>}</form>}</div>}

    {isUnlocked && <>
      <div className="cv-builder-heading"><div><p className="contact-kicker"><span /> CV builder</p><h2 id="cv-builder-title">Preview, tailor, and download my CV.</h2><p>Select Portfolio projects and edit the content before downloading the CV.</p></div><div className="cv-builder-actions"><button type="button" onClick={() => setShowPreview(true)}>Preview selected CV</button><a href="/idowu-akindele-felix-cv.pdf" target="_blank" rel="noreferrer">Preview original CV</a><button type="button" onClick={() => window.print()}>Download selected PDF</button></div></div>
      <div className={`cv-builder-layout${showPreview ? '' : ' cv-builder-layout-hidden'}`}>
        <aside className="cv-controls" aria-label="CV controls"><h3>Include sections</h3>{(['summary', 'skills', 'experience', 'projects', 'education', 'certifications'] as SectionKey[]).map((key) => <label className="cv-toggle" key={key}><input type="checkbox" checked={visible[key]} onChange={(event) => toggleSection(key, event.target.checked)} /><span>{key === 'summary' ? 'Professional summary' : key === 'projects' ? 'Portfolio projects' : key[0].toUpperCase() + key.slice(1)}</span></label>)}
          {visible.projects && <div className="cv-project-picker"><h3>Select Portfolio projects</h3>{projects.map((project) => <label className="cv-toggle" key={project.id}><input type="checkbox" checked={selectedProjects.includes(project.id)} onChange={(event) => toggleProject(project.id, event.target.checked)} /><span>{project.title}</span></label>)}</div>}
        </aside>
        {showPreview && <article className="cv-paper cv-template-paper" aria-label="Editable CV preview">
          <header className="template-header"><input className="template-name" value={name} onChange={(event) => setName(event.target.value)} aria-label="Name" /><input className="template-role" value={role} onChange={(event) => setRole(event.target.value)} aria-label="Role" /><input value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Email" /><input value={phone} onChange={(event) => setPhone(event.target.value)} aria-label="Phone" /></header>
          {visible.summary && <TemplateSection title="PROFESSIONAL SUMMARY"><textarea value={summary} onChange={(event) => setSummary(event.target.value)} aria-label="Professional summary" /></TemplateSection>}
          {visible.skills && <TemplateSection title="CORE COMPETENCIES"><EditableBullets value={skillText} onChange={setSkillText} ariaLabel="Core competencies" /></TemplateSection>}
          {visible.experience && <TemplateSection title="PROFESSIONAL EXPERIENCE">{experienceText.map((item, index) => <div className="template-experience" key={`${item.company}-${index}`}><input className="template-job-role" value={item.role} onChange={(event) => setExperienceText((current) => current.map((entry, entryIndex) => entryIndex === index ? { ...entry, role: event.target.value } : entry))} aria-label="Job role" /><input className="template-company" value={item.company} onChange={(event) => setExperienceText((current) => current.map((entry, entryIndex) => entryIndex === index ? { ...entry, company: event.target.value } : entry))} aria-label="Company and period" /><EditableBullets value={item.highlights.join('|')} onChange={(value) => setExperienceText((current) => current.map((entry, entryIndex) => entryIndex === index ? { ...entry, highlights: value.split('|') } : entry))} ariaLabel="Experience highlights" /></div>)}</TemplateSection>}
          {visible.projects && <TemplateSection title="ADDITIONAL PROJECT LEADERSHIP"><EditableBullets value={projectText} onChange={setProjectText} ariaLabel="Selected Portfolio projects" /></TemplateSection>}
          {visible.education && <TemplateSection title="EDUCATION"><textarea value={educationText} onChange={(event) => setEducationText(event.target.value)} aria-label="Education" /></TemplateSection>}
          {visible.certifications && <TemplateSection title="CERTIFICATIONS"><EditableBullets value={certificationText} onChange={setCertificationText} ariaLabel="Certifications" /></TemplateSection>}
        </article>}
      </div>
    </>}
  </section>
}

function TemplateSection({ title, children }: { title: string; children: ReactNode }) { return <section className="template-section"><h3>{title}</h3>{children}</section> }
function EditableBullets({ value, onChange, ariaLabel, readOnly = false }: { value: string; onChange: (value: string) => void; ariaLabel: string; readOnly?: boolean }) { return <textarea className="template-bullets" value={value.split('|').map((item) => `• ${item}`).join('\n')} onChange={(event) => onChange(event.target.value.split('\n').map((line) => line.replace(/^•\s*/, '')).filter(Boolean).join('|'))} aria-label={ariaLabel} readOnly={readOnly} /> }
