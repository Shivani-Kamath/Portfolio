import React from "react";
import { motion } from "framer-motion";
import {
  FiBook,
  FiCode,
  FiDatabase,
  FiServer,
  FiCpu,
  FiGlobe,
} from "react-icons/fi";

const coursework = [
  { name: "Data Structures", icon: FiCpu },
  { name: "Object-Oriented Programming", icon: FiCode },
  { name: "Web Development", icon: FiGlobe },
  { name: "Database Management Systems", icon: FiDatabase },
  { name: "Operating Systems", icon: FiServer },
  { name: "Computer Networks", icon: FiGlobe },
];

const skillsByCategory = {
  Languages: ["Java", "JavaScript", "Python", "C", "SQL"],
  "Frameworks & Technologies": [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  Tools: ["Git", "GitHub", "VS Code", "Eclipse"],
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
             Skills & Coursework
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
  Technical foundations that{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-500 bg-clip-text text-transparent">
    power my work
  </span>
</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="glass-panel overflow-hidden rounded-3xl px-6 py-8 sm:px-8 sm:py-10"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                <FiBook className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">
                Relevant Coursework
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {coursework.map((course, i) => (
                <motion.li
                  key={course.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 transition hover:border-emerald-500/30"
                >
                  <course.icon className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-200">
                    {course.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-panel overflow-hidden rounded-3xl px-6 py-8 sm:px-8 sm:py-10"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20">
                <FiCode className="h-6 w-6 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">
                Technical Skills
              </h3>
            </div>
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, items], catIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.08 }}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
