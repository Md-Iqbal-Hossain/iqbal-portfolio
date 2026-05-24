// import React from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden" id="home">
//       <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
//         <div className="space-y-6" data-purpose="hero-content">
//           <div className="flex items-center space-x-4">
//             <div className="flex flex-col space-y-4">
//               <a
//                 className="p-2 glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
//                 href="https://www.linkedin.com/in/md-iqbalhossain-bd/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="LinkedIn"
//               >
//                 <svg
//                   className="w-5 h-5 fill-current text-white"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                 </svg>
//               </a>
//               <a
//                 className="p-2 glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
//                 href="https://github.com/Md-Iqbal-Hossain"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="GitHub"
//               >
//                 <svg
//                   className="w-5 h-5 fill-current text-white"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
//                   />
//                 </svg>
//               </a>
//             </div>
//             <div>
//               <p className="text-gray-400 text-lg">Hey, I'm</p>
//               <h1 className="text-5xl md:text-7xl font-bold mt-2">
//                 Md. Iqbal Hossain <span className="inline-block animate-bounce">👋</span>
//               </h1>
//               <div className="mt-6 space-y-2">
//                 <p className="text-xl text-gray-300">I am a</p>
//                 <p className="text-gray-400">🚀 Turning ideas into Stunning Websites 💻</p>
//                 <p className="text-gray-400">| Available for projects and collaborations 🌟</p>
//               </div>
//               <div className="mt-10">
//                 <a className="inline-flex items-center px-8 py-4 glass-card border-white/20 hover:bg-white/5 text-lg font-medium transition-all group" href="#contact">
//                   Say Hello <span className="ml-2 group-hover:translate-x-1 transition-transform">➔</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="pt-20">
//             <a className="text-gray-500 flex items-center gap-2 text-sm" href="#about">
//               <span className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center pt-1">
//                 <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
//               </span>
//               Scroll Down ↓
//             </a>
//           </div>
//         </div>
//         <div className="relative" data-purpose="hero-image">
//           <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
//             <div className="absolute -top-4 -right-10 glass-card p-3 flex items-center gap-3 z-20">
//               <span className="text-2xl">⚡</span>
//               <div>
//                 <p className="text-xs text-gray-400">Problem Solving</p>
//                 <p className="font-bold">120+</p>
//               </div>
//             </div>
//             <div className="absolute top-1/3 -left-16 glass-card p-3 flex items-center gap-3 z-20">
//               <span className="text-2xl">💼</span>
//               <div>
//                 <p className="text-xs text-gray-400">Year of Experience</p>
//                 <p className="font-bold">3 Years</p>
//               </div>
//             </div>
//             <div className="absolute bottom-10 -right-4 glass-card p-3 flex items-center gap-3 z-20">
//               <span className="text-2xl">🏆</span>
//               <div>
//                 <p className="text-xs text-gray-400">Finished Projects</p>
//                 <p className="font-bold">150+</p>
//               </div>
//             </div>
//             <div className="w-full h-full rounded-full border border-white/10 overflow-hidden bg-gradient-to-b from-blue-500/20 to-transparent">
//               <Image
//                 alt="Md. Iqbal Hossain Portrait"
//                 className="w-full h-full object-cover scale-110 object-top"
//                 src="/images/my_photo_2.png"
//                 width={450}
//                 height={450}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// **************************************************************************************

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const roles = ["Web Designer", "Web Developer", "Problem Solver"];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // Start fade out
//       setTimeout(() => {
//         setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//         setFade(true); // Start fade in
//       }, 300); // Time to clear text during fade
//     }, 3000); // Total time each role stays visible

//     return () => clearInterval(interval);
//   }, [roles.length]);

//   return (
//     <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden" id="home">
//       <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
//         <div className="space-y-6" data-purpose="hero-content">
//           <div className="flex items-center space-x-4">
//             <div className="flex flex-col space-y-4">
//               <a
//                 className="p-2 glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
//                 href="https://www.linkedin.com/in/md-iqbalhossain-bd/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="LinkedIn"
//               >
//                 <svg
//                   className="w-5 h-5 fill-current text-white"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                 </svg>
//               </a>
//               <a
//                 className="p-2 glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
//                 href="https://github.com/Md-Iqbal-Hossain"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="GitHub"
//               >
//                 <svg
//                   className="w-5 h-5 fill-current text-white"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
//                   />
//                 </svg>
//               </a>
//             </div>
//             <div>
//               <p className="text-gray-400 text-lg">Hey, I'm</p>
//               <h1 className="text-5xl md:text-7xl font-bold mt-2">
//                 Md. Iqbal Hossain <span className="inline-block animate-bounce">👋</span>
//               </h1>
//               <div className="mt-6 space-y-2">
//                 <p className="text-xl text-gray-300 min-h-[1.75rem]">
//                   I am a{" "}
//                   <span
//                     className={`font-semibold text-blue-400 transition-opacity duration-300 ${
//                       fade ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     {roles[currentRoleIndex]}
//                   </span>
//                 </p>
//                 <p className="text-gray-400">💼 Transforming Concepts into High-Performance Web Applications 🌐</p>
//                 <p className="text-gray-400">⚡ Available for client projects and innovative collaborations 🎯</p>
//               </div>
//               <div className="mt-10">
//                 <a className="inline-flex items-center px-8 py-4 glass-card border-white/20 hover:bg-white/5 text-lg font-medium transition-all group" href="#contact">
//                   Say Hello <span className="ml-2 group-hover:translate-x-1 transition-transform">➔</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="pt-20">
//             <a className="text-gray-500 flex items-center gap-2 text-sm" href="#about">
//               <span className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center pt-1">
//                 <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
//               </span>
//               Scroll Down ↓
//             </a>
//           </div>
//         </div>
//         <div className="relative" data-purpose="hero-image">
//           <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
//             {/* Kept only the requested Finished Projects single badge */}
//             <div className="absolute bottom-10 -right-4 glass-card p-3 flex items-center gap-3 z-20">
//               <span className="text-2xl">🏆</span>
//               <div>
//                 <p className="text-xs text-gray-400">Finished Projects</p>
//                 <p className="font-bold">40+</p>
//               </div>
//             </div>
//             <div className="w-full h-full rounded-full border border-white/10 overflow-hidden bg-gradient-to-b from-blue-500/20 to-transparent">
//               <Image
//                 alt="Md. Iqbal Hossain Portrait"
//                 className="w-full h-full object-cover scale-110 object-top"
//                 src="/images/my_photo_2.png"
//                 width={450}
//                 height={450}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const roles = ["Web Designer", "Web Developer", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing phase: add one letter
        setDisplayText((prev) => currentFullText.substring(0, prev.length + 1));

        // If the full word is finished typing, pause before deleting
        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait 1.5s at full text
          return;
        }
      } else {
        // Deleting phase: remove one letter
        setDisplayText((prev) => currentFullText.substring(0, prev.length - 1));

        // If the word is fully deleted, switch to the next role
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          return;
        }
      }

      // Dynamic speed: typing is slower, deleting is faster
      const typingSpeed = isDeleting ? 40 : 100;
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, isDeleting ? 40 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden" id="home">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6" data-purpose="hero-content">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col space-y-4">
              <a
                className="p-2 glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
                href="https://www.linkedin.com/in/md-iqbalhossain-bd/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                className="p-2 glass-card hover:bg-white/10 transition-colors flex items-center justify-center"
                href="https://github.com/Md-Iqbal-Hossain"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-lg">Hey, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mt-2">
                Md.Iqbal Hossain <span className="inline-block animate-bounce">👋</span>
              </h1>
              <div className="mt-6 space-y-2">
                <p className="text-xl text-gray-300 min-h-[1.75rem] flex items-center">
                  I am a&nbsp;
                  <span className="font-semibold text-blue-400 relative after:content-['|'] after:ml-0.5 after:animate-pulse after:text-blue-400">
                    {displayText}
                  </span>
                </p>
                <p className="text-gray-400">💼 Transforming Concepts into High-Performance Web Applications 🌐</p>
                <p className="text-gray-400">⚡ Available for client projects and innovative collaborations 🎯</p>
              </div>
              <div className="mt-10">
                <a className="inline-flex items-center px-8 py-4 glass-card border-white/20 hover:bg-white/5 text-lg font-medium transition-all group" href="#contact">
                  Say Hello <span className="ml-2 group-hover:translate-x-1 transition-transform">➔</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <a className="text-gray-500 flex items-center gap-2 text-sm" href="#about">
              <span className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center pt-1">
                <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
              </span>
              Scroll Down ↓
            </a>
          </div>
        </div>
        <div className="relative" data-purpose="hero-image">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
            <div className="absolute bottom-10 -right-4 glass-card p-3 flex items-center gap-3 z-20">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-gray-400">Finished Projects</p>
                <p className="font-bold">40+</p>
              </div>
            </div>
            <div className="w-full h-full rounded-full border border-white/10 overflow-hidden bg-gradient-to-b from-blue-500/20 to-transparent">
              <Image
                alt="Md. Iqbal Hossain Portrait"
                className="w-full h-full object-cover scale-110 object-top"
                src="/images/my_photo_2.png"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}