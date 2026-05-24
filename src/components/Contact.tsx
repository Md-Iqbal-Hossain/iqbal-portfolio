// "use client";

// import React, { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     project: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Placeholder submit handler (user can hook up an API here later)
//     alert(`Message sent by ${formData.name}!`);
//     setFormData({ name: "", email: "", project: "" });
//   };

//   return (
//     <section className="py-24 px-6" id="contact">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">Get in Touch</h2>
//           <p className="text-gray-500 mt-2">Contact Me</p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-16">
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-center mb-8">Talk to me</h3>
//             <div className="glass-card p-6 text-center">
//               <div className="text-2xl mb-2">✉️</div>
//               <h4 className="font-bold">EMAIL</h4>
//               <p className="text-sm text-gray-400">nuradnanchowdhury015@gmail.com</p>
//               <a className="text-xs text-blue-400 mt-4 block hover:underline" href="mailto:nuradnanchowdhury015@gmail.com">
//                 Write me →
//               </a>
//             </div>
//             <div className="glass-card p-6 text-center">
//               <div className="text-2xl mb-2">in</div>
//               <h4 className="font-bold">LINKEDIN</h4>
//               <p className="text-sm text-gray-400">md-iqbal-hossain</p>
//               <a className="text-xs text-blue-400 mt-4 block hover:underline" href="#">
//                 Write me →
//               </a>
//             </div>
//             <div className="glass-card p-6 text-center">
//               <div className="text-2xl mb-2">𝕏</div>
//               <h4 className="font-bold">TWITTER</h4>
//               <p className="text-sm text-gray-400">@NurAdnanChowdhu</p>
//               <a className="text-xs text-blue-400 mt-4 block hover:underline" href="#">
//                 Write me →
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-center mb-8">Write me your project</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="relative">
//                 <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Name</label>
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full bg-slate-900 border-white/10 rounded-xl px-4 py-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 text-white"
//                   placeholder="Insert your Name"
//                   type="text"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Email</label>
//                 <input
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full bg-slate-900 border-white/10 rounded-xl px-4 py-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 text-white"
//                   placeholder="Insert your email"
//                   type="email"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Project</label>
//                 <textarea
//                   name="project"
//                   value={formData.project}
//                   onChange={handleChange}
//                   className="w-full bg-slate-900 border-white/10 rounded-xl px-4 py-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 text-white"
//                   placeholder="Write your project"
//                   rows={6}
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="px-10 py-4 glass-card bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 group font-medium cursor-pointer"
//               >
//                 Send Message <span className="group-hover:rotate-12 transition-transform">🕊️</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import React, { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     project: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   // Placeholder submit handler (user can hook up an API here later)
//   //   alert(`Message sent by ${formData.name}!`);
//   //   setFormData({ name: "", email: "", project: "" });
//   // };

//   return (
//     <section className="py-24 px-6" id="contact">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">Get in Touch</h2>
//           <p className="text-gray-500 mt-2">Contact Me</p>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-16">
//           {/* Direct Contact Channels */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-center mb-8">Talk to me</h3>
            
//             {/* Email Card */}
//             <div className="glass-card p-6 text-center">
//               <div className="text-2xl mb-2">✉️</div>
//               <h4 className="font-bold">EMAIL</h4>
//               <p className="text-sm text-gray-400">iqbalhossain6615@gmail.com</p>
//               <a className="text-xs text-blue-400 mt-4 block hover:underline" href="mailto:iqbalhossain6615@gmail.com">
//                 Write me →
//               </a>
//             </div>
            
//             {/* LinkedIn Card */}
//             <div className="glass-card p-6 text-center">
//               <div className="text-2xl mb-2">in</div>
//               <h4 className="font-bold">LINKEDIN</h4>
//               <p className="text-sm text-gray-400">md-iqbal-hossain</p>
//               <a className="text-xs text-blue-400 mt-4 block hover:underline" href="#">
//                 Write me →
//               </a>
//             </div>
//           </div>
          
//           {/* Contact Form Container */}
//           {/* <div>
//             <h3 className="text-xl font-bold text-center mb-8">Write me your project</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="relative">
//                 <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Name</label>
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full bg-slate-900 border-white/10 rounded-xl px-4 py-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 text-white"
//                   placeholder="Insert your Name"
//                   type="text"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Email</label>
//                 <input
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full bg-slate-900 border-white/10 rounded-xl px-4 py-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 text-white"
//                   placeholder="Insert your email"
//                   type="email"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Project</label>
//                 <textarea
//                   name="project"
//                   value={formData.project}
//                   onChange={handleChange}
//                   className="w-full bg-slate-900 border-white/10 rounded-xl px-4 py-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 text-white"
//                   placeholder="Write your project"
//                   rows={6}
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="px-10 py-4 glass-card bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 group font-medium cursor-pointer"
//               >
//                 Send Message <span className="group-hover:rotate-12 transition-transform">🕊️</span>
//               </button>
//             </form>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 mt-2">Contact Me</p>
        </div>
        
        {/* Centered Container for the Contact Channels */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Talk to me</h3>
          
          {/* Responsive 2-Column Grid */}
          <div className="grid sm:grid-cols-2 gap-6 justify-center">
            {/* Email Card */}
            <div className="glass-card p-6 text-center flex flex-col items-center justify-center">
              <div className="text-2xl mb-2">✉️</div>
              <h4 className="font-bold">EMAIL</h4>
              <p className="text-sm text-gray-400">iqbalhossain6615@gmail.com</p>
              <a 
                className="text-xs text-blue-400 mt-4 block hover:underline" 
                href="mailto:iqbalhossain6615@gmail.com"
              >
                Write me →
              </a>
            </div>
            
            {/* LinkedIn Card */}
            <div className="glass-card p-6 text-center flex flex-col items-center justify-center">
              <div className="text-2xl mb-2 font-bold text-blue-500">in</div>
              <h4 className="font-bold">LINKEDIN</h4>
              <p className="text-sm text-gray-400">md-iqbal-hossain</p>
              <a 
                className="text-xs text-blue-400 mt-4 block hover:underline" 
                href="https://www.linkedin.com/in/md-iqbalhossain-bd/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Write me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




