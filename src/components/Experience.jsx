import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Briefcase, Building2, CalendarDays, Clock3, MapPin } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

const internshipDetails = [
  {
    duration: '15 days',
    responsibilities: [
      'Built and maintained responsive web pages using HTML, CSS, JavaScript and React.js.',
      'Collaborated with the development team to implement frontend features and resolve bugs.',
    ],
  },
  {
    duration: '1 month',
    responsibilities: [
      'Developed responsive frontend components using HTML, CSS, JavaScript and React.js.',
      'Implemented UI features based on project requirements.',
      'Assisted in debugging frontend issues and application testing.',
      'Collaborated with team members during application development.',
    ],
  },
];

const training = {
  title: 'Masterclass in Full Stack Development',
  organization: 'Novitech',
  duration: '30 days',
};

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 dark:bg-slate-950 light:bg-slate-100 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
            <Briefcase aria-hidden="true" className="h-4 w-4" />
            Professional experience
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 light:text-slate-600">
            Web development internships and additional professional training.
          </p>
        </motion.header>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.42fr)] lg:gap-16">
          <div className="relative ml-2 border-l border-blue-400/25 pl-7 sm:ml-3 sm:pl-9">
            <span
              aria-hidden="true"
              className="absolute -left-px top-0 h-20 w-px bg-gradient-to-b from-blue-400 to-transparent"
            />
            <div className="space-y-6">
              {experienceTimeline.map((experience, index) => {
                const details = internshipDetails[index];

                return (
                  <motion.article
                    key={`${experience.company}-${experience.year}`}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    className="group relative rounded-2xl border border-white/10 bg-slate-900/55 p-5 transition-colors hover:border-blue-400/30 hover:bg-slate-900/75 light:border-slate-200 light:bg-white/80 light:hover:border-blue-300 light:hover:bg-white sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-blue-400 bg-slate-950 transition-colors group-hover:bg-blue-400 light:bg-slate-100 light:group-hover:bg-blue-400 sm:-left-[46px]"
                    />

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-3 py-1 text-xs font-medium text-blue-300 light:border-blue-600/15 light:bg-blue-50 light:text-blue-700">
                          <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
                          {experience.year}
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-100 light:text-slate-900 sm:text-2xl">
                          {experience.role}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400 light:text-slate-600">
                          <span className="inline-flex items-center gap-1.5 font-medium text-slate-200 light:text-slate-800">
                            <Building2 aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
                            {experience.company}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-slate-500" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 light:border-slate-200 light:text-slate-600">
                        <Clock3 aria-hidden="true" className="h-3.5 w-3.5 text-blue-400 light:text-blue-600" />
                        {details.duration}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 light:border-slate-200">
                      {details.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-relaxed text-slate-400 light:text-slate-600"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 light:bg-blue-600"
                          />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.12 }}
            aria-label="Additional professional training"
            className="relative rounded-2xl border border-white/10 bg-slate-900/35 p-5 light:border-slate-200 light:bg-white/60 sm:p-6 lg:mt-8"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              <BookOpen aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
              Additional training
            </div>
            <div className="mt-5 border-t border-white/10 pt-5 light:border-slate-200">
              <h3 className="text-base font-semibold leading-snug text-slate-100 light:text-slate-900">
                {training.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                {training.organization}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500">
                <Clock3 aria-hidden="true" className="h-3.5 w-3.5 text-blue-400 light:text-blue-600" />
                {training.duration}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
