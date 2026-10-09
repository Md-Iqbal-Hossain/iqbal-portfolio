"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loadingState, setLoadingState] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    // Prevent showing on subsequent client navigations in the same session
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("portfolio_initial_loaded");
      if (hasLoaded) {
        setLoadingState("hidden");
        return;
      }
    }

    let isMounted = true;
    let fadeTimer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    const startDismissal = () => {
      if (!isMounted) return;
      try {
        sessionStorage.setItem("portfolio_initial_loaded", "true");
      } catch (e) {
        // Fallback if sessionStorage is blocked
      }
      setLoadingState("fading");
      removeTimer = setTimeout(() => {
        if (isMounted) setLoadingState("hidden");
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      fadeTimer = setTimeout(startDismissal, 700);
    } else {
      const handleLoad = () => {
        fadeTimer = setTimeout(startDismissal, 500);
      };
      window.addEventListener("load", handleLoad);

      // Fallback safety timeout so loader never gets stuck indefinitely
      const safetyTimer = setTimeout(startDismissal, 2200);

      return () => {
        isMounted = false;
        window.removeEventListener("load", handleLoad);
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
        clearTimeout(safetyTimer);
      };
    }

    return () => {
      isMounted = false;
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (loadingState === "hidden") {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] transition-all duration-500 ease-out select-none ${
        loadingState === "fading" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
      }`}
      aria-busy={loadingState === "visible"}
      aria-label="Loading Portfolio"
    >
      {/* Central Logo with Thin Animated Blue-to-Violet Ring */}
      <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 mb-6">
        <div className="loader-animated-ring" aria-hidden="true" />
        <Image
          src="/images/my_favicon.png"
          alt="Md. Iqbal Hossain Logo"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 p-1"
          priority
        />
      </div>

      {/* Loading Text Content */}
      <div className="text-center px-4 flex flex-col items-center">
        {/* Prominent Heading */}
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">
          Building something great.
        </h1>

        {/* Sub-heading */}
        <p className="text-xs md:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium mt-1">
          Initializing portfolio...
        </p>

        {/* Slim Horizontal Gradient Progress Bar */}
        <div className="w-60 md:w-72 h-1.5 bg-white/10 dark:bg-white/10 light:bg-slate-200/80 rounded-full overflow-hidden my-4 relative border border-white/5">
          <div className="loader-progress-bar h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
        </div>

        {/* Small & Subtle Portfolio Subtitle */}
        <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-500 light:text-gray-400 pt-0.5">
          Md. Iqbal Hossain's PORTFOLIO
        </p>
      </div>
    </div>
  );
}
