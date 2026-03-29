// import React from "react";
// import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="mt-10 border-t border-slate-800/80 bg-slate-950/90 px-4 py-4 text-xs text-slate-500 sm:px-6">
//       <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
//         <p className="text-center sm:text-left">
//           &copy; {year} <span className="text-slate-200">Shivani Kamath</span>. Crafted with
//           React, Tailwind, and a bit of AI.
//         </p>
//         <div className="flex items-center gap-3 text-slate-300">
//           <a
//             href="mailto:example@email.com"
//             className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/80 text-slate-200 shadow-sm shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
//           >
//             <FiMail className="h-3.5 w-3.5" />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noreferrer"
//             className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/80 text-slate-200 shadow-sm shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
//           >
//             <FiLinkedin className="h-3.5 w-3.5" />
//           </a>
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noreferrer"
//             className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/80 text-slate-200 shadow-sm shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
//           >
//             <FiGithub className="h-3.5 w-3.5" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  const socialIcons = [
    { icon: <FiMail />, href: "mailto:shivanikamath369@gmail.com" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/Shivani-Kamath-/", target: "_blank" },
    { icon: <FiGithub />, href: "https://github.com/Shivani-Kamath/", target: "_blank" },
  ];

  return (
    <footer className="relative mt-10 border-t border-slate-800/80 bg-slate-950/90 px-4 py-6 sm:px-6">
      {/* Optional floating particles behind footer */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/40"
            animate={{
              x: [0, 50, -30, 0],
              y: [0, 30, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 15 + i, ease: "linear" }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center sm:text-left text-slate-400 text-xs">
          &copy; {year} <span className="text-slate-200 font-medium">Shivani Kamath</span>. Crafted with{" "}
          <span className="text-emerald-300">React</span>,{" "}
          <span className="text-emerald-300">Tailwind</span>.
        </p>

        <div className="flex items-center gap-3">
          {socialIcons.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target={social.target || "_self"}
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/80 text-slate-200 shadow-sm shadow-slate-950/60 transition hover:border-brand-500/80 hover:text-white"
            >
              {social.icon}
            </motion.a>
          ))}

          {/* Optional: Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/80 text-slate-200 shadow-sm shadow-slate-950/60 hover:border-brand-500/80 hover:text-white"
          >
            <FiArrowUp className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;