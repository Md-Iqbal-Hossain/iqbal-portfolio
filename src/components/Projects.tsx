"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import {
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  FolderGit2,
} from "lucide-react";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  isReducedMotion,
  triggerEmeraldGlow,
  ANIMATION_PRESETS,
} from "@/lib/gsap";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  clientRepo?: string;
  serverRepo?: string;
  liveDemo?: string;
}

export const featuredProjectsData: Project[] = [
  {
    id: "sportnest",
    title: "SportNest",
    description:
      "This sports booking platform built with Next.js, Node.js, and MongoDB features secure Better Auth (Google OAuth), dynamic real-time scheduling, complete facility CRUD management, and advanced search filtering...",
    image: "https://i.ibb.co.com/gFTCZQGX/sportnest.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Better Auth"],
    featured: true,
    github: "https://github.com/Md-Iqbal-Hossain/sportnest",
    liveDemo: "https://sportnest-two.vercel.app/",
  },
  {
    id: "qurbanithat",
    title: "QurbaniHat – Livestock Booking Platform",
    description:
      "This livestock marketplace built with Next.js, React, and MongoDB features secure Better Auth (Google Sign-In), dynamic animal detail pages, real-time price sorting, and a streamlined booking checkout system...",
    image: "https://i.ibb.co.com/sdHw8fx9/livestock.png",
    technologies: ["Next.js", "MongoDB", "Better Auth", "HeroUI"],
    featured: true,
    github: "https://github.com/Md-Iqbal-Hossain/livestock-booking-platform",
    liveDemo: "https://livestock-booking-platform-iqbal.vercel.app/",
  },
  {
    id: "keen-keeper",
    title: "Keen Keeper",
    description:
      "This relationship management dashboard built with React and Tailwind CSS empowers users to nurture social connections using real-time interaction health monitoring, historical communication timelines, and interactive trend analytics...",
    image: "https://i.ibb.co.com/3yC8zvDK/keenkeeper.png",
    technologies: ["React.js", "Tailwind CSS", "Recharts", "Context API"],
    featured: true,
    github: "https://github.com/Md-Iqbal-Hossain/keen-keeper",
    liveDemo: "https://keen-keeper-iqbal.netlify.app/",
  },
];

export const allProjectsData: Project[] = [
  {
    id: "legalease",
    title: "LegalEase",
    description:
      "Online lawyer-hiring platform featuring role-based dashboards, secure authentication, lawyer profiles, hiring requests, Stripe payments, and transaction tracking.",
    image: "/images/LegalEase.jpg",
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
    clientRepo: "https://github.com/Md-Iqbal-Hossain/legalease-client",
    serverRepo: "https://github.com/Md-Iqbal-Hossain/legalease-server",
    liveDemo: "https://legalease-client-three.vercel.app/",
  },
  {
    id: "ai-political-poster-maker",
    title: "AI Political Poster Maker",
    description:
      "AI-powered political poster generator featuring Gemini-assisted layout suggestions, Bangla typography, Cloudinary image uploads, high-resolution PNG generation, and user-specific poster history.",
    image: "/images/AI Political Poster Maker.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Cloudinary",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/AI-Political-Poster-Maker",
    liveDemo: "https://ai-political-poster-maker-s1me.vercel.app/",
  },
  {
    id: "flexspace",
    title: "FlexSpace",
    description:
      "Workspace marketplace for discovering and filtering offices, desks, and executive suites, with host dashboards, listing management, advanced search, and inventory controls.",
    image: "/images/FlexSpace.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/flexspace",
    liveDemo: "https://flexspace-tawny.vercel.app/",
  },
  {
    id: "digitools",
    title: "DigiTools",
    description:
      "Digital tools marketplace featuring productivity tools, product browsing, cart management, responsive layouts, and toast notifications.",
    image: "/images/DigiTools.jpg",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/digitools-platform",
    liveDemo: "https://digitools-platform-iqbal.netlify.app/",
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    description:
      "Book discovery platform where readers can explore books, add favorites to a wishlist, mark books as read, and view personalized reading lists.",
    image: "/images/BookVibe.jpg",
    technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Md-Iqbal-Hossain/book-vibe",
    liveDemo: "https://book-vibe-iqbal.netlify.app/",
  },
  {
    id: "bpl-dream-11",
    title: "BPL Dream 11",
    description:
      "Fantasy cricket platform for exploring player profiles, managing virtual coins, and selecting players within a budget to build a team.",
    image: "/images/BPLDream11.jpg",
    technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Md-Iqbal-Hossain/bpl-dream-11",
    liveDemo: "https://bpl-dream-11-iqbal.netlify.app/",
  },
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    description:
      "A GitHub issues tracking dashboard featuring API-powered issue loading, search functionality, All/Open/Closed filters, priority and label indicators, responsive issue cards, and detailed modal views.",
    image: "/images/GitHubIssuesTracker.jpg",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/B13-A5-Github-Issue-Tracker",
    liveDemo: "https://github-issue-tracker-iqbal.netlify.app/",
  },
  {
    id: "english-janala",
    title: "English Janala",
    description:
      "An interactive English vocabulary learning platform featuring API-powered lessons, level-based word cards, vocabulary search, saved words, detailed word modals, loading indicators, and text-to-speech pronunciation.",
    image: "/images/EnglishJanala.jpg",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
      "Web Speech API",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/English-Janala",
    liveDemo: "https://md-iqbal-hossain.github.io/English-Janala/",
  },
  {
    id: "job-application-tracker",
    title: "Job Application Tracker",
    description:
      "A job application tracking dashboard that helps users organize opportunities, categorize applications as Interview or Rejected, monitor application statistics, change application statuses, and manage job listings with dynamic counts and deletion controls.",
    image: "/images/JobApplicationTracker.jpg",
    technologies: [
      "JavaScript",
      "DOM Manipulation",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/Job-Application-Tracker",
    liveDemo: "https://md-iqbal-hossain.github.io/Job-Application-Tracker/",
  },
  {
    id: "payoo",
    title: "Payoo",
    description:
      "A mobile financial services interface simulating digital banking operations, including adding money, cashing out, sending money, paying bills, earning bonuses, and tracking transactions through an interactive dashboard with PIN verification.",
    image: "/images/Payoo.jpg",
    technologies: [
      "JavaScript",
      "DOM Manipulation",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "Font Awesome",
    ],
    github: "https://github.com/Md-Iqbal-Hossain/payoo-code",
    liveDemo: "https://md-iqbal-hossain.github.io/payoo-code/",
  },
  {
    id: "tea-house",
    title: "Tea House",
    description:
      "A responsive tea shop landing page featuring an attractive hero banner, elegant tea product cards, a news and events section, and a clean footer with a modern layout.",
    image: "/images/TeaHouse.jpg",
    technologies: ["HTML5", "Tailwind CSS", "Responsive Web Design"],
    github: "https://github.com/Md-Iqbal-Hossain/tea-house-tailwind",
    liveDemo: "https://md-iqbal-hossain.github.io/tea-house-tailwind/",
  },
  {
    id: "hello-dev-portfolio",
    title: "Hello Dev Portfolio",
    description:
      "A personal developer portfolio built with HTML and CSS, featuring a navbar, hero, about, qualifications, skills, contact, and footer sections to showcase a developer's profile and expertise.",
    image: "/images/HelloDevPortfolio.jpg",
    technologies: ["HTML5", "CSS3", "Responsive Web Design"],
    github: "https://github.com/Md-Iqbal-Hossain/Md_Iqbal_Hossain_portfolio",
    liveDemo: "https://md-iqbal-hossain.github.io/Md_Iqbal_Hossain_portfolio/",
  },
  {
    id: "fitness",
    title: "Fitness",
    description:
      "A fitness website built with HTML5 and CSS3, featuring a modern hero banner, habit-changing tips, training and exercise sections, a team showcase, and a footer. Uses Flexbox and CSS Grid for responsive layouts.",
    image: "/images/FitnessWebsite.jpg",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    github: "https://github.com/Md-Iqbal-Hossain/fitness-website",
    liveDemo: "https://md-iqbal-hossain.github.io/fitness-website/",
  },
  {
    id: "legal-solution",
    title: "Legal Solution",
    description:
      "A legal services landing page built with HTML5 and CSS3, featuring a professional hero banner, legal practice areas, client testimonials, frequently asked questions, a contact section, and a footer.",
    image: "/images/LegalSolution.jpg",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Md-Iqbal-Hossain/legal-solution",
    liveDemo: "https://md-iqbal-hossain.github.io/legal-solution/",
  },
  {
    id: "influencer-gear",
    title: "Influencer Gear",
    description:
      "A responsive product landing page built with HTML5 and CSS3, featuring a hero section, a popular collections section with product cards, and a clean footer. Uses Flexbox and CSS Grid for layout.",
    image: "/images/InfluencerGear.jpg",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    github: "https://github.com/Md-Iqbal-Hossain/influencer-gear-website",
    liveDemo: "https://md-iqbal-hossain.github.io/influencer-gear-website/",
  },
];

const PROJECTS_PER_PAGE = 3;

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateTiltCapability = () => {
      setCanTilt(fineQuery.matches && !reducedQuery.matches);
    };

    updateTiltCapability();

    fineQuery.addEventListener("change", updateTiltCapability);
    reducedQuery.addEventListener("change", updateTiltCapability);

    return () => {
      fineQuery.removeEventListener("change", updateTiltCapability);
      reducedQuery.removeEventListener("change", updateTiltCapability);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Capped at 3.5 degrees (strictly within 3–4 degrees requirement)
    const maxTilt = 3.5;
    const rotateX = Number((((y - centerY) / centerY) * -maxTilt).toFixed(2));
    const rotateY = Number((((x - centerX) / centerX) * maxTilt).toFixed(2));

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          canTilt && isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-5px)`
            : isHovered
            ? `translateY(-5px)`
            : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`,
        transformStyle: "preserve-3d",
      }}
      className={`glass-card overflow-hidden flex flex-col justify-between group relative border transition-all duration-300 ease-out border-white/10 [html.light_&]:border-slate-200/90 hover:border-emerald-500/40 [html.light_&]:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 [html.light_&]:hover:shadow-emerald-500/15 motion-reduce:transform-none motion-reduce:transition-none ${
        isFeatured
          ? "ring-1 ring-emerald-500/20 [html.light_&]:ring-emerald-500/30 shadow-md shadow-emerald-500/[0.04]"
          : "shadow-xs"
      }`}
    >
      {/* Expanding emerald top accent for Featured Projects */}
      {isFeatured && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 z-30"
        />
      )}

      {/* Top Media Container */}
      <div className="h-56 overflow-hidden relative w-full bg-slate-900/60 [html.light_&]:bg-slate-200/70 shrink-0">
        {/* Featured Ribbon Badge */}
        {isFeatured && (
          <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500 text-black shadow-md shadow-emerald-500/25 flex items-center gap-1.5 backdrop-blur-xs select-none">
            <Sparkles className="w-3 h-3 fill-current" aria-hidden="true" />
            <span>Featured</span>
          </div>
        )}

        {!imageError ? (
          <Image
            alt={project.title}
            src={project.image}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
            <FolderGit2
              className="w-8 h-8 text-emerald-400 mb-2 opacity-80"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-gray-300 [html.light_&]:text-slate-700">
              {project.title}
            </span>
            <span className="text-[10px] text-gray-500 mt-0.5">
              Screenshot unavailable
            </span>
          </div>
        )}
      </div>

      {/* Card Content & Action Buttons */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2.5 text-white [html.light_&]:text-slate-900 group-hover:text-emerald-400 [html.light_&]:group-hover:text-emerald-600 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 [html.light_&]:text-slate-600 mb-6 leading-relaxed flex-1">
            {project.description}
          </p>
        </div>

        <div className="mt-auto">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-white/5 [html.light_&]:bg-slate-100 text-gray-300 [html.light_&]:text-slate-700 text-[11px] font-medium rounded-md border border-white/5 [html.light_&]:border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-2">
            {project.clientRepo && project.serverRepo ? (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Link
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/repo relative flex-1 py-2 px-2.5 glass-card text-xs hover:bg-emerald-500/10 [html.light_&]:hover:bg-emerald-50 text-center rounded-lg border border-white/10 [html.light_&]:border-slate-300 hover:border-emerald-500/50 [html.light_&]:hover:border-emerald-500/60 hover:text-emerald-300 [html.light_&]:hover:text-emerald-700 hover:shadow-md hover:shadow-emerald-500/15 [html.light_&]:hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out flex items-center justify-center gap-1.5 font-medium text-gray-200 [html.light_&]:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 [html.light_&]:focus-visible:ring-offset-white focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-label={`View client repository for ${project.title} (opens in a new tab)`}
                  >
                    <SiGithub className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/repo:scale-110 motion-reduce:transform-none text-current" aria-hidden="true" />
                    <span>Client Repo</span>
                  </Link>
                  <Link
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/repo relative flex-1 py-2 px-2.5 glass-card text-xs hover:bg-emerald-500/10 [html.light_&]:hover:bg-emerald-50 text-center rounded-lg border border-white/10 [html.light_&]:border-slate-300 hover:border-emerald-500/50 [html.light_&]:hover:border-emerald-500/60 hover:text-emerald-300 [html.light_&]:hover:text-emerald-700 hover:shadow-md hover:shadow-emerald-500/15 [html.light_&]:hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out flex items-center justify-center gap-1.5 font-medium text-gray-200 [html.light_&]:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 [html.light_&]:focus-visible:ring-offset-white focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-label={`View server repository for ${project.title} (opens in a new tab)`}
                  >
                    <SiGithub className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/repo:scale-110 motion-reduce:transform-none text-current" aria-hidden="true" />
                    <span>Server Repo</span>
                  </Link>
                </div>
                {project.liveDemo && (
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/demo relative w-full py-2 px-3 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 active:translate-y-0 active:scale-[0.98] text-white transition-all duration-300 ease-out text-center font-medium shadow-xs shadow-blue-500/20 flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 [html.light_&]:focus-visible:ring-offset-white focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-label={`View live demo for ${project.title} (opens in a new tab)`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/demo:scale-110 group-hover/demo:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/repo relative flex-1 py-2 px-3 glass-card text-xs hover:bg-emerald-500/10 [html.light_&]:hover:bg-emerald-50 text-center rounded-lg border border-white/10 [html.light_&]:border-slate-300 hover:border-emerald-500/50 [html.light_&]:hover:border-emerald-500/60 hover:text-emerald-300 [html.light_&]:hover:text-emerald-700 hover:shadow-md hover:shadow-emerald-500/15 [html.light_&]:hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out flex items-center justify-center gap-1.5 font-medium text-gray-200 [html.light_&]:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 [html.light_&]:focus-visible:ring-offset-white focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-label={`View GitHub repository for ${project.title} (opens in a new tab)`}
                  >
                    <SiGithub className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/repo:scale-110 motion-reduce:transform-none text-current" aria-hidden="true" />
                    <span>GitHub Repo</span>
                  </Link>
                )}
                {project.liveDemo && (
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/demo relative flex-1 py-2 px-3 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 active:translate-y-0 active:scale-[0.98] text-white transition-all duration-300 ease-out text-center font-medium shadow-xs shadow-blue-500/20 flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 [html.light_&]:focus-visible:ring-offset-white focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-label={`View live demo for ${project.title} (opens in a new tab)`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/demo:scale-110 group-hover/demo:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjectsData.length / PROJECTS_PER_PAGE);
  const sectionRef = useRef<HTMLElement>(null);
  const allProjectsRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const isPaginating = useRef(false);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = allProjectsData.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  // General entrance animations for section headers and featured projects
  useGSAP(
    () => {
      if (isReducedMotion()) return;

      // Section header fade-up reveal
      gsap.from(".projects-header", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".projects-header",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });

      // Featured projects header fade-up reveal
      gsap.from(".featured-projects-header", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".featured-projects-header",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });

      // Featured project cards staggered reveal with subtle emerald glow
      gsap.from(".featured-card-wrapper", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: ANIMATION_PRESETS.stagger.cards,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".featured-cards-grid",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        onComplete: () => {
          triggerEmeraldGlow(".featured-card-wrapper > div", 0.1);
          gsap.set(".featured-card-wrapper", { clearProps: "transform,opacity" });
        },
      });

      // All projects header fade-up reveal
      gsap.from(".all-projects-header", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".all-projects-header",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });
    },
    { scope: sectionRef }
  );

  // Paginated all projects cards animation (triggers on scroll entrance and re-animates on page change)
  useGSAP(
    () => {
      if (isReducedMotion()) {
        ScrollTrigger.refresh();
        return;
      }

      if (isInitialMount.current) {
        isInitialMount.current = false;
        // First entrance bound to scroll
        gsap.from(".all-project-card-wrapper", {
          opacity: 0,
          y: ANIMATION_PRESETS.fadeUp.y,
          duration: 0.6,
          stagger: 0.08,
          ease: ANIMATION_PRESETS.fadeUp.ease,
          scrollTrigger: {
            trigger: ".all-projects-grid",
            start: ANIMATION_PRESETS.scrollTrigger.start,
            once: true,
          },
          clearProps: "transform,opacity",
        });
      } else {
        // Smooth staggered reveal on pagination page change
        gsap.fromTo(
          ".all-project-card-wrapper",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform,opacity",
            onComplete: () => {
              // Refresh triggers only after cards reveal and scroll settle
              ScrollTrigger.refresh();
            },
          }
        );
      }
    },
    { dependencies: [currentPage], scope: sectionRef }
  );

  // Scroll to All Projects subsection after new page cards have rendered and layout has updated
  useEffect(() => {
    if (!isPaginating.current) return;
    isPaginating.current = false;

    const rafId = requestAnimationFrame(() => {
      const el = allProjectsRef.current || document.getElementById("all-projects");
      if (el) {
        const navHeight = 64; // fixed navbar height (h-16)
        const buffer = 16;
        const targetTop =
          el.getBoundingClientRect().top + window.scrollY - (navHeight + buffer);

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    isPaginating.current = true;
    setCurrentPage(newPage);
  };

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden" id="projects">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border border-emerald-500/20 mb-3 tracking-wide uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
              aria-hidden="true"
            />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white [html.light_&]:text-slate-900">
            Projects
          </h2>
          <p className="text-gray-400 [html.light_&]:text-slate-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Recent Projects & Production Applications
          </p>
        </div>

        {/* 1. Featured Projects Section */}
        <div className="mb-20">
          <div className="featured-projects-header flex items-center justify-between mb-8 pb-3 border-b border-white/5 [html.light_&]:border-slate-200">
            <div className="flex items-center gap-3">
              <span
                className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-white [html.light_&]:text-slate-900 tracking-tight">
                Featured Projects
              </h3>
            </div>
            <span className="text-xs font-medium text-emerald-400 [html.light_&]:text-emerald-700 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Flagship Highlights
            </span>
          </div>

          <div className="featured-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {featuredProjectsData.map((project) => (
              <div key={project.id} className="featured-card-wrapper h-full flex flex-col">
                <ProjectCard
                  project={project}
                  isFeatured={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. All Projects Section */}
        <div id="all-projects" ref={allProjectsRef} className="scroll-mt-24">
          <div className="all-projects-header flex items-center justify-between mb-8 pb-3 border-b border-white/5 [html.light_&]:border-slate-200">
            <div className="flex items-center gap-3">
              <span
                className="flex h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-white [html.light_&]:text-slate-900 tracking-tight">
                All Projects
              </h3>
            </div>
            <span className="text-xs font-medium text-gray-400 [html.light_&]:text-slate-500 px-3 py-1 rounded-full bg-white/5 [html.light_&]:bg-slate-100 border border-white/10 [html.light_&]:border-slate-200">
              {allProjectsData.length} Projects Total
            </span>
          </div>

          <div className="all-projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {currentProjects.map((project) => (
              <div key={project.id} className="all-project-card-wrapper h-full flex flex-col">
                <ProjectCard
                  project={project}
                  isFeatured={false}
                />
              </div>
            ))}
          </div>

          {/* Functional Accessible Pagination */}
          <nav
            aria-label="All projects pagination"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
          >
            <div className="flex items-center gap-2 p-1.5 glass-card rounded-full border border-white/10 [html.light_&]:border-slate-200 shadow-md">
              {/* Previous Page Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
                className="px-4 py-2 hover:bg-white/10 [html.light_&]:hover:bg-slate-200 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent text-gray-300 [html.light_&]:text-slate-700 hover:text-white [html.light_&]:hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>PREV</span>
              </button>

              {/* Numbered Page Buttons */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  const isActive = currentPage === pageNumber;
                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => handlePageChange(pageNumber)}
                      aria-label={`Page ${pageNumber}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`w-9 h-9 flex items-center justify-center rounded-full text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer ${
                        isActive
                          ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20 scale-105"
                          : "text-gray-300 [html.light_&]:text-slate-700 hover:text-white [html.light_&]:hover:text-slate-900 hover:bg-white/10 [html.light_&]:hover:bg-slate-200"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              {/* Next Page Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                aria-label="Go to next page"
                className="px-4 py-2 hover:bg-white/10 [html.light_&]:hover:bg-slate-200 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent text-gray-300 [html.light_&]:text-slate-700 hover:text-white [html.light_&]:hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
