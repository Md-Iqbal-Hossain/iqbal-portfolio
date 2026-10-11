"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key press and manage body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    {
      name: "Credentials & Experience",
      shortName: "Credentials",
      href: "#credentials",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/images/my_favicon.png"
            alt="Md. Iqbal Hossain Logo"
            width={30}
            height={30}
            className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase truncate max-w-[180px] xs:max-w-none">
            Md.Iqbal Hossain
          </span>
        </a>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="hover:text-white transition-colors"
                href={link.href}
              >
                {link.shortName ? (
                  <>
                    <span className="hidden xl:inline">{link.name}</span>
                    <span className="xl:hidden">{link.shortName}</span>
                  </>
                ) : (
                  link.name
                )}
              </a>
            ))}
            <a
              className="px-5 py-2 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-all font-semibold"
              href="#contact"
            >
              Contact me
            </a>
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl glass-card hover:bg-white/10 transition-all flex items-center justify-center text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center items-center">
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Slide-Out Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] h-full mobile-nav-drawer rounded-l-3xl border-l border-y shadow-2xl p-6 flex flex-col justify-between md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b mobile-nav-header">
            <div className="flex items-center gap-3">
              <Image
                src="/images/my_favicon.png"
                alt="Md. Iqbal Hossain Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold tracking-tight mobile-nav-title leading-tight truncate">
                  Md. Iqbal Hossain
                </span>
                <span className="text-xs font-medium mobile-nav-subtitle leading-tight">
                  Web Developer
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full mobile-nav-close transition-all shrink-0 active:scale-95"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col space-y-2 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium mobile-nav-link transition-all flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity mobile-nav-arrow">➔</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-5 py-3 rounded-full font-semibold text-center mobile-nav-contact-btn active:scale-[0.98] transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t mobile-nav-footer text-center">
          <p className="text-xs">
            Md. Iqbal Hossain &copy; {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </header>
  );
}

