import React from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <Image
            src="/images/my_favicon.png"
            alt="Md. Iqbal Hossain Logo"
            width={30}
            height={30}
            className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-xl font-bold tracking-widest uppercase">
            Md.Iqbal Hossain
          </span>
        </a>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a className="hover:text-white transition-colors" href="#home">Home</a>
            <a className="hover:text-white transition-colors" href="#about">About Me</a>
            <a className="hover:text-white transition-colors" href="#skills">Skills</a>
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="px-5 py-2 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-all font-semibold" href="#contact">Contact me</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
