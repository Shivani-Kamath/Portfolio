
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const projects = [
  {
    title: "AI-Powered Lab Fault Management System",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
    year: "2025",
    description:
      "Full-stack MERN-based lab management platform with secure role-based authentication and dashboards for Students, Technicians, Admin, and Lab Administrator.",
    longDescription:
      "Developed a full-stack MERN-based lab management platform managing 100+ equipment assets. Integrated AI-driven modules: Random Forest fault prediction model (85%+ accuracy) and NLP-powered chatbot for automated troubleshooting and intelligent fault classification. Built RESTful APIs and analytics dashboard to visualize fault trends, equipment health, technician workload, and maintenance costs.",
    liveUrl: "#",
    githubUrl: "https://github.com/Shivani-Kamath/LabCare",
    video: "/videos/labcare1.mp4",
  },
  {
    title: "Finance Management Web App",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    year: "2025",
    description:
      "Full-stack MERN finance application designed to track expenses, manage budgets, and analyze spending patterns with real-time updates.",
    longDescription:
      "Developed a full-stack MERN finance management application with secure JWT-based authentication and RESTful APIs for expense tracking, category management, and financial data processing. Designed a responsive React-Tailwind UI featuring filters, charts, and dashboards to deliver intuitive financial insights and improved user experience.",
    liveUrl: "#",
    githubUrl: "https://github.com/Shivani-Kamath/Finance-Management-Web-App",
    video: "/videos/finance1.mp4",
  },
  {
    title: "Hospital Management System",
    tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "HTML", "CSS"],
    year: "2025",
    description:
      "Web-based hospital management system to handle patient records, doctor schedules, appointments, and billing operations.",
    longDescription:
      "Developed a Java-based hospital management system with secure role-based login for administrators and hospital staff using Java Servlets and session management. Built dynamic JSP pages integrated with MySQL via JDBC to manage patient records, doctor schedules, appointments, and billing workflows, automating core hospital operations and improving data accuracy.",
    liveUrl: "#",
    githubUrl: "https://github.com/Shivani-Kamath/Hospital_Management_System",
    video: "/videos/hospital1.mp4",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * index, duration: 0.6, ease: "easeOut" },
  }),
};

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [detailProject, setDetailProject] = useState(null);

  return (
    <section id="projects" className="px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
               Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
  Projects that combine{" "}
  <span className="bg-gradient-to-r from-blue-400 via-emerald-300 to-blue-500 bg-clip-text text-transparent">
    code
  </span>{" "}
  and{" "}
  <span className="bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
    intelligence
  </span>
</h2>
          </div>
          <p className="max-w-md text-sm text-slate-300/90">
            Each project is an end‑to‑end build — from architecture and APIs to
            UI polish, observability, and deployment.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 text-left shadow-soft transition hover:border-brand-500/80 hover:bg-slate-950 hover:shadow-xl hover:shadow-emerald-500/10"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(129,140,248,0.35),transparent_55%),radial-gradient(circle_at_90%_60%,rgba(45,212,191,0.2),transparent_55%)]" />
                <div className="relative flex h-full items-end justify-between p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/90">
                      {project.year}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-100/95">{project.title}</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-slate-200 shadow-md shadow-slate-950/75 transition group-hover:bg-brand-500 group-hover:text-white">
                    <FiExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                <p className="text-xs text-slate-300/90">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 text-[0.68rem] text-slate-200/90">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/80 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-1 flex items-center justify-between text-xs text-slate-300/90">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Click to see details
                  </span>
                  <span className="text-[0.7rem] text-slate-400">Full‑stack build</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 18 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-panel relative max-w-xl flex-1 px-6 py-6 sm:px-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/80 text-slate-200 shadow-md shadow-slate-950/70 transition hover:border-brand-500/80 hover:text-white"
                aria-label="Close project details"
              >
                <FiX className="h-4 w-4" />
              </button>

              <div className="flex flex-col gap-4 pr-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
                    Project Spotlight
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-50">{activeProject.title}</h3>
                </div>

                <p className="text-sm text-slate-200/90">{activeProject.longDescription}</p>

                <div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-200/90">
                  {activeProject.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(null);
                      setDetailProject(activeProject);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 px-4 py-2 font-medium text-white shadow-md shadow-brand-950/80 transition hover:shadow-lg hover:shadow-brand-950/80"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" />
                    View details
                  </button>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/80 bg-slate-950/80 px-4 py-2 font-medium text-slate-100 shadow-md shadow-slate-950/80 transition hover:border-brand-500/80 hover:text-white"
                  >
                    <FiGithub className="h-3.5 w-3.5" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full project details page */}
      {detailProject && (
        <section className="fixed inset-0 z-40 overflow-y-auto bg-slate-950/95 px-4 py-10 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
                  Project Details
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  {detailProject.title}
                </h2>
                {detailProject.year && (
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    {detailProject.year}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setDetailProject(null)}
                className="inline-flex items-center rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-slate-950/70 transition hover:border-brand-500/80 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="glass-panel grid gap-8 rounded-3xl px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
                  Overview
                </h3>
                <p className="text-sm leading-relaxed text-slate-200/90">
                  {detailProject.longDescription}
                </p>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Tech stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2 text-[0.7rem]">
                    {detailProject.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1 text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {detailProject.githubUrl && (
                    <a
                      href={detailProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/80 bg-slate-950/80 px-4 py-2 font-medium text-slate-100 shadow-md shadow-slate-950/80 transition hover:border-brand-500/80 hover:text-white"
                    >
                      <FiGithub className="h-3.5 w-3.5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4">
  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
    Video Demonstration
  </h3>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <video
      src={detailProject.video}
      controls
      className="w-full rounded-2xl object-cover aspect-video sm:col-span-2"
    />
  </div>
</div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default Projects;
