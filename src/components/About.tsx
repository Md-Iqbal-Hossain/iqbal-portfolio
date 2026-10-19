"use client";

import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { featuredProjectsData, allProjectsData } from "./Projects";
import {
  gsap,
  useGSAP,
  isReducedMotion,
  triggerEmeraldGlow,
  ANIMATION_PRESETS,
} from "@/lib/gsap";

export default function About() {
  const totalProjects = featuredProjectsData.length + allProjectsData.length;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      // Section header fade-up reveal
      gsap.from(".about-heading", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".about-heading",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });

      // Staggered cards reveal with subtle emerald glow
      gsap.from(".about-stat-card", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: ANIMATION_PRESETS.stagger.cards,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".about-cards-grid",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        onComplete: () => {
          triggerEmeraldGlow(".about-stat-card");
          gsap.set(".about-stat-card", { clearProps: "transform,opacity" });
        },
      });

      // Paragraphs fade-up reveal
      gsap.from(".about-paragraph", {
        opacity: 0,
        y: 20,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: 0.12,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".about-text-content",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900/30" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="about-heading text-center mb-12">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-gray-500 mt-2">My Introduction</p>
        </div>

        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="about-cards-grid grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {/* Self-Learning Developer */}
            <div
              tabIndex={0}
              className="about-stat-card glass-card p-5 flex flex-col justify-center items-center group cursor-pointer shadow-md shadow-black/5 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="block text-2xl mb-1.5 group-hover:scale-105 transition-transform duration-300 ease-out motion-reduce:transform-none">
                🌱
              </span>
              <h3 className="font-bold text-sm md:text-base leading-tight">Self-Learning</h3>
              <p className="text-xs text-gray-400 mt-0.5">Developer</p>
            </div>

            {/* Completed Projects */}
            <div
              tabIndex={0}
              className="about-stat-card glass-card p-5 flex flex-col justify-center items-center group cursor-pointer shadow-md shadow-black/5 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="block text-2xl mb-1.5 group-hover:scale-105 transition-transform duration-300 ease-out motion-reduce:transform-none">
                💼
              </span>
              <h3 className="font-bold text-sm md:text-base leading-tight">Completed</h3>
              <p className="text-xs text-gray-400 mt-0.5">{totalProjects}+ Projects</p>
            </div>

            {/* Support */}
            <div
              tabIndex={0}
              className="about-stat-card glass-card p-5 flex flex-col justify-center items-center group cursor-pointer shadow-md shadow-black/5 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="block text-2xl mb-1.5 group-hover:scale-105 transition-transform duration-300 ease-out motion-reduce:transform-none">
                🎧
              </span>
              <h3 className="font-bold text-sm md:text-base leading-tight">Support</h3>
              <p className="text-xs text-gray-400 mt-0.5">Online 24/7</p>
            </div>
          </div>

          <div className="about-text-content text-gray-300 text-base md:text-lg leading-relaxed space-y-6 text-center max-w-2xl mx-auto">
            {/* Paragraph 1 with React Icon Card (Left) */}
            <div className="about-paragraph relative">
              <div
                className="flex absolute -top-3 left-0 sm:-top-3 sm:-left-3 md:-top-4 md:-left-8 lg:-left-12 z-20 pointer-events-none select-none animate-tech-card-entrance"
                aria-hidden="true"
              >
                <div className="animate-float-card-1 glass-card p-1.5 sm:p-2.5 flex items-center justify-center shadow-md shadow-black/5 rounded-lg sm:rounded-xl border border-white/10">
                  <FaReact className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
                </div>
              </div>
              <p>
                I&apos;m a web developer focused on building modern, responsive web applications using React, Next.js, Node.js, Express.js, and MongoDB.
              </p>
            </div>

            {/* Paragraph 2 with Next.js Icon Card (Right) */}
            <div className="about-paragraph relative">
              <div
                className="flex absolute -top-3 right-0 sm:-top-3 sm:-right-3 md:-top-4 md:-right-8 lg:-right-12 z-20 pointer-events-none select-none animate-tech-card-entrance"
                aria-hidden="true"
              >
                <div className="animate-float-card-2 glass-card p-1.5 sm:p-2.5 flex items-center justify-center shadow-md shadow-black/5 rounded-lg sm:rounded-xl border border-white/10">
                  <SiNextdotjs className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <p>
                I enjoy turning ideas into practical solutions, creating intuitive user interfaces, developing REST APIs, and implementing authentication features.
              </p>
            </div>

            {/* Paragraph 3 with Node.js Icon Card (Left) */}
            <div className="about-paragraph relative">
              <div
                className="flex absolute -top-3 left-0 sm:-top-3 sm:-left-3 md:-top-4 md:-left-8 lg:-left-12 z-20 pointer-events-none select-none animate-tech-card-entrance"
                aria-hidden="true"
              >
                <div className="animate-float-card-3 glass-card p-1.5 sm:p-2.5 flex items-center justify-center shadow-md shadow-black/5 rounded-lg sm:rounded-xl border border-white/10">
                  <SiNodedotjs className="w-4 h-4 sm:w-5 sm:h-5 text-[#339933]" />
                </div>
              </div>
              <p>
                Through hands-on projects and continuous learning, I&apos;m strengthening my full-stack development skills and looking for an opportunity to contribute to a development team while growing as an engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}