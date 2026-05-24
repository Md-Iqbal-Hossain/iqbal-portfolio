// import React from "react";

// export default function Skills() {
//   return (
//     <section className="py-24 px-6 bg-slate-900/20">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">Skills</h2>
//           <p className="text-gray-500 mt-2">My Technical Level</p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="glass-card p-8">
//             <h3 className="text-2xl font-bold mb-8 text-center">Frontend Developer</h3>
//             <div className="grid grid-cols-2 gap-y-6">
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">HTML5</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">Next JS</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">TypeScript</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">Tailwind Css</h4>
//                   <p className="text-xs text-gray-500">Intermediate</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">JavaScript</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">React.JS</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="glass-card p-8">
//             <h3 className="text-2xl font-bold mb-8 text-center">Backend Developer</h3>
//             <div className="grid grid-cols-2 gap-y-6">
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">NodeJS</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">SQL</h4>
//                   <p className="text-xs text-gray-500">Intermediate</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">ExpressJS</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">Docker</h4>
//                   <p className="text-xs text-gray-500">Intermediate</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">MongoDB</h4>
//                   <p className="text-xs text-gray-500">Expert</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">✓</span>
//                 <div>
//                   <h4 className="font-medium text-sm">Kubernetes</h4>
//                   <p className="text-xs text-gray-500">Intermediate</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-slate-900/20" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="text-gray-500 mt-2">My Technical Level</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Frontend Developer</h3>
            <div className="grid grid-cols-2 gap-y-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">HTML5</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">Next JS</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">TypeScript</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">Tailwind Css</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">JavaScript</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">React.JS</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Backend Developer</h3>
            <div className="grid grid-cols-2 gap-y-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">Node.js</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">Express.js</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">MongoDB</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">REST API Development</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">Authentication (BetterAuth / JWT)</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <div>
                  <h4 className="font-medium text-sm">API Integration</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}