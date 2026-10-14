import type { Experience, Project } from '../types/portfolio'

export const profile = {
  name: 'Idowu Akindele Felix',
  role: 'Technical Lead & Full-Stack Software Developer',
  location: 'Nigeria',
  email: 'akindelefelix1@gmail.com',
  phone: '+234 810 705 0824',
  phoneHref: '+2348107050824',
  availability: 'Available for technical partnerships',
  intro: 'I lead engineering teams and build secure, scalable mobile and software products—from architecture and APIs to polished user experiences.',
}

export const projects: Project[] = [
  {
    id: 1, number: '01', title: 'CephasHR', category: 'End-to-end product development', year: '2026',
    description: 'A connected human-resources platform for recruitment, employee management, attendance, payroll, performance, document workflows, and workforce operations.',
    tags: ['Full-stack development', 'Database', 'Mail services'], href: 'https://hr.cephasict.com/#/login',
    overviewHref: 'https://cephas-suite.vercel.app/people', accent: 'accent-coral', coverImage: '/cephashr-cover.png',
    coverAlt: 'CephasHR overview showing employee, level, position, department, and branch totals',
  },
  {
    id: 2, number: '02', title: 'CEDU', category: 'End-to-end educational platform', year: '2026',
    description: 'A family-centred learning and gaming platform connecting learner journeys, household controls, payments, rewards, content administration, and measurable progress.',
    tags: ['React & TypeScript', 'Node & PostgreSQL', 'Render deployment'], href: 'https://cedu.cephassuite.com/login',
    accent: 'accent-blue', coverImage: '/cedu-cover.png',
    coverAlt: 'CEDU platform showing its educational games and structured learning experiences',
  },
  {
    id: 3, number: '03', title: 'OGFIMS', category: 'Government mobile services', year: 'Public sector',
    description: 'A mobile experience supporting government service operations through payments, push notifications, multilingual access, and streamlined vendor-to-user interactions.',
    tags: ['Mobile', 'Payments', 'Localization'], href: 'https://ogunfarminfo.org/', accent: 'accent-lime',
    coverImage: '/ogfims-cover.png', coverAlt: 'OGFIMS homepage showing the Ogun State Farmers Information Management System',
  },
  {
    id: 4, number: '04', title: 'Artisan Connect', category: 'Mobile services platform', year: '2023–25',
    description: 'A mobile platform with integrated payments, real-time WebSocket communication, performance-focused architecture, and production releases across both major app stores.',
    tags: ['React Native', 'Paystack', 'WebSockets'], href: '/contact', accent: 'accent-violet',
  },
  {
    id: 5, number: '05', title: 'Get-2-Know', category: 'Interactive quiz platform', year: '2024–25',
    description: 'An engaging quiz experience with progress tracking, scoring, instant feedback, and real-time competitive modes for individuals and groups.',
    tags: ['Mobile Engineering', 'Real-time', 'Product Development'], href: '/contact', accent: 'accent-gold',
  },
]

export const experience: Experience[] = [
  {
    period: 'July 2025 - November 2025', role: 'Project Team Lead / Technical Coordinator', company: 'Providus Bank - Contract',
    summary: 'Coordinated a cross-functional banking delivery from planning through launch.',
    highlights: [
      'Managed and coordinated all project activities, built timelines, defined scope, and ensured alignment with business objectives.',
      'Led cross-functional meetings and coordinated backend, frontend, QA, and product stakeholders for seamless information flow.',
      'Aligned backend and frontend teams, resolved integration conflicts, and maintained architectural consistency.',
      'Monitored risks, tracked milestones, and ensured timely delivery of secure, compliant, high-quality features.',
    ],
  },
  {
    period: 'May 2025 - October 2025', role: 'Technical Lead', company: 'Rubies Tech',
    summary: 'Led technical direction and coordinated engineering delivery across teams and stakeholders.',
    highlights: [
      'Led technical direction and coordinated development teams to ensure successful delivery of engineering tasks and product implementations.',
      'Coordinated review meetings between stakeholders and technical teams to align expectations, clarify requirements, and track progress.',
      'Facilitated risk identification, resource planning, and process improvements to enhance project delivery efficiency.',
    ],
  },
  {
    period: 'August 2020 - Present', role: 'Software Engineer & Technical Lead', company: 'Cephas ICT Hub',
    summary: 'Lead engineering teams and build scalable mobile and software systems.',
    highlights: [
      'Led engineering teams in building and integrating multiple systems using APIs and reusable components.',
      'Designed and implemented scalable mobile and software solutions using JavaScript and React Native.',
      'Architected and integrated third-party APIs to enhance functionality and user experience.',
      'Conducted unit, integration, and system testing for reliable product delivery.',
      'Collaborated with cross-functional teams to align execution with product vision and business goals.',
      'Delivered clean, maintainable, long-term scalable code.',
    ],
  },
  {
    period: '2026', role: 'Full-Stack Software Developer', company: 'CEDU - Cephas Educational Games',
    summary: 'Owned the learning platform across frontend, backend, database, integrations, and deployment.',
    highlights: [
      'Built learner and administration experiences with React and TypeScript.',
      'Developed backend APIs and PostgreSQL data workflows.',
      'Integrated transactional email and supporting services.',
      'Managed staging deployment and continued product delivery.',
    ],
  },
  {
    period: 'Government project', role: 'Mobile Engineer / Technical Lead', company: 'OGFIMS - Ogun State Government Project',
    summary: 'Delivered mobile services for government operations and agricultural information access.',
    highlights: [
      'Developed and optimized mobile application components for government service operations.',
      'Implemented push notifications, payment gateway integrations, and multilingual translation features.',
      'Built vendor-user interaction flows that improved service communication and system usability.',
      'Delivered clean architecture and ensured seamless backend-frontend alignment.',
    ],
  },
  {
    period: 'UK client project', role: 'Technical Lead', company: 'Duvic Drop',
    summary: 'Provided product-wide leadership from technical planning through successful launch.',
    highlights: [
      'Provided technical leadership and oversight throughout the project lifecycle.',
      'Coordinated engineering tasks and guided the mobile development team toward a successful product launch.',
      'Maintained delivery alignment across the engineering lifecycle.',
    ],
  },
  {
    period: 'July 2023 - January 2025', role: 'Mobile Engineer', company: 'Artisan Connect',
    summary: 'Owned major mobile architecture, integrations, performance, and store releases.',
    highlights: [
      'Designed architecture and integration for all major mobile app components.',
      'Implemented Paystack payments and real-time WebSocket chat.',
      'Optimized app performance using profiling and memory analysis.',
      'Managed App Store and Play Store releases end to end.',
    ],
  },
  {
    period: 'February 2023 - November 2023', role: 'Software Engineer', company: 'HonourWorld App',
    summary: 'Built mobile utility-purchase experiences and reliable payment integrations.',
    highlights: [
      'Built mobile features for airtime, data, electricity tokens, and cable subscriptions.',
      'Integrated Paystack, Monnify, and Flutterwave for flexible payments.',
      'Improved real-time functionality for smooth user transactions.',
    ],
  },
  {
    period: 'October 2024 - January 2025', role: 'Software Engineer', company: 'Get-2-Know',
    summary: 'Built interactive quiz experiences for individual and competitive play.',
    highlights: [
      'Built advanced quiz features with progress tracking, scoring, and instant feedback.',
      'Implemented real-time competitive quiz modes for individuals and groups.',
      'Participated in product collaboration, feature design, and maintenance.',
    ],
  },
]

export const additionalLeadershipProjects = ['Flat Pad', 'Celma', 'Sound Map', 'Rams']

export const capabilities = [
  'Technical leadership & team management', 'Solution architecture & system design',
  'Mobile app development — React Native & Expo', 'Node.js — Express & NestJS', 'React',
  'API integration & third-party services', 'Payment gateway implementation', 'Real-time systems & WebSockets', 'Software design & code review',
  'Project planning & Agile execution', 'Version control — GitHub & SVN', 'CI/CD & version control',
  'Database optimization & profiling', 'Stakeholder communication & documentation',
]

export const education = {
  degree: 'B.Tech, Biochemistry', institution: 'Ladoke Akintola University of Technology', period: 'Jan 2017 — Aug 2023',
}

export const certifications = [
  'Certified Project Manager', 'Leadership & Management', 'Google AI Essentials', 'Prompt Engineering',
  'Foundations of Project Management', 'Interpersonal Skills', 'Basics of Finance',
]
