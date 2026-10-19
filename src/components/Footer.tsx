import React from "react";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Credentials & Experience", href: "#credentials" },
  { name: "Contact Me", href: "#contact" },
];

const socialLinks = [
  {
    name: "Email",
    href: "mailto:iqbalhossain6615@gmail.com",
    ariaLabel: "Email Md. Iqbal Hossain",
    icon: FaEnvelope,
    isExternal: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-iqbalhossain-bd/",
    ariaLabel: "Visit Md. Iqbal Hossain's LinkedIn profile (opens in a new tab)",
    icon: FaLinkedin,
    isExternal: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801853264661",
    ariaLabel: "Chat with Md. Iqbal Hossain on WhatsApp (opens in a new tab)",
    icon: FaWhatsapp,
    isExternal: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Md-Iqbal-Hossain",
    ariaLabel: "Visit Md. Iqbal Hossain's GitHub profile (opens in a new tab)",
    icon: FaGithub,
    isExternal: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16 px-6 border-t border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12">
          {/* Column 1: Logo & Identity */}
          <div className="flex flex-col">
            <div className="flex items-center h-8">
              <a
                href="#home"
                className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
              >
                <Image
                  src="/images/my_favicon.png"
                  alt="Md. Iqbal Hossain Logo"
                  width={32}
                  height={32}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-white whitespace-nowrap">
                  Md.Iqbal Hossain
                </span>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Column 2: Quick Links (Centered Heading & Compact 3x2 Grid) */}
          <div className="flex flex-col md:px-2 lg:px-4">
            <div className="flex items-center justify-center h-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 text-center">
                Quick Links
              </h3>
            </div>
            <ul className="mt-2.5 grid grid-cols-3 gap-x-1 gap-y-1 text-xs w-full max-w-sm mx-auto">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex">
                  <a
                    href={link.href}
                    className="w-full min-h-[26px] sm:min-h-[28px] px-1 py-0.5 rounded border border-transparent bg-transparent text-gray-400 hover:text-emerald-400 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-200 flex items-center justify-center text-center text-[11px] sm:text-xs font-medium leading-tight break-words focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 focus-visible:ring-offset-1 focus-visible:ring-offset-black hover:-translate-y-0.5 motion-reduce:transform-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Contact Links */}
          <div className="flex flex-col md:pl-4 lg:pl-8">
            <div className="flex items-center h-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                Connect With Me
              </h3>
            </div>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    {...(link.isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          <p>
            {`© ${new Date().getFullYear()} Md. Iqbal Hossain. All rights reserved. Built with Next.js & Tailwind CSS.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
