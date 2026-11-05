import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Brain, Cloud, Code2, FileText, Layers } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo, projects } from '../data/portfolioData';

const focusAreas = [
  {
    icon: Code2,
    label: 'Software Development',
    detail: 'React · Python · FastAPI',
  },
  {
    icon: Brain,
    label: 'AI & Machine Learning',
    detail: 'Exploring AI-powered applications',
  },
  {
    icon: Cloud,
    label: 'Cloud Computing',
    detail: 'Exploring cloud technologies',
  },
];

const selectedProject = projects.find((project) => project.id === 'agentshield');

const createFadeUp = (shouldReduceMotion) => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1], delay },
  }),
});

const Hero = ({ onOpenResume }) => {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = createFadeUp(shouldReduceMotion);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-slate-100 dark:bg-[#090d16] dark:text-slate-100 light:bg-slate-50 light:text-slate-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.16),transparent_55%)] light:bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_50%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-70" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-32 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16 lg:px-10 lg:py-36">
        <div className="max-w-xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 text-xs font-medium tracking-wide text-blue-300 light:border-blue-600/15 light:bg-blue-600/[0.06] light:text-blue-700"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Computer Science Engineering student
          </motion.p>

          <motion.h1
            custom={0.08}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-6xl font-semibold tracking-[-0.055em] text-white light:text-slate-950 sm:text-7xl"
          >
            Aishwarya
          </motion.h1>

          <motion.h2
            custom={0.16}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-2xl text-2xl font-medium leading-[1.25] tracking-tight text-slate-200 light:text-slate-800 sm:text-3xl"
          >
            I build thoughtful software solutions for real-world problems.
          </motion.h2>

          <motion.p
            custom={0.24}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 light:text-slate-600"
          >
            Computer Science Engineering student exploring software development, AI-powered applications and cloud technologies.
          </motion.p>

          <motion.div
            custom={0.32}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 light:focus-visible:ring-offset-slate-50"
            >
              Explore Projects
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-blue-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 light:border-slate-300 light:bg-white light:text-slate-800 light:hover:border-blue-500/40 light:hover:text-slate-950 light:focus-visible:ring-offset-slate-50"
            >
              <FileText aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-6 text-sm text-slate-400 light:text-slate-600"
          >
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 light:hover:text-blue-700 light:focus-visible:ring-offset-slate-50"
              aria-label="GitHub Profile"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 light:hover:text-blue-700 light:focus-visible:ring-offset-slate-50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg justify-self-start rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_-30px_rgba(37,99,235,0.35)] backdrop-blur-md sm:p-7 light:border-slate-200 light:bg-white light:shadow-[0_20px_50px_-28px_rgba(15,23,42,0.2)] lg:justify-self-end"
          aria-label="Developer information"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400 light:text-slate-500">
              Areas of interest
            </p>
          </div>

          <ul className="mt-5 space-y-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <li key={area.label} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-300 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate-100 light:text-slate-900">
                      {area.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-400 light:text-slate-500">
                      {area.detail}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          {selectedProject && (
            <div className="mt-6 border-t border-white/10 pt-5 light:border-slate-200">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400 light:text-slate-500">
                <Layers aria-hidden="true" className="h-3.5 w-3.5 text-blue-400 light:text-blue-600" />
                Selected project
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-100 light:text-slate-900">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400 light:text-slate-600">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-2.5 py-1 text-[11px] text-blue-300 light:border-blue-600/15 light:bg-blue-600/[0.06] light:text-blue-700">
                  {selectedProject.status}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${selectedProject.title} technologies`}>
                {selectedProject.techStack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
