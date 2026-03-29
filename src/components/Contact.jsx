// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 2600);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="px-4 pb-16 sm:px-6 md:pb-24">
//       <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
//         {/* Left Info Panel */}
//         <motion.div
//           initial={{ opacity: 0, y: 26 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex-1"
//         >
//           <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
//             Let's Build Something
//           </p>
//           <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
//             Share your idea, brief, or challenge — I&apos;ll help you turn it into a{" "}
//             <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-brand-500 bg-clip-text text-transparent">
//               polished experience
//             </span>
//             .
//           </h2>
//           <p className="mt-4 text-sm text-slate-300/90">
//             Whether you&apos;re exploring a new product, improving an existing platform,
//             or experimenting with AI, I&apos;d love to hear from you.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200/90">
//             <a
//               href="mailto:example@email.com"
//               className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1.5 text-xs shadow-md shadow-slate-950/70 transition hover:border-brand-500/80 hover:text-white"
//             >
//               <FiMail className="h-3.5 w-3.5" /> Email
//             </a>
//             <a
//               href="https://www.linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1.5 text-xs shadow-md shadow-slate-950/70 transition hover:border-brand-500/80 hover:text-white"
//             >
//               <FiLinkedin className="h-3.5 w-3.5" /> LinkedIn
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1.5 text-xs shadow-md shadow-slate-950/70 transition hover:border-brand-500/80 hover:text-white"
//             >
//               <FiGithub className="h-3.5 w-3.5" /> GitHub
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Form Panel */}
//         <motion.div
//           initial={{ opacity: 0, y: 26 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ delay: 0.1, duration: 0.65, ease: "easeOut" }}
//           className="flex-1"
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="glass-panel relative space-y-5 px-6 py-7 sm:px-8 rounded-xl bg-slate-900/60 backdrop-blur-md"
//           >
//             {/* Decorative Blur Circles */}
//             <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-brand-500/20 blur-3xl" />
//             <div className="absolute -bottom-12 right-4 h-28 w-28 rounded-full bg-emerald-400/15 blur-3xl" />

//             {/* Name Input */}
//             <div className="relative">
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="off"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="peer block w-full rounded-xl border border-slate-600/70 bg-slate-950/70 px-3 pt-5 pb-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-transparent focus:border-brand-500/80"
//                 placeholder="Your name"
//               />
//               <label
//                 htmlFor="name"
//                 className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all duration-150 ease-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-emerald-300"
//               >
//                 Name
//               </label>
//             </div>

//             {/* Email Input */}
//             <div className="relative">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="off"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="peer block w-full rounded-xl border border-slate-600/70 bg-slate-950/70 px-3 pt-5 pb-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-transparent focus:border-brand-500/80"
//                 placeholder="Your email"
//               />
//               <label
//                 htmlFor="email"
//                 className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all duration-150 ease-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-emerald-300"
//               >
//                 Email
//               </label>
//             </div>

//             {/* Message Input */}
//             <div className="relative">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="peer block w-full resize-none rounded-xl border border-slate-600/70 bg-slate-950/70 px-3 pt-5 pb-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-transparent focus:border-brand-500/80"
//                 placeholder="Your message"
//               />
//               <label
//                 htmlFor="message"
//                 className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all duration-150 ease-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-emerald-300"
//               >
//                 Project details / message
//               </label>
//             </div>

//             {/* Submit Button */}
//             <div className="flex items-center justify-between gap-3 pt-1">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-950/80 transition hover:shadow-lg hover:shadow-brand-950/80"
//               >
//                 Send message
//               </button>

//               <motion.div
//                 initial={false}
//                 animate={isSubmitted ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
//                 transition={{ duration: 0.25 }}
//                 className="text-[0.72rem] text-emerald-300"
//               >
//                 {isSubmitted && "Thanks! I’ll get back to you shortly."}
//               </motion.div>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2600);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-4 pb-16 sm:px-6 md:pb-24 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/50"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, 50, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 20 + i, ease: "linear" }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
             Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Share your idea, brief, or challenge — I will help you turn it into a{" "}
            <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-brand-500 bg-clip-text text-transparent">
              polished experience
            </span>
            .
          </h2>
          <p className="mt-4 text-sm text-slate-300/90">
            Whether you are exploring a new product, improving an existing platform,
            or experimenting with AI, I would love to hear from you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200/90">
  <a
    href="mailto:shivanikamath369@gmail.com"
    className="group inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1.5 text-xs shadow-md shadow-slate-950/70 transition transform hover:scale-110 hover:border-brand-500/80 hover:text-white"
  >
    <FiMail className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-emerald-400" /> 
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/Shivani-Kamath-/"
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1.5 text-xs shadow-md shadow-slate-950/70 transition transform hover:scale-110 hover:border-brand-500/80 hover:text-white"
  >
    <FiLinkedin className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-emerald-400" /> 
    LinkedIn
  </a>

  <a
    href="https://github.com/Shivani-Kamath"
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1.5 text-xs shadow-md shadow-slate-950/70 transition transform hover:scale-110 hover:border-brand-500/80 hover:text-white"
  >
    <FiGithub className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-emerald-400" /> 
    GitHub
  </a>
</div>
        </motion.div>

        {/* Right Form Panel */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.65, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel relative space-y-5 px-6 py-7 sm:px-8 rounded-xl bg-slate-900/60 backdrop-blur-md cursor-pointer"
            whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            {/* Decorative Blur Circles */}
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute -bottom-12 right-4 h-28 w-28 rounded-full bg-emerald-400/15 blur-3xl" />

            {/* Name Input */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer block w-full rounded-xl border border-slate-600/70 bg-slate-950/70 px-3 pt-5 pb-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-transparent focus:border-transparent focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Your name"
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all duration-150 ease-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-emerald-300"
              >
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer block w-full rounded-xl border border-slate-600/70 bg-slate-950/70 px-3 pt-5 pb-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-transparent focus:border-transparent focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Your email"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all duration-150 ease-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-emerald-300"
              >
                Email
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="peer block w-full resize-none rounded-xl border border-slate-600/70 bg-slate-950/70 px-3 pt-5 pb-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-transparent focus:border-transparent focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Your message"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all duration-150 ease-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-emerald-300"
              >
                Project details / message
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-950/80 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/80"
              >
                Send message
              </button>

              {/* Animated Submission Message */}
              <motion.div
                initial={false}
                animate={
                  isSubmitted
                    ? { opacity: 1, y: 0, scale: 1.1, color: "#34D399" }
                    : { opacity: 0, y: 6, scale: 1, color: "#10B981" }
                }
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                className="text-[0.72rem]"
              >
                {isSubmitted && "Thanks! I’ll get back to you shortly."}
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}