/**
 * Verified Knowledge Base for Google Gemini AI Recruiter Assistant
 * 
 * Source files inspected:
 * - src/app/layout.tsx
 * - src/components/About.tsx
 * - src/components/Skills.tsx
 * - src/components/Projects.tsx
 * - src/components/Qualification.tsx
 * - src/components/Credentials.tsx
 * - src/components/Contact.tsx
 */

export interface ContactInfo {
  email: string;
  emailUrl: string;
  linkedin: string;
  linkedinUrl: string;
  whatsapp: string;
  whatsappUrl: string;
  githubUrl: string;
}

export interface CandidateInfo {
  name: string;
  titles: string[];
  professionalSummary: string;
  careerObjective: string;
  contacts: ContactInfo;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface SkillsInventory {
  /** Core skill categories cataloged in the Skills section */
  categorizedSkills: SkillCategory[];
  /** Flattened list of skills explicitly listed in the portfolio skills section */
  listedSkills: string[];
  /** Additional tools and libraries verified from specific project implementations */
  projectSpecificTechnologies: string[];
}

export interface ProjectLinks {
  github?: string;
  clientRepo?: string;
  serverRepo?: string;
  liveDemo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  featured: boolean;
  description: string;
  technologies: string[];
  links: ProjectLinks;
}

export interface EducationItem {
  degree: string;
  institution: string;
  cgpa?: string;
  completionYear?: string;
  highlights?: string[];
  documentUrl?: string;
  notes?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  department: string;
  tenure: string;
  employmentType: "Full-Time" | "Part-Time" | "Contract";
  highlights: string[];
  documentUrl?: string;
}

export interface CredentialItem {
  title: string;
  organization: string;
  category: string;
  specialization: string;
  description: string;
  highlights: string[];
  documentUrl?: string;
  issueDate?: string;
}

export interface RecruiterKnowledge {
  candidate: CandidateInfo;
  skills: SkillsInventory;
  projects: {
    totalCount: number;
    featuredCount: number;
    additionalCount: number;
    featured: ProjectItem[];
    additional: ProjectItem[];
    all: ProjectItem[];
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  credentials: CredentialItem[];
  unverifiedFieldsNotes: string[];
}

// ---------------------------------------------------------------------------
// 1. Candidate Details
// ---------------------------------------------------------------------------
const candidate: CandidateInfo = {
  name: "Md. Iqbal Hossain",
  titles: [
    "Full Stack Developer",
    "Web Developer",
    "Self-Learning Developer",
  ],
  professionalSummary:
    "Web developer focused on building modern, responsive web applications using React, Next.js, Node.js, Express.js, and MongoDB. Passionate about building functional and engaging web experiences, turning ideas into practical solutions, creating intuitive user interfaces, developing REST APIs, and implementing secure authentication.",
  careerObjective:
    "Strengthening full-stack engineering skills through hands-on projects and continuous learning, seeking an opportunity to contribute to a development team while growing as an engineer.",
  contacts: {
    email: "iqbalhossain6615@gmail.com",
    emailUrl: "mailto:iqbalhossain6615@gmail.com",
    linkedin: "md-iqbalhossain-bd",
    linkedinUrl: "https://www.linkedin.com/in/md-iqbalhossain-bd/",
    whatsapp: "+8801853264661",
    whatsappUrl: "https://wa.me/8801853264661",
    githubUrl: "https://github.com/Md-Iqbal-Hossain",
  },
};

// ---------------------------------------------------------------------------
// 2. Technical Skills
// ---------------------------------------------------------------------------
const skills: SkillsInventory = {
  categorizedSkills: [
    {
      category: "Frontend Development",
      description: "Building responsive, modern, and interactive user interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend & Database",
      description: "Architecting server-side logic, ODM integration, and database management.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST API Development",
      ],
    },
    {
      category: "UI Libraries & Authentication",
      description: "Implementing UI component systems, secure token standards, and auth flows.",
      skills: [
        "daisyUI",
        "HeroUI",
        "Better Auth",
        "JWT",
        "API Integration",
        "CRUD Operations",
        "Authentication & Authorization",
      ],
    },
    {
      category: "Tools & Deployment",
      description: "Version control, modern deployment platforms, and developer workflows.",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
      ],
    },
  ],
  listedSkills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API Development",
    "daisyUI",
    "HeroUI",
    "Better Auth",
    "JWT",
    "API Integration",
    "CRUD Operations",
    "Authentication & Authorization",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
  ],
  projectSpecificTechnologies: [
    "Gemini API",
    "Cloudinary",
    "Stripe",
    "Google OAuth",
    "Recharts",
    "Context API",
    "Vite",
    "React Toastify",
    "Web Speech API",
    "Font Awesome",
    "DOM Manipulation",
    "Flexbox",
    "CSS Grid",
    "Responsive Web Design",
  ],
};

// ---------------------------------------------------------------------------
// 3. Projects Inventory (All 18 distinct projects)
// ---------------------------------------------------------------------------
const featuredProjects: ProjectItem[] = [
  {
    id: "sportnest",
    title: "SportNest",
    featured: true,
    description:
      "This sports booking platform built with Next.js, Node.js, and MongoDB features secure Better Auth (Google OAuth), dynamic real-time scheduling, complete facility CRUD management, and advanced search filtering...",
    technologies: ["Next.js", "Node.js", "MongoDB", "Better Auth"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/sportnest",
      liveDemo: "https://sportnest-two.vercel.app/",
    },
  },
  {
    id: "qurbanithat",
    title: "QurbaniHat – Livestock Booking Platform",
    featured: true,
    description:
      "This livestock marketplace built with Next.js, React, and MongoDB features secure Better Auth (Google Sign-In), dynamic animal detail pages, real-time price sorting, and a streamlined booking checkout system...",
    technologies: ["Next.js", "MongoDB", "Better Auth", "HeroUI"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/livestock-booking-platform",
      liveDemo: "https://livestock-booking-platform-iqbal.vercel.app/",
    },
  },
  {
    id: "keen-keeper",
    title: "Keen Keeper",
    featured: true,
    description:
      "This relationship management dashboard built with React and Tailwind CSS empowers users to nurture social connections using real-time interaction health monitoring, historical communication timelines, and interactive trend analytics...",
    technologies: ["React.js", "Tailwind CSS", "Recharts", "Context API"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/keen-keeper",
      liveDemo: "https://keen-keeper-iqbal.netlify.app/",
    },
  },
];

const additionalProjects: ProjectItem[] = [
  {
    id: "legalease",
    title: "LegalEase",
    featured: false,
    description:
      "Online lawyer-hiring platform featuring role-based dashboards, secure authentication, lawyer profiles, hiring requests, Stripe payments, and transaction tracking.",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Stripe",
    ],
    links: {
      clientRepo: "https://github.com/Md-Iqbal-Hossain/legalease-client",
      serverRepo: "https://github.com/Md-Iqbal-Hossain/legalease-server",
      liveDemo: "https://legalease-client-three.vercel.app/",
    },
  },
  {
    id: "ai-political-poster-maker",
    title: "AI Political Poster Maker",
    featured: false,
    description:
      "AI-powered political poster generator featuring Gemini-assisted layout suggestions, Bangla typography, Cloudinary image uploads, high-resolution PNG generation, and user-specific poster history.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Cloudinary",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/AI-Political-Poster-Maker",
      liveDemo: "https://ai-political-poster-maker-s1me.vercel.app/",
    },
  },
  {
    id: "flexspace",
    title: "FlexSpace",
    featured: false,
    description:
      "Workspace marketplace for discovering and filtering offices, desks, and executive suites, with host dashboards, listing management, advanced search, and inventory controls.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "REST API",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/flexspace",
      liveDemo: "https://flexspace-tawny.vercel.app/",
    },
  },
  {
    id: "digitools",
    title: "DigiTools",
    featured: false,
    description:
      "Digital tools marketplace featuring productivity tools, product browsing, cart management, responsive layouts, and toast notifications.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/digitools-platform",
      liveDemo: "https://digitools-platform-iqbal.netlify.app/",
    },
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    featured: false,
    description:
      "Book discovery platform where readers can explore books, add favorites to a wishlist, mark books as read, and view personalized reading lists.",
    technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/book-vibe",
      liveDemo: "https://book-vibe-iqbal.netlify.app/",
    },
  },
  {
    id: "bpl-dream-11",
    title: "BPL Dream 11",
    featured: false,
    description:
      "Fantasy cricket platform for exploring player profiles, managing virtual coins, and selecting players within a budget to build a team.",
    technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/bpl-dream-11",
      liveDemo: "https://bpl-dream-11-iqbal.netlify.app/",
    },
  },
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    featured: false,
    description:
      "A GitHub issues tracking dashboard featuring API-powered issue loading, search functionality, All/Open/Closed filters, priority and label indicators, responsive issue cards, and detailed modal views.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/B13-A5-Github-Issue-Tracker",
      liveDemo: "https://github-issue-tracker-iqbal.netlify.app/",
    },
  },
  {
    id: "english-janala",
    title: "English Janala",
    featured: false,
    description:
      "An interactive English vocabulary learning platform featuring API-powered lessons, level-based word cards, vocabulary search, saved words, detailed word modals, loading indicators, and text-to-speech pronunciation.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
      "Web Speech API",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/English-Janala",
      liveDemo: "https://md-iqbal-hossain.github.io/English-Janala/",
    },
  },
  {
    id: "job-application-tracker",
    title: "Job Application Tracker",
    featured: false,
    description:
      "A job application tracking dashboard that helps users organize opportunities, categorize applications as Interview or Rejected, monitor application statistics, change application statuses, and manage job listings with dynamic counts and deletion controls.",
    technologies: [
      "JavaScript",
      "DOM Manipulation",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/Job-Application-Tracker",
      liveDemo: "https://md-iqbal-hossain.github.io/Job-Application-Tracker/",
    },
  },
  {
    id: "payoo",
    title: "Payoo",
    featured: false,
    description:
      "A mobile financial services interface simulating digital banking operations, including adding money, cashing out, sending money, paying bills, earning bonuses, and tracking transactions through an interactive dashboard with PIN verification.",
    technologies: [
      "JavaScript",
      "DOM Manipulation",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "Font Awesome",
    ],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/payoo-code",
      liveDemo: "https://md-iqbal-hossain.github.io/payoo-code/",
    },
  },
  {
    id: "tea-house",
    title: "Tea House",
    featured: false,
    description:
      "A responsive tea shop landing page featuring an attractive hero banner, elegant tea product cards, a news and events section, and a clean footer with a modern layout.",
    technologies: ["HTML5", "Tailwind CSS", "Responsive Web Design"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/tea-house-tailwind",
      liveDemo: "https://md-iqbal-hossain.github.io/tea-house-tailwind/",
    },
  },
  {
    id: "hello-dev-portfolio",
    title: "Hello Dev Portfolio",
    featured: false,
    description:
      "A personal developer portfolio built with HTML and CSS, featuring a navbar, hero, about, qualifications, skills, contact, and footer sections to showcase a developer's profile and expertise.",
    technologies: ["HTML5", "CSS3", "Responsive Web Design"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/Md_Iqbal_Hossain_portfolio",
      liveDemo: "https://md-iqbal-hossain.github.io/Md_Iqbal_Hossain_portfolio/",
    },
  },
  {
    id: "fitness",
    title: "Fitness",
    featured: false,
    description:
      "A fitness website built with HTML5 and CSS3, featuring a modern hero banner, habit-changing tips, training and exercise sections, a team showcase, and a footer. Uses Flexbox and CSS Grid for responsive layouts.",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/fitness-website",
      liveDemo: "https://md-iqbal-hossain.github.io/fitness-website/",
    },
  },
  {
    id: "legal-solution",
    title: "Legal Solution",
    featured: false,
    description:
      "A legal services landing page built with HTML5 and CSS3, featuring a professional hero banner, legal practice areas, client testimonials, frequently asked questions, a contact section, and a footer.",
    technologies: ["HTML5", "CSS3"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/legal-solution",
      liveDemo: "https://md-iqbal-hossain.github.io/legal-solution/",
    },
  },
  {
    id: "influencer-gear",
    title: "Influencer Gear",
    featured: false,
    description:
      "A responsive product landing page built with HTML5 and CSS3, featuring a hero section, a popular collections section with product cards, and a clean footer. Uses Flexbox and CSS Grid for layout.",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    links: {
      github: "https://github.com/Md-Iqbal-Hossain/influencer-gear-website",
      liveDemo: "https://md-iqbal-hossain.github.io/influencer-gear-website/",
    },
  },
];

const allProjects: ProjectItem[] = [...featuredProjects, ...additionalProjects];

// ---------------------------------------------------------------------------
// 4. Education & Qualifications
// ---------------------------------------------------------------------------
const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    cgpa: "3.67 / 4.00",
    completionYear: "2023",
    highlights: [
      "Rigorous 4-year degree covering Data Structures, Algorithms & Software Engineering",
      "Achieved outstanding academic standing with CGPA 3.67 out of 4.00",
      "Comprehensive coursework in Database Management, Networks & Web Technologies",
    ],
    documentUrl: "/documents/bsc-certificate.pdf",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Science College",
    notes: "Passing year and grades excluded per inventory rules.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Dhanmondi Govt. Boys High School",
    notes: "Passing year and grades excluded per inventory rules.",
  },
];

// ---------------------------------------------------------------------------
// 5. Work Experience
// ---------------------------------------------------------------------------
const experience: ExperienceItem[] = [
  {
    role: "Full-Time Teaching Assistant",
    organization: "University of Liberal Arts Bangladesh (ULAB)",
    department: "Dept. of Computer Science & Engineering",
    tenure: "September 2023 – May 2024",
    employmentType: "Full-Time",
    highlights: [
      "Conducted programming lab sessions, guiding students through algorithms and debugging",
      "Assisted professors with coursework evaluations, coding problem sets & lab assessments",
      "Cultivated strong technical leadership, clear communication, and mentorship experience",
    ],
    documentUrl: "/documents/teaching-assistant-certificate.pdf",
  },
];

// ---------------------------------------------------------------------------
// 6. Professional Credentials & Certifications
// ---------------------------------------------------------------------------
const credentials: CredentialItem[] = [
  {
    title: "Complete Web Development Course",
    organization: "Programming Hero",
    category: "Professional Certification",
    specialization: "Full Stack Web Development",
    description:
      "Intensive, hands-on professional program focused on contemporary full-stack web technologies, modern JavaScript, and real-world project development.",
    highlights: [
      "Full-stack MERN engineering (React, Next.js, Node.js, Express & MongoDB)",
      "Implemented secure OAuth/JWT authentication, RESTful APIs & database schemas",
      "Shipped multiple production-grade web applications adhering to industry best practices",
    ],
    documentUrl: "/documents/web-development-certificate.pdf",
    issueDate: undefined, // Not specified in portfolio source code
  },
];

// ---------------------------------------------------------------------------
// 7. Master Recruiter Knowledge Export
// ---------------------------------------------------------------------------
export const recruiterKnowledge: RecruiterKnowledge = {
  candidate,
  skills,
  projects: {
    totalCount: allProjects.length,
    featuredCount: featuredProjects.length,
    additionalCount: additionalProjects.length,
    featured: featuredProjects,
    additional: additionalProjects,
    all: allProjects,
  },
  education,
  experience,
  credentials,
  unverifiedFieldsNotes: [
    "Programming Hero certificate issue date and credential ID are not specified in the source code.",
    "City/physical address is not explicitly stated in the source code (inferred country: Bangladesh via +880 and institutions).",
    "Individual release dates for the 18 projects are not recorded in the portfolio source code.",
  ],
};

// ---------------------------------------------------------------------------
// 8. Convenient Helper Functions
// ---------------------------------------------------------------------------
export function getProjectById(id: string): ProjectItem | undefined {
  return recruiterKnowledge.projects.all.find((p) => p.id === id);
}

export function getProjectsByTechnology(techName: string): ProjectItem[] {
  const query = techName.toLowerCase();
  return recruiterKnowledge.projects.all.filter((p) =>
    p.technologies.some((t) => t.toLowerCase() === query)
  );
}

export function getAllSkills(): string[] {
  return [
    ...recruiterKnowledge.skills.listedSkills,
    ...recruiterKnowledge.skills.projectSpecificTechnologies,
  ];
}
