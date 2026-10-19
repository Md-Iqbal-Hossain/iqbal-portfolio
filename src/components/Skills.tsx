"use client";

import React, { useRef } from "react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiMongodb,
  SiDaisyui,
  SiHeroui,
  SiBetterauth,
  SiJsonwebtokens,
  SiMongoose,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiHtml5
} from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Wrench, 
  Network, 
  Plug, 
  Database, 
  Lock 
} from "lucide-react";
import {
  gsap,
  useGSAP,
  isReducedMotion,
  triggerEmeraldGlow,
  ANIMATION_PRESETS,
} from "@/lib/gsap";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  borderClass: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive, modern, and interactive user interfaces.",
    borderClass: "border-frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, colorClass: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, colorClass: "text-[#1572B6]" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, colorClass: "text-[#3178C6]" },
      { name: "React", icon: FaReact, colorClass: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, colorClass: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    description: "Architecting server-side logic, ODM integration, and database management.",
    borderClass: "border-backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, colorClass: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, colorClass: "text-white" },
      { name: "MongoDB", icon: SiMongodb, colorClass: "text-[#47A248]" },
      { name: "Mongoose", icon: SiMongoose, colorClass: "text-[#880000] dark:text-[#E64C4C]" },
      { name: "REST API Development", icon: Network, colorClass: "text-emerald-400" },
    ],
  },
  {
    title: "UI Libraries & Authentication",
    icon: ShieldCheck,
    description: "Implementing UI component systems, secure token standards, and auth flows.",
    borderClass: "border-ui-auth",
    skills: [
      { name: "daisyUI", icon: SiDaisyui, colorClass: "text-[#5A0EF8] dark:text-[#1AD1A5]" },
      { name: "HeroUI", icon: SiHeroui, colorClass: "text-[#006FEE]" },
      { name: "Better Auth", icon: SiBetterauth, colorClass: "text-[#FF5E00]" },
      { name: "JWT", icon: SiJsonwebtokens, colorClass: "text-[#D63AF9]" },
      { name: "API Integration", icon: Plug, colorClass: "text-teal-400" },
      { name: "CRUD Operations", icon: Database, colorClass: "text-blue-400" },
      { name: "Authentication & Authorization", icon: Lock, colorClass: "text-purple-400" },
    ],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    description: "Version control, modern deployment platforms, and developer workflows.",
    borderClass: "border-tools",
    skills: [
      { name: "Git", icon: SiGit, colorClass: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, colorClass: "text-white" },
      { name: "Vercel", icon: SiVercel, colorClass: "text-white" },
      { name: "Netlify", icon: SiNetlify, colorClass: "text-[#00C7B7]" },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      // Section header fade-up reveal
      gsap.from(".skills-heading", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".skills-heading",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });

      // Staggered category cards reveal
      gsap.from(".skills-category-card", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: ANIMATION_PRESETS.stagger.cards,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".skills-grid-container",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        onComplete: () => {
          triggerEmeraldGlow(".skills-category-card", 0.1);
          gsap.set(".skills-category-card", { clearProps: "transform,opacity" });
        },
      });

      // Staggered skill badges reveal
      gsap.from(".skills-badge-item", {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: ANIMATION_PRESETS.stagger.badges,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".skills-grid-container",
          start: "top 80%",
          once: true,
        },
        clearProps: "transform,opacity",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900/20" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="skills-heading text-center mb-16">
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-gray-500 mt-2">
            Technologies I use to build modern web applications
          </p>
        </div>

        <div className="skills-grid-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                className="skills-category-card traveling-border-card group"
              >
                <div className={`border-mask ${category.borderClass}`} />
                <div className="glass-card p-6 md:p-8 flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="skills-badge-item flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 hover:bg-white/10 transition-all duration-200 group/item"
                        >
                          <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center shrink-0 border border-white/10 group-hover/item:scale-105 transition-transform">
                            <SkillIcon className={`w-5 h-5 ${skill.colorClass}`} />
                          </div>
                          <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
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