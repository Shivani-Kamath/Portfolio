// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

// const navItems = [
//   { href: "#hero", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#projects", label: "Projects" },
//   { href: "#contact", label: "Contact" },
// ];

// function Navbar({ theme, onToggleTheme }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href) => {
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     setIsMenuOpen(false);
//   };

//   const navbarBackground = isScrolled
//     ? "bg-slate-950/85 border-b border-slate-800/70 shadow-soft dark:bg-slate-950/90"
//     : "bg-transparent";

//   return (
//     <motion.nav
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`fixed inset-x-0 top-0 z-50 ${navbarBackground} backdrop-blur-xl`}
//     >
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
//         <button
//           type="button"
//           onClick={() => handleNavClick("#hero")}
//           className="group inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/40 transition hover:border-brand-500/80 hover:bg-slate-900/90"
//         >
//           <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-brand-500 to-emerald-400 text-xs font-semibold leading-6 text-white shadow-md shadow-brand-700/60">
//             SK
//           </span>
//           <span className="hidden sm:inline">
//             Shivani <span className="text-slate-400">Kamath</span>
//           </span>
//           <span className="hidden text-xs text-emerald-300/80 sm:inline">
//             MERN &amp; AI Developer
//           </span>
//         </button>

//         <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
//           {navItems.map((item) => (
//             <button
//               key={item.href}
//               type="button"
//               onClick={() => handleNavClick(item.href)}
//               className="relative px-1 py-1 text-slate-300 transition hover:text-white"
//             >
//               <span>{item.label}</span>
//               <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
//             </button>
//           ))}
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             type="button"
//             onClick={onToggleTheme}
//             aria-label="Toggle theme"
//             className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 shadow-lg shadow-slate-950/40 transition hover:border-brand-500/80 hover:text-white"
//           >
//             {theme === "dark" ? (
//               <FiSun className="h-4 w-4 text-amber-300" />
//             ) : (
//               <FiMoon className="h-4 w-4 text-slate-700" />
//             )}
//           </button>

//           <button
//             type="button"
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//             className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 shadow-lg shadow-slate-950/40 transition hover:border-brand-500/80 hover:text-white md:hidden"
//             aria-label="Toggle navigation"
//           >
//             {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
//           </button>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -8 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -8 }}
//           className="border-t border-slate-800/80 bg-slate-950/95 px-4 pb-4 pt-2 shadow-xl md:hidden"
//         >
//           <div className="flex flex-col gap-1 text-sm text-slate-200">
//             {navItems.map((item) => (
//               <button
//                 key={item.href}
//                 type="button"
//                 onClick={() => handleNavClick(item.href)}
//                 className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-900 hover:text-white"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e?.preventDefault?.();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const navbarBackground = isScrolled
    ? "bg-slate-950/85 border-b border-slate-800/70 shadow-soft dark:bg-slate-950/90"
    : "bg-transparent";

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 ${navbarBackground} backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick(null, "#hero")}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-sm font-medium text-slate-100 shadow-lg shadow-slate-950/40 transition hover:border-brand-500/80 hover:bg-slate-900/90"
        >
          <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-brand-500 to-emerald-400 text-xs font-semibold leading-6 text-white shadow-md shadow-brand-700/60">
            SK
          </span>
          <span className="hidden sm:inline">
            Shivani <span className="text-slate-400">Kamath</span>
          </span>
          <span className="hidden text-xs text-emerald-300/80 sm:inline">
            MERN &amp; AI Developer
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(null, item.href)}
              className="group relative px-1 py-1 text-slate-300 transition hover:text-white"
            >
              <span className="text-emerald-400/80 font-mono text-[0.65rem]">{item.num}.</span>{" "}
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-emerald-400 to-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        {/* Theme & Mobile Menu Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 shadow-lg shadow-slate-950/40 transition hover:border-brand-500/80 hover:text-white"
          >
            {theme === "dark" ? (
              <FiSun className="h-4 w-4 text-amber-300" />
            ) : (
              <FiMoon className="h-4 w-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 shadow-lg shadow-slate-950/40 transition hover:border-brand-500/80 hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-slate-800/80 bg-slate-950/95 px-4 pb-4 pt-2 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-1 text-sm text-slate-200">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(null, item.href)}
                className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-900 hover:text-white"
              >
                <span className="text-emerald-400/80 font-mono text-[0.65rem]">{item.num}.</span>{" "}
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;