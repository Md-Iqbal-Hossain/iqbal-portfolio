// import React from "react";
// import Image from "next/image";

// export default function About() {
//   return (
//     <section className="py-24 px-6 bg-slate-900/30" id="about">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">About</h2>
//           <p className="text-gray-500 mt-2">My Introduction</p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="flex justify-center">
//             <div className="relative rounded-3xl overflow-hidden glass-card">
//               <Image
//                 alt="About Iqbal"
//                 className="w-full max-w-md h-auto object-cover"
//                 src="/images/My_photo_cartoon.png"
//                 width={448}
//                 height={448}
//               />
//             </div>
//           </div>
//           <div className="space-y-8">
//             <div className="grid grid-cols-3 gap-4 text-center">
//               <div className="glass-card p-4">
//                 <span className="block text-xl mb-1">🏅</span>
//                 <h3 className="font-bold">Experience</h3>
//                 <p className="text-xs text-gray-400">3 Years Working</p>
//               </div>
//               <div className="glass-card p-4">
//                 <span className="block text-xl mb-1">💼</span>
//                 <h3 className="font-bold">Completed</h3>
//                 <p className="text-xs text-gray-400">150+ Projects</p>
//               </div>
//               <div className="glass-card p-4">
//                 <span className="block text-xl mb-1">🎧</span>
//                 <h3 className="font-bold">Support</h3>
//                 <p className="text-xs text-gray-400">Online 24/7</p>
//               </div>
//             </div>
//             <p className="text-gray-400 leading-relaxed text-lg">
//               Proficient in React.js, Next.js, Redux, Node.js, and Docker, I build scalable, high-performance applications. Skilled in Prisma, Socket.IO, and Kubernetes, with expertise in MongoDB, PostgreSQL, and CI/CD pipelines, I deliver innovative real-time systems and impactful solutions.
//             </p>
//             <button className="px-8 py-4 glass-card hover:bg-white/10 flex items-center gap-2 font-medium">
//               Download Resume 📄
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-900/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-gray-500 mt-2">My Introduction</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative rounded-3xl overflow-hidden glass-card">
              <Image
                alt="About Iqbal"
                className="w-full max-w-md h-auto object-cover"
                src="/images/My_photo_cartoon.png"
                width={448}
                height={448}
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* Updated to Self-Learning Developer */}
              <div className="glass-card p-4 flex flex-col justify-center items-center">
                <span className="block text-xl mb-1">🌱</span>
                <h3 className="font-bold text-sm md:text-base leading-tight">Self-Learning</h3>
                <p className="text-xs text-gray-400 mt-0.5">Developer</p>
              </div>
              {/* Updated from 150+ to 40+ Projects */}
              <div className="glass-card p-4">
                <span className="block text-xl mb-1">💼</span>
                <h3 className="font-bold">Completed</h3>
                <p className="text-xs text-gray-400">40+ Projects</p>
              </div>
              <div className="glass-card p-4">
                <span className="block text-xl mb-1">🎧</span>
                <h3 className="font-bold">Support</h3>
                <p className="text-xs text-gray-400">Online 24/7</p>
              </div>
            </div>
            
            {/* Updated and restructured with paragraph splits for professional formatting */}
            <div className="text-gray-400 leading-relaxed text-lg space-y-4">
              <p>
                I build modern, responsive, and high-performance web applications using JavaScript, React.js, Next.js, Tailwind CSS, and Express.js.
              </p>
              <p>
                I focus on creating clean UI/UX designs with tools like Hero UI and implementing secure authentication using BetterAuth.
              </p>
              <p>
                I enjoy turning ideas into real-world projects and continuously improving my full-stack development skills.
              </p>
            </div>
            
            <button className="px-8 py-4 glass-card hover:bg-white/10 flex items-center gap-2 font-medium">
              Download Resume 📄
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}