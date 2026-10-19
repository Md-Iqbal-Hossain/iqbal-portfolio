"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger with GSAP on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Checks whether the user has requested reduced motion.
 */
export const isReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Standard animation settings and timings for cohesive design.
 */
export const ANIMATION_PRESETS = {
  fadeUp: {
    y: 25,
    duration: 0.7,
    ease: "power2.out",
  },
  stagger: {
    cards: 0.1, // 0.08–0.12s per requirements
    badges: 0.05,
    links: 0.04,
  },
  scrollTrigger: {
    start: "top 85%",
    once: true,
  },
};

/**
 * Adds a brief, soft emerald glow to card borders/decorative elements
 * as they enter view, and automatically clears the inline boxShadow
 * once finished so existing CSS hover effects are 100% preserved.
 */
export const triggerEmeraldGlow = (
  targets: gsap.TweenTarget,
  delay: number = 0.2
) => {
  if (isReducedMotion()) return;

  gsap.fromTo(
    targets,
    {
      boxShadow: "0 0 0px rgba(16, 185, 129, 0)",
    },
    {
      boxShadow: "0 0 20px 2px rgba(16, 185, 129, 0.22)",
      duration: 0.45,
      delay,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      clearProps: "boxShadow",
    }
  );
};

export { gsap, ScrollTrigger, useGSAP };
