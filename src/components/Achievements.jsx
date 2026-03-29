import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiBook } from "react-icons/fi";

const achievements = [
  {
    title: "Algorithmic Proficiency",
    description:
      "Solved 750+ algorithmic problems across CodeChef, LeetCode, and GeeksforGeeks, demonstrating strong proficiency in data structures and problem-solving.",
    icon: FiTrendingUp,
  },
  {
    title: "Research Publication",
    description:
      'Co-authored an IEEE conference paper titled "An Intelligent System for Predictive Maintenance and Automated Troubleshooting in Laboratory Environments" in the 2025 International Conference on Intelligent Systems and Pioneering Innovations in Robotics and Electric Mobility (INSPIRE).',
    icon: FiBook,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Achievements() {
  return (
    <section id="achievements" className="px-4 sm:px-6">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
            Achievements
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Key highlights
            <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-brand-500 bg-clip-text text-transparent">
              stand out
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="glass-panel group rounded-2xl px-6 py-7 sm:px-8"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/90 to-emerald-500/90 shadow-lg shadow-slate-950/60">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">
                    {achievement.title === "Research Publication" ? (
                      <a
                        href="https://ieeexplore.ieee.org/document/11300558/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-emerald-400 decoration-2 underline-offset-4 hover:text-emerald-300"
                      >
                        {achievement.title}
                      </a>
                    ) : (
                      achievement.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                    {achievement.description}
                  </p>
                  {achievement.title === "Algorithmic Proficiency" && (
                    <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-slate-200">
                      <a
                        href="https://leetcode.com/u/Shivani_Kamath/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1 transition hover:border-emerald-500/70 hover:text-emerald-300"
                      >
                        LeetCode
                      </a>
                      <a
                        href="https://www.codechef.com/users/shivani_kamath"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1 transition hover:border-emerald-500/70 hover:text-emerald-300"
                      >
                        CodeChef
                      </a>
                      <a
                        href="https://www.geeksforgeeks.org/profile/shivanikamath"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1 transition hover:border-emerald-500/70 hover:text-emerald-300"
                      >
                        GeeksforGeeks
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Achievements;
