import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiLayers, FiPackage } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-slate-300" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
];

const principles = [
  { label: "Clean code", icon: FiCode },
  { label: "Performance-first", icon: FiCpu },
  { label: "AI-driven UX", icon: FiDatabase },
  { label: "End-to-end ownership", icon: FiLayers },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
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

import ProfilePhoto from "./ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* About + Photo Row */}
        <div className="grid gap-10 lg:grid-cols-[1fr,auto] lg:items-start">
          <motion.div
            variants={itemVariants}
            className="glass-panel relative overflow-hidden rounded-3xl px-6 py-8 sm:px-8 sm:py-10"
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-emerald-500/5" />
            <div className="relative">
              <motion.p
                variants={itemVariants}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400"
              >
                 About
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
              >
              I blend{" "}
<span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-500 bg-clip-text text-transparent">
  full-stack engineering
</span>{" "}
and{" "}
<span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
  intelligent systems
</span>{" "}
to build practical digital products.
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                 I'm Shivani, a MERN & AI developer focused on crafting thoughtful,
  user-centric experiences. I enjoy solving complex problems with clean
  architecture, robust APIs, and intuitive interfaces.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="mt-4 text-base leading-relaxed text-slate-400"
              >
                I’ve built several full-stack applications including a lab equipment
  management platform with AI-assisted fault reporting and analytics,
  a hospital management system for handling patient and administrative
  workflows, and a finance management web app for tracking expenses and
  financial data. Through these projects I’ve worked extensively with the
  MERN stack, designing scalable APIs, building responsive interfaces,
  and integrating intelligent features to create practical, real-world
  solutions.
              </motion.p>
            </div>
          </motion.div>

          {/* Photo - prominent on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.03, rotate: 2 }}
              className="relative"
            >
              <ProfilePhoto className="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
              <motion.div
                className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl border-2 border-emerald-500/30"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 8, y: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack - Icon grid, no percentages */}
        <motion.div
          variants={itemVariants}
          className="glass-panel overflow-hidden rounded-3xl px-6 py-8 sm:px-8 sm:py-10"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Tech I build with
              </p>
              <p className="mt-1 text-slate-400">
                Languages, frameworks & tools 
              </p>
            </div>
            <FiPackage className="hidden h-12 w-12 text-emerald-500/50 sm:block" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 transition-colors hover:border-emerald-500/40 hover:bg-slate-800/60"
              >
                <tech.icon className={`h-10 w-10 sm:h-12 sm:w-12 ${tech.color}`} />
                <span className="text-center text-sm font-medium text-slate-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {principles.map((item, i) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/10"
              >
                <item.icon className="h-4 w-4 text-emerald-400" />
                {item.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
