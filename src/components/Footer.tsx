import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Md. Iqbal Hossain</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-gray-300">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a className="hover:text-white" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-gray-300">Connect With Me</h3>
            <div className="flex gap-4">
              <a className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm" href="#">
                GitHub
              </a>
              <a className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm" href="#">
                LinkedIn
              </a>
              <a className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm" href="#">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-center text-xs text-gray-600">
          © 2026 Md.Iqbal Hossain. All rights reserved. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
