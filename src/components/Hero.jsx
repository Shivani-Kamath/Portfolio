// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

// const highlightVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0 },
// };

// function Hero() {
//   const fullTypedText = "MERN & AI Developer";
//   const [typed, setTyped] = useState("");

//   useEffect(() => {
//     if (typed.length === fullTypedText.length) return;
//     const timeout = setTimeout(() => {
//       setTyped(fullTypedText.slice(0, typed.length + 1));
//     }, 90);
//     return () => clearTimeout(timeout);
//   }, [typed]);

//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 md:min-h-[90vh]"
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
//         <motion.div
//           initial={{ opacity: 0, y: 26 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="max-w-xl text-center md:text-left"
//         >
//           <motion.p
//             variants={highlightVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ delay: 0.1, duration: 0.4 }}
//             className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-slate-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 shadow shadow-slate-950/40"
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//             Available for exciting opportunities
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
//             className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
//           >
//             Hi, I&apos;m{" "}
//             <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-brand-500 bg-clip-text text-transparent">
//               Shivani Kamath
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35, duration: 0.55 }}
//             className="mt-4 text-lg text-slate-300"
//           >
//             <span className="font-medium text-slate-100">{typed}</span>
//             <span className="ml-0.5 inline-block h-6 w-px animate-pulse bg-emerald-400/80 align-middle" />
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.55 }}
//             className="mt-5 text-base text-slate-300/90"
//           >
//             I craft performant, scalable experiences with the MERN stack and
//             intelligent AI systems. From idea to production, I design and
//             engineer products that are reliable, elegant, and user‑centric.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.6 }}
//             className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
//           >
//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/60 transition hover:shadow-brand-900/80"
//             >
//               View featured work
//               <FiArrowRight className="h-4 w-4" />
//             </a>
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 shadow-md shadow-slate-950/60 transition hover:border-brand-500/80 hover:bg-slate-900/90"
//             >
//               Let&apos;s collaborate
//             </a>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.85, duration: 0.6 }}
//             className="mt-6 flex items-center justify-center gap-4 text-slate-400 md:justify-start"
//           >
//             <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
//               Connect
//             </span>
//             <div className="flex items-center gap-3">
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-200 shadow-md shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
//               >
//                 <FiLinkedin className="h-4 w-4" />
//               </a>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-200 shadow-md shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
//               >
//                 <FiGithub className="h-4 w-4" />
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, x: 20 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
//           className="glass-panel relative mx-auto w-full max-w-sm px-6 py-7 text-slate-100 sm:px-8 md:mx-0"
//         >
//           <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-emerald-400 opacity-40 blur-xl" />
//           <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

//           <div className="relative flex items-center gap-4">
//             <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-500/70 bg-gradient-to-br from-brand-500/90 to-emerald-400/90 shadow-lg shadow-slate-950/80">
//               <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-white">
//                 SK
//               </div>
//             </div>
//             <div>
//               <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/90">
//                 Portfolio Snapshot
//               </p>
//               <p className="mt-1 text-sm text-slate-300">
//                 Full‑stack engineer building intelligent web experiences.
//               </p>
//             </div>
//           </div>

//           <div className="relative mt-6 space-y-3 text-xs text-slate-300/90">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-400">Primary stack</span>
//               <span className="rounded-full bg-slate-900/70 px-2 py-1 text-[0.7rem] font-semibold text-emerald-300">
//                 MERN + AI
//               </span>
//             </div>
//             <div className="flex flex-wrap gap-1.5">
//               {["React", "Node.js", "MongoDB", "Express", "Python", "LLMs"].map((badge) => (
//                 <span
//                   key={badge}
//                   className="rounded-full bg-slate-900/70 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200"
//                 >
//                   {badge}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="relative mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

//           <div className="relative mt-4 flex items-center justify-between text-xs text-slate-300/80">
//             <div>
//               <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
//                 Recent Focus
//               </p>
//               <p className="mt-1 text-sm text-slate-200">
//                 Lab automation, intelligent dashboards, and ML‑powered tools.
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
//                 Location
//               </p>
//               <p className="mt-1 text-sm text-slate-200">Open to remote</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import ProfilePhoto from "./ProfilePhoto";

const highlightVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  const fullTypedText = "MERN & AI Developer";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (typed.length === fullTypedText.length) return;
    const timeout = setTimeout(() => {
      setTyped(fullTypedText.slice(0, typed.length + 1));
    }, 90);
    return () => clearTimeout(timeout);
  }, [typed]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] sm:min-h-[80vh] md:min-h-[90vh] items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24"
    >
      {/* Background animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-400/10"
            style={{
              width: `${100 + Math.random() * 100}px`,
              height: `${100 + Math.random() * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, 30, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 20 + i * 3, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left"
        >
          <motion.p
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-slate-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 shadow shadow-slate-950/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for exciting opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
          Hi, I am{" "}
<span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-500 bg-clip-text text-transparent">
  Shivani Kamath
</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="mt-4 text-lg text-slate-300"
          >
            <span className="font-medium text-slate-100">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-px animate-pulse bg-emerald-400/80 align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
            className="mt-5 text-base text-slate-300/90"
          >
            I craft performant, scalable experiences with the MERN stack and
            intelligent AI systems. From idea to production, I design and
            engineer products that are reliable, elegant, and user‑centric.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/60 transition hover:shadow-brand-900/80"
            >
              View featured work
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 shadow-md shadow-slate-950/60 transition hover:border-brand-500/80 hover:bg-slate-900/90"
            >
              Lets collaborate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-4 text-slate-400 md:justify-start"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/Shivani-Kamath-"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-200 shadow-md shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Shivani-Kamath"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-200 shadow-md shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
              >
                <FiGithub className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Portfolio Snapshot Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="glass-panel relative mx-auto w-full max-w-sm px-6 py-7 text-slate-100 sm:px-8 md:mx-0"
        >
          <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-emerald-400 opacity-40 blur-xl" />
          <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative flex items-center gap-4">
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ rotate: 3, scale: 1.05 }}
            >
              <ProfilePhoto className="h-20 w-20 sm:h-24 sm:w-24" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/90">
                Portfolio Snapshot
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Full‑stack engineer building intelligent web experiences.
              </p>
            </div>
          </div>

          <div className="relative mt-6 space-y-3 text-xs text-slate-300/90">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Primary stack</span>
              <span className="rounded-full bg-slate-900/70 px-2 py-1 text-[0.7rem] font-semibold text-emerald-300">
                MERN + AI
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Java", "React", "Node.js", "MongoDB", "Express", "Python", "SQL", "JavaScript"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-slate-900/70 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

          <div className="relative mt-4 flex items-center justify-between text-xs text-slate-300/80">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
                Recent Focus
              </p>
              <p className="mt-1 text-sm text-slate-200">
              Building intelligent web platforms, automation tools, and data-driven dashboards.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
                Location
              </p>
              <p className="mt-1 text-sm text-slate-200">Actively seeking opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;