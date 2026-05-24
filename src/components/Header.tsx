import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest uppercase">Md.Iqbal Hossain</div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a className="hover:text-white transition-colors" href="#home">Home</a>
          <a className="hover:text-white transition-colors" href="#about">About Me</a>
          <a className="hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="px-5 py-2 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-all font-semibold" href="#contact">Contact me</a>
        </div>
      </nav>
    </header>
  );
}
