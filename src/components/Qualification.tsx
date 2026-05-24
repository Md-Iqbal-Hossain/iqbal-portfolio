// "use client";

// import React, { useState } from "react";

// export default function Qualification() {
//   const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

//   return (
//     <section className="py-24 px-6 bg-slate-900/30">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">Qualification</h2>
//           <p className="text-gray-500 mt-2">My personal journey</p>
//         </div>

//         <div className="flex justify-center gap-12 mb-12">
//           <button
//             onClick={() => setActiveTab("experience")}
//             className={`flex items-center gap-2 text-xl font-medium transition-all ${
//               activeTab === "experience" ? "opacity-100" : "opacity-50"
//             }`}
//           >
//             <span className="text-2xl">🎓</span> Experience
//           </button>
//           <button
//             onClick={() => setActiveTab("education")}
//             className={`flex items-center gap-2 text-xl font-medium transition-all ${
//               activeTab === "education" ? "opacity-100" : "opacity-50"
//             }`}
//           >
//             <span className="text-2xl">💼</span> Education
//           </button>
//         </div>

//         <div className="relative max-w-lg mx-auto">
//           {activeTab === "education" ? (
//             <>
//               <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2"></div>
//               <div className="space-y-12">
//                 <div className="relative grid grid-cols-2 gap-8 items-center">
//                   <div className="text-right pr-4">
//                     <h3 className="font-bold text-lg">SSC</h3>
//                     <p className="text-sm text-gray-400">Khilgaon Govt. High School - Institute</p>
//                     <p className="text-xs text-gray-500 mt-2">🗓 2007 - 2017</p>
//                   </div>
//                   <div></div>
//                   <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10"></div>
//                 </div>
//                 <div className="relative grid grid-cols-2 gap-8 items-center">
//                   <div></div>
//                   <div className="pl-4">
//                     <h3 className="font-bold text-lg">HSC</h3>
//                     <p className="text-sm text-gray-400">Dhaka City College - Institute</p>
//                     <p className="text-xs text-gray-500 mt-2">🗓 2017 - 2019</p>
//                   </div>
//                   <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10"></div>
//                 </div>
//                 <div className="relative grid grid-cols-2 gap-8 items-center">
//                   <div className="text-right pr-4">
//                     <h3 className="font-bold text-lg">B. Sc. in CSE</h3>
//                     <p className="text-sm text-gray-400">East West University - Institute</p>
//                     <p className="text-xs text-gray-500 mt-2">🗓 2020 - 2024</p>
//                   </div>
//                   <div></div>
//                   <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10"></div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-12 glass-card p-6">
//               <p className="text-gray-400 italic">Work experience placeholder. You can fill in your professional history here manually later.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import React from "react";

export default function Qualification() {
  return (
    <section className="py-24 px-6 bg-slate-900/30" id="qualification">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Qualification</h2>
          <p className="text-gray-500 mt-2">My personal journey</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 text-xl font-medium opacity-100 cursor-default">
            <span className="text-2xl">🎓</span> Education
          </div>
        </div>

        <div className="relative max-w-lg mx-auto">
          {/* Vertical Timeline Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {/* SSC Milestone */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div className="text-right pr-4">
                <h3 className="font-bold text-lg">SSC</h3>
                <p className="text-sm text-gray-400">Dhanmondi Govt. Boys High School - Institute</p>
              </div>
              <div></div>
              <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10"></div>
            </div>

            {/* HSC Milestone */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div></div>
              <div className="pl-4">
                <h3 className="font-bold text-lg">HSC</h3>
                <p className="text-sm text-gray-400">Govt. Science College - Institute</p>
              </div>
              <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10"></div>
            </div>

            {/* B.Sc. Milestone */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div className="text-right pr-4">
                <h3 className="font-bold text-lg">B. Sc. in CSE</h3>
                <p className="text-sm text-gray-400">University of Liberal Arts Bangladesh (ULAB) - Institute</p>
              </div>
              <div></div>
              <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}