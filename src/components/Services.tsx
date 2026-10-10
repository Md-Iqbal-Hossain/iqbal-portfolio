"use client";

import React, { useEffect, useRef, useState } from "react";
import { Code2, Server, Layers, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Frontend Development",
    icon: Code2,
    description:
      "Crafting fast, accessible, and responsive user interfaces with modern component architecture, fluid states, and pixel-accurate design fidelity.",
    highlights: [
      "Responsive, mobile-first interface design",
      "Clean component hierarchy & state logic",
      "Performance optimization & smooth interactions",
    ],
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Development",
    icon: Server,
    description:
      "Architecting reliable server-side systems and RESTful APIs with organized database modeling, data validation, and secure business logic.",
    highlights: [
      "RESTful API design & integration",
      "Database schema modeling with MongoDB",
      "Authentication & secure request handling",
    ],
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "03",
    title: "Full Stack Development",
    icon: Layers,
    description:
      "Delivering complete, production-ready web applications by seamlessly connecting intuitive frontend UI with resilient backend services and databases.",
    highlights: [
      "End-to-end MERN stack application workflow",
      "Secure authentication & authorization standards",
      "Complete CRUD lifecycle & API consumption",
    ],
    tags: ["MERN Stack", "REST APIs", "Authentication", "CRUD"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion immediately
    if (typeof window !== "undefined") {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (motionQuery.matches) {
        setIsVisible(true);
        return;
      }
    }

    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      id="services"
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3 tracking-wide uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
              aria-hidden="true"
            />
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
            Focused engineering solutions designed for high performance, clean architecture, and intuitive user experiences.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                tabIndex={0}
                role="region"
                aria-label={service.title}
                style={{
                  transitionDelay: isVisible ? `${index * 140}ms` : "0ms",
                }}
                className={`glass-card relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden group border border-white/10 hover:border-emerald-500/40 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 focus-within:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:border-emerald-500/50 transition-all duration-500 ease-out cursor-default motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Expanding emerald top accent line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 origin-left scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-500 ease-out pointer-events-none motion-reduce:transform-none"
                />

                {/* Restrained hover-responsive background highlight */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.05] via-emerald-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/[0.08] rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                {/* Card Top: Icon, Index, Title, Accent, Description, Highlights */}
                <div className="relative z-10">
                  {/* Top Bar: Icon & Index Pill */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:scale-105 transition-all duration-300 ease-out shrink-0 motion-reduce:transform-none">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:border-emerald-500/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Expanding emerald divider accent line */}
                  <div
                    aria-hidden="true"
                    className="h-0.5 w-8 bg-emerald-500/50 rounded-full group-hover:w-16 group-focus-within:w-16 group-hover:bg-emerald-500 transition-all duration-300 ease-out mt-3 mb-4 motion-reduce:w-12 motion-reduce:transition-none"
                  />

                  {/* Recruiter-friendly description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Deliverables */}
                  <ul
                    className="space-y-2 mb-6"
                    aria-label={`${service.title} key highlights`}
                  >
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-gray-300"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Core Stack Tags */}
                <div className="relative z-10 pt-5 border-t border-white/10 mt-auto">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
                    Core Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover:border-emerald-500/30 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}