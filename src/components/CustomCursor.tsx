"use client";

import React, { useEffect, useRef } from "react";

const TRAIL_SIZES = [5.5, 4.2, 3.2, 2.4];
const TRAIL_BASE_OPACITIES = [0.55, 0.4, 0.28, 0.16];
const TRAIL_COUNT = TRAIL_SIZES.length;

export default function CustomCursor() {
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const ringWrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const trailWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const trailDotsRef = useRef<(HTMLDivElement | null)[]>([]);

  const mousePos = useRef({ x: -100, y: -100 });
  const lastMousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  );
  const trailActivity = useRef(0);

  const isVisible = useRef(false);
  const isHovered = useRef(false);
  const isTextInput = useRef(false);
  const isReducedMotion = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isSupported = () => finePointerQuery.matches && desktopQuery.matches;

    isReducedMotion.current = reducedMotionQuery.matches;

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches;
    };
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    const updateVisibility = () => {
      const show = isVisible.current && !isTextInput.current && isSupported();
      if (dotRef.current) {
        dotRef.current.style.opacity = show ? "1" : "0";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = show ? (isHovered.current ? "1" : "0.75") : "0";
      }
      if (!show) {
        for (let i = 0; i < TRAIL_COUNT; i++) {
          const trailDot = trailDotsRef.current[i];
          if (trailDot) {
            trailDot.style.opacity = "0";
          }
        }
      }
    };

    const updateActiveState = () => {
      if (isSupported()) {
        document.documentElement.classList.add("custom-cursor-active");
      } else {
        document.documentElement.classList.remove("custom-cursor-active");
        isVisible.current = false;
      }
      updateVisibility();
    };

    updateActiveState();

    const handleMediaChange = () => {
      updateActiveState();
    };

    finePointerQuery.addEventListener("change", handleMediaChange);
    desktopQuery.addEventListener("change", handleMediaChange);

    const checkTarget = (target: HTMLElement | null) => {
      if (!target) return;

      // Check for editable elements, inputs, textareas, selects, or disabled controls
      const isInputOrDisabled = Boolean(
        target.closest(
          'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"], :disabled, [disabled], .cursor-not-allowed'
        )
      );
      isTextInput.current = isInputOrDisabled;

      // Check for clickable/interactive items (links, buttons, interactive cards, submit triggers)
      const isInteractive = Boolean(
        target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], label[for], summary, [data-cursor-hover], .cursor-pointer'
        )
      );
      const nextHovered = isInteractive && !isInputOrDisabled;

      if (isHovered.current !== nextHovered) {
        isHovered.current = nextHovered;
        if (ringRef.current) {
          if (nextHovered) {
            ringRef.current.classList.add("custom-cursor-ring-hover");
          } else {
            ringRef.current.classList.remove("custom-cursor-ring-hover");
          }
        }
        if (dotRef.current) {
          if (nextHovered) {
            dotRef.current.classList.add("custom-cursor-dot-hover");
          } else {
            dotRef.current.classList.remove("custom-cursor-dot-hover");
          }
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isSupported()) return;

      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        // Snap initial ring and trail positions directly to mouse to prevent entrance jumping
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        lastMousePos.current.x = e.clientX;
        lastMousePos.current.y = e.clientY;
        for (let i = 0; i < TRAIL_COUNT; i++) {
          trailPos.current[i].x = e.clientX;
          trailPos.current[i].y = e.clientY;
        }
      }

      checkTarget(e.target as HTMLElement | null);
      updateVisibility();
    };

    const onMouseOver = (e: MouseEvent) => {
      if (!isSupported()) return;
      checkTarget(e.target as HTMLElement | null);
      updateVisibility();
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      updateVisibility();
    };

    const onMouseEnter = () => {
      if (isSupported()) {
        isVisible.current = true;
        updateVisibility();
      }
    };

    const onWindowBlur = () => {
      isVisible.current = false;
      updateVisibility();
    };

    const onScroll = () => {
      if (!isSupported() || !isVisible.current) return;
      const el = document.elementFromPoint(mousePos.current.x, mousePos.current.y) as HTMLElement | null;
      checkTarget(el);
      updateVisibility();
    };

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const { x: targetX, y: targetY } = mousePos.current;

      // Calculate distance mouse traveled this frame to modulate trail visibility smoothly
      const dx = targetX - lastMousePos.current.x;
      const dy = targetY - lastMousePos.current.y;
      const distMoved = Math.hypot(dx, dy);

      lastMousePos.current.x = targetX;
      lastMousePos.current.y = targetY;

      const targetActivity = distMoved > 0.4 ? 1 : 0;
      trailActivity.current += (targetActivity - trailActivity.current) * Math.min(1, 12 * dt);

      // Trailing ring physics
      if (dotWrapperRef.current && ringWrapperRef.current) {
        if (isReducedMotion.current) {
          ringPos.current.x = targetX;
          ringPos.current.y = targetY;
        } else {
          // Frame-rate independent exponential smoothing
          const factor = 1 - Math.exp(-14 * dt);
          ringPos.current.x += (targetX - ringPos.current.x) * factor;
          ringPos.current.y += (targetY - ringPos.current.y) * factor;
        }

        dotWrapperRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        ringWrapperRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // Soft fading trail dots physics
      const showTrail =
        isVisible.current &&
        !isTextInput.current &&
        !isReducedMotion.current &&
        isSupported();

      let leaderX = targetX;
      let leaderY = targetY;

      for (let i = 0; i < TRAIL_COUNT; i++) {
        if (isReducedMotion.current) {
          trailPos.current[i].x = targetX;
          trailPos.current[i].y = targetY;
        } else {
          const decayRate = 32 - i * 5;
          const factor = 1 - Math.exp(-decayRate * dt);
          trailPos.current[i].x += (leaderX - trailPos.current[i].x) * factor;
          trailPos.current[i].y += (leaderY - trailPos.current[i].y) * factor;
        }

        const wrapper = trailWrappersRef.current[i];
        if (wrapper) {
          wrapper.style.transform = `translate3d(${trailPos.current[i].x}px, ${trailPos.current[i].y}px, 0)`;
        }

        const dotEl = trailDotsRef.current[i];
        if (dotEl) {
          const opacity = showTrail
            ? TRAIL_BASE_OPACITIES[i] * trailActivity.current
            : 0;
          dotEl.style.opacity = opacity > 0.01 ? opacity.toFixed(3) : "0";
        }

        leaderX = trailPos.current[i].x;
        leaderY = trailPos.current[i].y;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("scroll", onScroll, { passive: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      finePointerQuery.removeEventListener("change", handleMediaChange);
      desktopQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      className="custom-cursor-container pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Trailing emerald ring wrapper (32px diameter, smooth lerp) */}
      <div
        ref={ringWrapperRef}
        className="pointer-events-none fixed top-0 left-0 -ml-[16px] -mt-[16px] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={ringRef}
          className="custom-cursor-ring rounded-full"
        />
      </div>

      {/* Soft fading trail dots (4 small emerald dots following behind cursor) */}
      {TRAIL_SIZES.map((size, index) => (
        <div
          key={index}
          ref={(el) => {
            trailWrappersRef.current[index] = el;
          }}
          className="pointer-events-none fixed top-0 left-0 will-change-transform"
          style={{
            marginLeft: `-${size / 2}px`,
            marginTop: `-${size / 2}px`,
            transform: "translate3d(-100px, -100px, 0)",
          }}
        >
          <div
            ref={(el) => {
              trailDotsRef.current[index] = el;
            }}
            className="custom-cursor-trail-dot"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
      ))}

      {/* Main emerald dot wrapper (7px diameter, follows mouse cursor closely) */}
      <div
        ref={dotWrapperRef}
        className="pointer-events-none fixed top-0 left-0 -ml-[3.5px] -mt-[3.5px] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={dotRef}
          className="custom-cursor-dot rounded-full"
        />
      </div>
    </div>
  );
}
