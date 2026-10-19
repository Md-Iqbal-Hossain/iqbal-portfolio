"use client";

import React, { useRef } from "react";
import {
  GraduationCap,
  Award,
  Briefcase,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  gsap,
  useGSAP,
  isReducedMotion,
  triggerEmeraldGlow,
  ANIMATION_PRESETS,
} from "@/lib/gsap";

interface CredentialItem {
  id: string;
  categoryBadge: string;
  badgeStyle: {
    badge: string;
    dot: string;
  };
  title: string;
  organization: string;
  highlightBadge?: {
    label: string;
    value: string;
  };
  description: string;
  highlights: string[];
  documentUrl: string;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const credentialsData: CredentialItem[] = [
  {
    id: "bsc-cse",
    categoryBadge: "Academic Education",
    badgeStyle: {
      badge:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border-emerald-500/25",
      dot: "bg-emerald-500 dark:bg-emerald-400",
    },
    title: "B.Sc. in Computer Science & Engineering",
    organization: "University of Liberal Arts Bangladesh (ULAB)",
    highlightBadge: {
      label: "CGPA",
      value: "3.67 / 4.00",
    },
    description:
      "Graduated with a strong academic standing, rigorous foundation in software architecture, algorithm design, and modern computing principles.",
    highlights: [
      "Rigorous 4-year degree covering Data Structures, Algorithms & Software Engineering",
      "Achieved outstanding academic standing with CGPA 3.67 out of 4.00",
      "Comprehensive coursework in Database Management, Networks & Web Technologies",
    ],
    documentUrl: "/documents/bsc-certificate.pdf",
    actionText: "View Certificate",
    icon: GraduationCap,
  },
  {
    id: "web-dev-course",
    categoryBadge: "Professional Certification",
    badgeStyle: {
      badge:
        "bg-teal-500/10 text-teal-600 dark:text-teal-400 [html.light_&]:text-teal-700 border-teal-500/25",
      dot: "bg-teal-500 dark:bg-teal-400",
    },
    title: "Complete Web Development Course",
    organization: "Programming Hero",
    highlightBadge: {
      label: "Specialization",
      value: "Full Stack Web Development",
    },
    description:
      "Intensive, hands-on professional program focused on contemporary full-stack web technologies, modern JavaScript, and real-world project development.",
    highlights: [
      "Full-stack MERN engineering (React, Next.js, Node.js, Express & MongoDB)",
      "Implemented secure OAuth/JWT authentication, RESTful APIs & database schemas",
      "Shipped multiple production-grade web applications adhering to industry best practices",
    ],
    documentUrl: "/documents/web-development-certificate.pdf",
    actionText: "View Certificate",
    icon: Award,
  },
  {
    id: "teaching-assistant",
    categoryBadge: "Professional Experience",
    badgeStyle: {
      badge:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border-emerald-500/25",
      dot: "bg-emerald-500 dark:bg-emerald-400",
    },
    title: "Full-Time Teaching Assistant",
    organization: "Dept. of Computer Science & Engineering, ULAB",
    highlightBadge: {
      label: "Department",
      value: "Computer Science & Engineering",
    },
    description:
      "Served as a full-time academic teaching assistant, facilitating programming lab sessions, mentoring undergraduate peers, and aiding departmental faculty.",
    highlights: [
      "Conducted programming lab sessions, guiding students through algorithms and debugging",
      "Assisted professors with coursework evaluations, coding problem sets & lab assessments",
      "Cultivated strong technical leadership, clear communication, and mentorship experience",
    ],
    documentUrl: "/documents/teaching-assistant-certificate.pdf",
    actionText: "View Experience Certificate",
    icon: Briefcase,
  },
];

export default function Credentials() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      // Section header fade-up reveal
      gsap.from(".credentials-header", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".credentials-header",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });

      // Staggered credentials cards reveal with subtle emerald glow
      gsap.from(".credentials-card", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: ANIMATION_PRESETS.stagger.cards,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".credentials-cards-grid",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        onComplete: () => {
          triggerEmeraldGlow(".credentials-card", 0.1);
          gsap.set(".credentials-card", { clearProps: "transform,opacity" });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-slate-900/30 overflow-hidden"
      id="credentials"
    >
      {/* Subtle ambient emerald background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[300px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04] blur-[130px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="credentials-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border border-emerald-500/20 mb-3 tracking-wide uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
              aria-hidden="true"
            />
            Verified Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white [html.light_&]:text-slate-900">
            Credentials & Experience
          </h2>
          <p className="text-gray-400 [html.light_&]:text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
            Academic degree, specialized professional certification, and university teaching experience with verified documentation.
          </p>
        </div>

        {/* 3 Responsive Cards Grid */}
        <div className="credentials-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {credentialsData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                tabIndex={0}
                role="region"
                aria-label={item.title}
                className="credentials-card glass-card relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden group border border-white/10 hover:border-emerald-500/40 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 focus-within:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:border-emerald-500/50 transition-all duration-300 ease-out cursor-default motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Expanding emerald top accent line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 origin-left scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-300 ease-out pointer-events-none motion-reduce:transform-none"
                />

                {/* Ambient hover light */}
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/[0.07] rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                {/* Card Main Body */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border border-emerald-500/20 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40 transition-all duration-300 ease-out shrink-0 motion-reduce:transform-none">
                      <Icon className="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shadow-xs ${item.badgeStyle.badge}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.badgeStyle.dot}`}
                        aria-hidden="true"
                      />
                      {item.categoryBadge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold tracking-tight text-white [html.light_&]:text-slate-900 group-hover:text-emerald-400 [html.light_&]:group-hover:text-emerald-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400 [html.light_&]:text-emerald-700 mt-1">
                    {item.organization}
                  </p>

                  {/* Subtle Detail / Badge */}
                  {item.highlightBadge && (
                    <div className="my-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border border-emerald-500/25 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        <span className="font-semibold">{item.highlightBadge.label}:</span>
                        <span>{item.highlightBadge.value}</span>
                      </span>
                    </div>
                  )}

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-gray-400 [html.light_&]:text-slate-600 leading-relaxed mb-4 mt-1">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul
                    className="space-y-2 mb-6"
                    aria-label={`${item.title} highlights`}
                  >
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-gray-300 [html.light_&]:text-slate-700"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 [html.light_&]:text-emerald-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action: View Certificate / Experience Link */}
                <div className="relative z-10 pt-4 border-t border-white/10 [html.light_&]:border-slate-200 mt-auto">
                  <a
                    href={item.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 hover:text-emerald-500 dark:hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70"
                    aria-label={`${item.actionText} for ${item.title} (opens in a new tab)`}
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink
                        className="w-3.5 h-3.5 opacity-80"
                        aria-hidden="true"
                      />
                      {item.actionText}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
