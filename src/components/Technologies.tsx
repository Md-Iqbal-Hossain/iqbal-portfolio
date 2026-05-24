// import React from "react";

// export default function Technologies() {
//   return (
//     <section className="py-24 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-2">Technologies</h2>
//         <p className="text-gray-500 mb-16">My Tech Stack</p>
//         <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-yellow-500/30">
//               <span className="text-yellow-500 font-bold">JS</span>
//             </div>
//             <span className="text-sm text-gray-400">JavaScript</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-blue-500/30">
//               <span className="text-blue-500 font-bold">TS</span>
//             </div>
//             <span className="text-sm text-gray-400">TypeScript</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-cyan-400/30">
//               <span className="text-cyan-400 font-bold">React</span>
//             </div>
//             <span className="text-sm text-gray-400">React</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
//               <span className="text-white font-bold">Next</span>
//             </div>
//             <span className="text-sm text-gray-400">Next.js</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-green-500/30">
//               <span className="text-green-500 font-bold">Node</span>
//             </div>
//             <span className="text-sm text-gray-400">Node.js</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
//               <span className="text-gray-300 font-bold">Express</span>
//             </div>
//             <span className="text-sm text-gray-400">Express</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-red-500/30">
//               <span className="text-red-500 font-bold">Nest</span>
//             </div>
//             <span className="text-sm text-gray-400">NestJS</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-green-600/30">
//               <span className="text-green-600 font-bold">DB</span>
//             </div>
//             <span className="text-sm text-gray-400">MongoDB</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiMongodb 
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Technologies() {
  return (
    <section className="py-24 px-6" id="technologies">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Technologies</h2>
        <p className="text-gray-500 mb-16">My Tech Stack</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          
          {/* JavaScript */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors">
              <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />
            </div>
            <span className="text-sm text-gray-400">JavaScript</span>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
              <SiTypescript className="w-8 h-8 text-[#3178C6]" />
            </div>
            <span className="text-sm text-gray-400">TypeScript</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors">
              <FaReact className="w-8 h-8 text-[#61DAFB] animate-[spin_20s_linear_infinite]" />
            </div>
            <span className="text-sm text-gray-400">React</span>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
              <SiNextdotjs className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-400">Next.js</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-sky-400/20 group-hover:border-sky-400/50 transition-colors">
              <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
            </div>
            <span className="text-sm text-gray-400">Tailwind CSS</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-green-500/20 group-hover:border-green-500/50 transition-colors">
              <SiNodedotjs className="w-8 h-8 text-[#339933]" />
            </div>
            <span className="text-sm text-gray-400">Node.js</span>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-white/5 group-hover:border-white/30 transition-colors">
              <SiExpress className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-400">Express</span>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-green-600/20 group-hover:border-green-600/50 transition-colors">
              <SiMongodb className="w-8 h-8 text-[#47A248]" />
            </div>
            <span className="text-sm text-gray-400">MongoDB</span>
          </div>

        </div>
      </div>
    </section>
  );
}