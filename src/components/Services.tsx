// import React from "react";

// export default function Services() {
//   return (
//     <section className="py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">Services</h2>
//           <p className="text-gray-500 mt-2">What I offer</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default">
//             <div>
//               <div className="text-3xl mb-6">⊞</div>
//               <h3 className="text-2xl font-bold mb-10 leading-tight">
//                 Frontend
//                 <br />
//                 Development
//               </h3>
//             </div>
//             <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
//               View More →
//             </button>
//           </div>
//           <div className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default">
//             <div>
//               <div className="text-3xl mb-6">〈 〉</div>
//               <h3 className="text-2xl font-bold mb-10 leading-tight">
//                 Backend
//                 <br />
//                 Development
//               </h3>
//             </div>
//             <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
//               View More →
//             </button>
//           </div>
//           <div className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default">
//             <div>
//               <div className="text-3xl mb-6">📝</div>
//               <h3 className="text-2xl font-bold mb-10 leading-tight">
//                 Full Stack
//                 <br />
//                 Development
//               </h3>
//             </div>
//             <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
//               View More →
//             </button>
//           </div>
//           <div className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default">
//             <div>
//               <div className="text-3xl mb-6">📱</div>
//               <h3 className="text-2xl font-bold mb-10 leading-tight">
//                 Mobile Hybrid
//                 <br />
//                 App Development
//               </h3>
//             </div>
//             <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
//               View More →
//             </button>
//           </div>
//           <div className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default">
//             <div>
//               <div className="text-3xl mb-6">📋</div>
//               <h3 className="text-2xl font-bold mb-10 leading-tight">
//                 Prototype
//                 <br />
//                 Development
//               </h3>
//             </div>
//             <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
//               View More →
//             </button>
//           </div>
//           <div className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default">
//             <div>
//               <div className="text-3xl mb-6">⚙️</div>
//               <h3 className="text-2xl font-bold mb-10 leading-tight">
//                 API
//                 <br />
//                 Development
//               </h3>
//             </div>
//             <button className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
//               View More →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function Services() {
  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Services</h2>
          <p className="text-gray-500 mt-2">What I offer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="glass-card p-10 group hover:border-emerald-500/50 transition-all cursor-default">
            <div className="text-3xl mb-6">⊞</div>
            <h3 className="text-2xl font-bold leading-tight">
              Frontend
              <br />
              Development
            </h3>
          </div>

          {/* Backend Development */}
          <div className="glass-card p-10 group hover:border-emerald-500/50 transition-all cursor-default">
            <div className="text-3xl mb-6">〈 〉</div>
            <h3 className="text-2xl font-bold leading-tight">
              Backend
              <br />
              Development
            </h3>
          </div>

          {/* Full Stack Development */}
          <div className="glass-card p-10 group hover:border-emerald-500/50 transition-all cursor-default">
            <div className="text-3xl mb-6">MERN</div>
            <h3 className="text-2xl font-bold leading-tight">
              Full Stack
              <br />
              Development
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}