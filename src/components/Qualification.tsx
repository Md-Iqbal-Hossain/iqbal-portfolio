"use client";

import React, { useRef } from "react";
import {
  gsap,
  useGSAP,
  isReducedMotion,
  triggerEmeraldGlow,
  ANIMATION_PRESETS,
} from "@/lib/gsap";

export default function Qualification() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      // Section header & category indicator fade-up reveal
      gsap.from(".qualification-header", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: 0.1,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".qualification-header",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        clearProps: "transform,opacity",
      });

      // Staggered timeline milestones reveal
      gsap.from(".timeline-milestone", {
        opacity: 0,
        y: ANIMATION_PRESETS.fadeUp.y,
        duration: ANIMATION_PRESETS.fadeUp.duration,
        stagger: 0.12,
        ease: ANIMATION_PRESETS.fadeUp.ease,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: ANIMATION_PRESETS.scrollTrigger.start,
          once: true,
        },
        onComplete: () => {
          triggerEmeraldGlow(".milestone-emerald-accent", 0.1);
          gsap.set(".timeline-milestone", { clearProps: "transform,opacity" });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900/30" id="qualification">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="qualification-header text-center mb-16">
          <h2 className="text-4xl font-bold">Qualification</h2>
          <p className="text-gray-500 mt-2">My personal journey</p>
        </div>

        {/* Education Category Indicator */}
        <div className="qualification-header flex justify-center mb-12">
          <div className="flex items-center gap-2 text-xl font-medium opacity-100 cursor-default">
            <span className="text-2xl">🎓</span> Education
          </div>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-2xl mx-auto">
          {/* Milestone 1: B. Sc. in CSE (Top) */}
          <div className="timeline-milestone relative pb-10 sm:pb-12 group">
            {/* Connecting Line to next milestone */}
            <div
              className="absolute left-6 sm:left-1/2 top-2 bottom-0 w-0.5 bg-slate-700/80 [html.light_&]:bg-slate-300 sm:-translate-x-1/2"
              aria-hidden="true"
            />

            {/* Timeline Dot Indicator with Subtle Emerald Accent */}
            <div
              className="milestone-emerald-accent absolute left-6 sm:left-1/2 top-1.5 w-4 h-4 rounded-full -translate-x-1/2 z-10 bg-emerald-400 dark:bg-emerald-400 [html.light_&]:bg-emerald-500 ring-4 ring-emerald-500/20 shadow-xs shadow-emerald-500/30"
              aria-hidden="true"
            />

            {/* Content Card */}
            <div className="pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 items-start">
              <div className="sm:text-right sm:pr-8">
                <h3 className="text-xl font-bold text-white [html.light_&]:text-slate-900 tracking-tight">
                  B. Sc. in CSE
                </h3>

                {/* Subtle Emerald CGPA Badge */}
                <div className="flex sm:justify-end justify-start my-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border border-emerald-500/25 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    CGPA: 3.67 / 4.00
                  </span>
                </div>

                <p className="text-sm text-gray-400 [html.light_&]:text-slate-600 leading-relaxed">
                  University of Liberal Arts Bangladesh (ULAB) - Institute
                </p>
              </div>

              {/* Right Column Spacer (Desktop) */}
              <div className="hidden sm:block" />
            </div>
          </div>

          {/* Milestone 2: HSC (Middle) */}
          <div className="timeline-milestone relative pb-10 sm:pb-12 group">
            {/* Connecting Line to next milestone */}
            <div
              className="absolute left-6 sm:left-1/2 top-2 bottom-0 w-0.5 bg-slate-700/80 [html.light_&]:bg-slate-300 sm:-translate-x-1/2"
              aria-hidden="true"
            />

            {/* Timeline Dot Indicator */}
            <div
              className="absolute left-6 sm:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full -translate-x-1/2 z-10 bg-white [html.light_&]:bg-slate-700 ring-4 ring-slate-800 [html.light_&]:ring-slate-200"
              aria-hidden="true"
            />

            {/* Content Card */}
            <div className="pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 items-start">
              {/* Left Column Spacer (Desktop) */}
              <div className="hidden sm:block" />

              <div className="sm:text-left sm:pl-8">
                <h3 className="text-lg font-semibold text-gray-200 [html.light_&]:text-slate-800">
                  HSC
                </h3>
                <p className="text-sm text-gray-400 [html.light_&]:text-slate-600 mt-1 leading-relaxed">
                  Govt. Science College - Institute
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 3: SSC (Bottom) */}
          <div className="timeline-milestone relative group">
            {/* Timeline Dot Indicator */}
            <div
              className="absolute left-6 sm:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full -translate-x-1/2 z-10 bg-white [html.light_&]:bg-slate-700 ring-4 ring-slate-800 [html.light_&]:ring-slate-200"
              aria-hidden="true"
            />

            {/* Content Card */}
            <div className="pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 items-start">
              <div className="sm:text-right sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-200 [html.light_&]:text-slate-800">
                  SSC
                </h3>
                <p className="text-sm text-gray-400 [html.light_&]:text-slate-600 mt-1 leading-relaxed">
                  Dhanmondi Govt. Boys High School - Institute
                </p>
              </div>

              {/* Right Column Spacer (Desktop) */}
              <div className="hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}