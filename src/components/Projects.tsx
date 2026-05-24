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
          {/* GameHub */}
          <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 overflow-hidden">
              <img
                alt="GameHub Project"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUB9OPzGKfk97yIh0ZKTLB2hhoD63SLqRwmLNQUNp8dRwEeaP9GrZd1nzZSj7ZZKhc9PHMx-oXFtITEhC8ca0rSJvRmGsyTv_zL-B0I5gUOag0aN5dzFed8Z3gTEmz8WcbFWsW5VJ_3fNipTiO41J6k5TM3i3zcAv9D1obfgX8j1hBtmXt9oifafRDTGKSy4OHLonMTueAdVll0ppn9lVzN9c4slbGrIKY5fZvaeUgQnYWUVOeI0LKzfmqBxWJMAWSbh2XRUjazMU"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">GameHub: The Ultimate Livestreaming Platform</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP
                streaming, real-time chat, viewer count...
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">TypeScript</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Next.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Node.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Socket.IO</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-2 glass-card text-xs hover:bg-white/10">GitHub</button>
                <button className="flex-1 py-2 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 transition-colors">
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Google Docs 2.0 */}
          <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 overflow-hidden">
              <img
                alt="Google Docs 2.0"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfiKOhIXTyRf_AO3gKhwKMi3-h4FcjUgZ5MAorbEN3FO4gmXAbih6k4dAhI0zwSjAyLxgpbDanNCAN8XK2xoGTN7OJzDNecYnNQJz47oW7z1joRiKQWyuJQsRIGAdyCcT8WgqSsk1MnVxcVUk0vEvZarqttJC_N5TM2Azvv20muF-AqacmFfnCle6ql9jfkyFdamSRegohIk-1UGA9oPpx5PfYs8OqGiSeu6HWGFEAPS7xaPcCWcv4k3J5YQDNNqQOZrifSH45rjo"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Google Docs 2.0: Next-Gen Real-Time Collaboration</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Google Docs Clone is a full-stack app built with Next.js 15, Shadcn UI, and Tailwind CSS, offering
                real-time editing, collaboration, comments...
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">TypeScript</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Next.js</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Firebase</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-2 glass-card text-xs hover:bg-white/10">GitHub</button>
                <button className="flex-1 py-2 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 transition-colors">
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Google Drive Clone */}
          <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="h-56 overflow-hidden">
              <img
                alt="Google Drive Clone"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQgX763wYfFS5pX4i6ElsmB45vq777IMhyG2YQQtj3RYRxvNQr_SvIGOPE6ionNF6F8NCZSd1SYb2HTAgnf_w6GRSeBROVsjbnONFd5LLnUVbZtg0NssFLpcuFr4eenDsfNarftEmT1K7wuo6S12_TVaiVj4BhQ7TZsYYdIxqEyfN8MJM37lEhyTc_ogPVW12AnueoFznpt9TV4RYvUfb8kxkiUTl8t5Fd3e5zlBTIUj634GqrQ6Z3tVB5Kv7Mwwh-_Dv_Q4XCEv0"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Google Drive Clone: The Ultimate Platform for File Sharing</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Modern file storage platform built with Next.js, Shadcn UI, and TypeScript. It offers secure uploads,
                role-based permissions...
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">React</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Convex</span>
                <span className="px-2 py-1 bg-white/5 text-[10px] rounded">Clerk</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-2 glass-card text-xs hover:bg-white/10">GitHub</button>
                <button className="flex-1 py-2 bg-blue-600 rounded-lg text-xs hover:bg-blue-500 transition-colors">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-16">
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
        </div>
      </div>
    </section>
  );
}
