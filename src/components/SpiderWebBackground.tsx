"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
}

export default function SpiderWebBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let isDark = !document.documentElement.classList.contains("light");

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let isFinePointer = finePointerQuery.matches;
    let isReducedMotion = reducedMotionQuery.matches;

    // Mouse coordinates (null when off-screen)
    let mouseX: number | null = null;
    let mouseY: number | null = null;
    let targetMouseX: number | null = null;
    let targetMouseY: number | null = null;

    // Determine target node count based on screen size
    const getNodeCount = (w: number, h: number) => {
      const isMobile = w < 768;
      const isTablet = w >= 768 && w < 1024;
      if (isMobile) return Math.min(24, Math.floor((w * h) / 32000) + 12);
      if (isTablet) return Math.min(42, Math.floor((w * h) / 26000) + 20);
      return Math.min(65, Math.floor((w * h) / 22000) + 30);
    };

    const getMaxDistance = (w: number) => {
      if (w < 768) return 95;
      if (w < 1024) return 120;
      return 145;
    };

    const getMaxMouseDistance = (w: number) => {
      if (w < 768) return 100;
      return 160;
    };

    // Initialize nodes with subtle, random drift vectors
    const initNodes = () => {
      const count = getNodeCount(width, height);
      nodes = [];
      const baseSpeed = 0.22;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * (baseSpeed * 0.4 + Math.random() * baseSpeed * 0.6),
          vy: Math.sin(angle) * (baseSpeed * 0.4 + Math.random() * baseSpeed * 0.6),
          radius: 1.2 + Math.random() * 1.0, // 1.2px - 2.2px
          baseAlpha: 0.35 + Math.random() * 0.3, // 0.35 - 0.65
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Handle high-DPI canvas resizing
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initNodes();
    };

    resizeCanvas();

    // Theme observer for dark/light mode synchronization
    const themeObserver = new MutationObserver(() => {
      isDark = !document.documentElement.classList.contains("light");
      if (isReducedMotion) {
        drawFrame();
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Draw single frame (used for both animation and reduced-motion static render)
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDist = getMaxDistance(width);
      const maxDistSq = maxDist * maxDist;
      const maxMouseDist = getMaxMouseDistance(width);
      const maxMouseDistSq = maxMouseDist * maxMouseDist;

      // Color tokens:
      // Dark theme: Tailwind emerald-400 rgb(52, 211, 153)
      // Light theme: Tailwind emerald-600 rgb(5, 150, 105)
      const colorR = isDark ? 52 : 5;
      const colorG = isDark ? 211 : 150;
      const colorB = isDark ? 153 : 105;

      const lineBaseAlpha = isDark ? 0.18 : 0.14;
      const mouseLineBaseAlpha = isDark ? 0.28 : 0.22;

      // 1. Draw connecting web lines between nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / maxDist;
            const alpha = proximity * lineBaseAlpha;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      // 2. Mouse interaction: connect nearby nodes to cursor and apply subtle deflection
      if (mouseX !== null && mouseY !== null && isFinePointer) {
        for (let i = 0; i < nodes.length; i++) {
          const p = nodes[i];
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxMouseDistSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / maxMouseDist;
            const alpha = proximity * mouseLineBaseAlpha;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha.toFixed(3)})`;
            ctx.stroke();

            // Very gentle, smooth deflection away from cursor
            if (!isReducedMotion && dist > 1) {
              const pushForce = proximity * 0.35;
              p.x += (dx / dist) * pushForce;
              p.y += (dy / dist) * pushForce;
            }
          }
        }
      }

      // 3. Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        const pulse = Math.sin(p.pulsePhase) * 0.15;
        const alpha = Math.max(0.12, p.baseAlpha + pulse);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha.toFixed(2)})`;
        ctx.fill();
      }
    };

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Smooth mouse coordinate tracking
      if (targetMouseX !== null && targetMouseY !== null) {
        if (mouseX === null || mouseY === null) {
          mouseX = targetMouseX;
          mouseY = targetMouseY;
        } else {
          mouseX += (targetMouseX - mouseX) * 0.2;
          mouseY += (targetMouseY - mouseY) * 0.2;
        }
      } else if (mouseX !== null) {
        mouseX = null;
        mouseY = null;
      }

      // Update node positions with frame-rate normalized speed
      const speedFactor = dt * 60;
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx * speedFactor;
        p.y += p.vy * speedFactor;
        p.pulsePhase += 0.02 * speedFactor;

        // Soft bounce at viewport boundaries
        if (p.x <= 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx);
        } else if (p.x >= width) {
          p.x = width;
          p.vx = -Math.abs(p.vx);
        }

        if (p.y <= 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy);
        } else if (p.y >= height) {
          p.y = height;
          p.vy = -Math.abs(p.vy);
        }
      }

      drawFrame();

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Media query change handlers
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        drawFrame();
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      isFinePointer = e.matches;
      if (!isFinePointer) {
        mouseX = null;
        mouseY = null;
        targetMouseX = null;
        targetMouseY = null;
      }
    };
    finePointerQuery.addEventListener("change", handlePointerChange);

    // Mouse listeners for fine pointers only
    const onMouseMove = (e: MouseEvent) => {
      if (!isFinePointer) return;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      if (mouseX === null || mouseY === null) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    };

    const onMouseLeave = () => {
      targetMouseX = null;
      targetMouseY = null;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Subtle parallax shift on scroll
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (!isReducedMotion && Math.abs(scrollDelta) > 0.5) {
        const factor = Math.max(Math.min(scrollDelta * 0.08, 3), -3);
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].y -= factor * (0.3 + (i % 3) * 0.2);
          if (nodes[i].y < 0) nodes[i].y += height;
          if (nodes[i].y > height) nodes[i].y -= height;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let resizeTimer: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        if (isReducedMotion) {
          drawFrame();
        }
      }, 150);
    };
    window.addEventListener("resize", onResize);

    // Start render
    if (isReducedMotion) {
      drawFrame();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(resizeTimer);
      themeObserver.disconnect();
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      finePointerQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
