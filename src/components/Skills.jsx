import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BrainCircuit,
  Braces,
  Cloud,
  Database,
  PanelsTopLeft,
  Server,
  Wrench,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Braces,
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Frontend Development',
    icon: PanelsTopLeft,
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['FastAPI'],
  },
  {
    title: 'Database Management',
    icon: Database,
    skills: ['MySQL'],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    skills: ['Machine Learning', 'Microsoft Presidio', 'spaCy', 'Regex'],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Cloud Computing',
    icon: Cloud,
    description: 'Cloud computing — currently learning',
    skills: [],
  },
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/[0.07] bg-slate-950/60 py-24 dark:bg-slate-950/60 light:bg-slate-50 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
            <span aria-hidden="true" className="h-px w-8 bg-blue-400 light:bg-blue-600" />
            Technical toolkit
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
            Skills &amp; technologies
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 light:text-slate-600">
            Technologies from my studies, project work and areas I’m currently exploring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : (index % 3) * 0.05,
              }}
              className="group rounded-2xl border border-white/10 bg-slate-900/45 p-5 transition-colors hover:border-blue-400/30 hover:bg-slate-900/70 light:border-slate-200 light:bg-white/75 light:hover:border-blue-300 light:hover:bg-white sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07] text-blue-300 transition-colors group-hover:border-blue-400/30 group-hover:bg-blue-400/10 light:border-blue-600/15 light:bg-blue-600/[0.05] light:text-blue-700">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold text-slate-100 light:text-slate-900">
                  {title}
                </h3>
              </div>

              {skills.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} skills`}>
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-slate-950/55 px-3 py-1.5 text-sm text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 rounded-lg border border-blue-400/15 bg-blue-400/[0.05] px-3 py-2 text-sm text-slate-400 light:border-blue-200 light:bg-blue-50 light:text-slate-600">
                  {description}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
