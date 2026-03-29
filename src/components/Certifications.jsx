import React from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
  {
    title: "Data Structures and Applications",
    issuer: "Codechef",
  },
  {
    title: "Analysis and Design of Algorithm",
    issuer: "Codechef",
  },
  {
    title: "Foundation of Cloud IoT Edge ML",
    issuer: "NPTEL",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function Certifications() {
  return (
    <section id="certifications" className="px-4 sm:px-6">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
             Certifications
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Credentials that{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-500 bg-clip-text text-transparent">
              validate
            </span>{" "}
            expertise
          </h2>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <motion.a
              key={cert.title}
              href="#"
              variants={itemVariants}
              className="group flex items-start gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/60 p-6 transition hover:border-brand-500/50 hover:bg-slate-950/80"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500/80 to-emerald-500/80">
                <FiAward className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-slate-100 transition group-hover:text-emerald-300">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Certifications;
