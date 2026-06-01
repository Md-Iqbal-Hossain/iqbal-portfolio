import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-gray-500 mt-2">Recent Projects</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* SportNest */}
          <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <Image
                alt="SportNest"
                src="https://i.ibb.co.com/gFTCZQGX/sportnest.png"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">SportNest</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                This sports booking platform built with Next.js, Node.js, and MongoDB features secure Better Auth (Google OAuth), dynamic real-time scheduling, complete facility CRUD management, and advanced search filtering...
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Next.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Node.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">MongoDB</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Better Auth</span>
              </div>
              <div className="flex gap-4">
                {/* GitHub Repo Link */}
                <Link
                  href="https://github.com/Md-Iqbal-Hossain/sportnest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 glass-card text-xs hover:bg-white/10 text-center block"
                >
                  GitHub
                </Link>

                {/* Live Demo Link */}
                <Link
                  href="https://sportnest-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 transition-colors text-center block"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>



          {/* QurbaniHat - Livestock Booking Platform */}
          <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <Image
                alt="QurbaniHat - Livestock Booking Platform"
                src="https://i.ibb.co.com/sdHw8fx9/livestock.png"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">QurbaniHat – Livestock Booking Platform</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                This livestock marketplace built with Next.js, React, and MongoDB features secure Better Auth (Google Sign-In), dynamic animal detail pages, real-time price sorting, and a streamlined booking checkout system...
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Next.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">MongoDB</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Better Auth</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">HeroUI</span>
              </div>
              <div className="flex gap-4">
                {/* GitHub Repo Link */}
                <Link
                  href="https://github.com/Md-Iqbal-Hossain/livestock-booking-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 glass-card text-xs hover:bg-white/10 text-center block"
                >
                  GitHub
                </Link>

                {/* Live Demo Link */}
                <Link
                  href="https://livestock-booking-platform-iqbal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 transition-colors text-center block"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* keen Keeper*/}
          <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <Image
                alt="QurbaniHat - Livestock Booking Platform"
                src="https://i.ibb.co.com/3yC8zvDK/keenkeeper.png"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Keen Keeper</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                This relationship management dashboard built with React and Tailwind CSS empowers users to nurture social connections using real-time interaction health monitoring, historical communication timelines, and interactive trend analytics...
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">React.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Recharts</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Context API</span>
              </div>
              <div className="flex gap-4">
                {/* GitHub Repo Link */}
                <Link
                  href="https://github.com/Md-Iqbal-Hossain/keen-keeper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 glass-card text-xs hover:bg-white/10 text-center block"
                >
                  GitHub
                </Link>

                {/* Live Demo Link */}
                <Link
                  href="https://keen-keeper-iqbal.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 transition-colors text-center block"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        {/* <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2 p-1 glass-card rounded-full">
            <button className="px-4 py-2 hover:bg-white/10 rounded-full text-sm">← PREV</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-sm">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-sm font-bold">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-sm">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-sm">
              4
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-sm">
              5
            </button>
            <button className="px-4 py-2 hover:bg-white/10 rounded-full text-sm">NEXT →</button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
