type ContactIconName = 'linkedin' | 'whatsapp' | 'email' | 'phone'

interface ContactIconProps {
  name: ContactIconName
}

export function ContactIcon({ name }: ContactIconProps) {
  const paths = {
    linkedin: <><path d="M6.5 8.5v9M6.5 5.5v.01M11 17.5v-5a3 3 0 0 1 6 0v5M11 10.5v7" /><path d="M3.5 3.5h17v17h-17z" /></>,
    whatsapp: <><path d="M19.2 4.8A8.5 8.5 0 0 0 5.1 15.1L4 20l4.9-1.1A8.5 8.5 0 1 0 19.2 4.8Z" /><path d="M8.2 7.8c.3-.3.7-.3 1-.1l1.1 1.7c.2.3.2.6-.1.9l-.5.5c.6 1.1 1.5 2 2.6 2.6l.5-.5c.3-.3.6-.3.9-.1l1.7 1.1c.3.2.3.7.1 1-.5.7-1.3 1-2.1.8-3.1-.7-5-2.6-5.8-5.8-.2-.8.1-1.6.8-2.1Z" /></>,
    email: <><rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4 7 8 6 8-6" /></>,
    phone: <><path d="M7.2 3.8 5.5 5.5c-.7.7-.8 1.8-.3 2.7 1.9 3.4 4.7 6.2 8.1 8.1.9.5 2 .4 2.7-.3l1.7-1.7-2.5-2.5-1.6 1.1a13.8 13.8 0 0 1-5.1-5.1l1.1-1.6-2.4-2.4Z" /></>,
  }

  return <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
