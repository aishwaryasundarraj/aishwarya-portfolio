import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, CalendarDays, GraduationCap, MapPin } from 'lucide-react';

const currentStudy = {
  degree: 'B.E. Computer Science and Engineering',
  institution: 'Er. Perumal Manimekalai College of Engineering',
  location: 'Hosur, Tamil Nadu',
  graduation: '2027',
  cgpa: '8.52 / 10',
  status: 'Currently pursuing',
};

const previousEducation = [
  {
    degree: 'Higher Secondary Education',
    institution: 'Parimalam Matric Hr. Sec. School, Dinnur',
    year: '2023',
    result: '75%',
  },
  {
    degree: 'SSLC',
    institution: 'Parimalam Matric Hr. Sec. School, Dinnur',
    year: '2021',
    result: 'All Pass',
  },
];

const Education = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (offset = 14, delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : offset },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: shouldReduceMotion ? 0 : 0.4, delay },
  });

  return (
    <section
      id="education"
      className="relative overflow-hidden border-y border-white/[0.07] bg-slate-950/40 py-24 dark:bg-slate-950/40 light:bg-slate-50 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.header {...reveal(10)} className="mb-12 max-w-2xl sm:mb-14">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
            <GraduationCap aria-hidden="true" className="h-4 w-4" />
            Academic background
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
            Education
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 light:text-slate-600">
            My academic path in Computer Science and Engineering.
          </p>
        </motion.header>

        <div className="relative ml-2 border-l border-blue-400/25 pl-7 sm:ml-3 sm:pl-9">
          <span
            aria-hidden="true"
            className="absolute -left-px top-0 h-20 w-px bg-gradient-to-b from-blue-400 to-transparent"
          />

          <motion.article
            {...reveal(14, 0.04)}
            className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900/65 p-6 transition-colors hover:border-blue-400/35 hover:bg-slate-900/80 light:border-blue-200 light:bg-white/90 light:hover:border-blue-300 sm:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[34px] top-8 h-3 w-3 rounded-full border-2 border-blue-400 bg-slate-950 group-hover:bg-blue-400 light:bg-slate-100 sm:-left-[46px]"
            />
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1 text-xs font-medium text-blue-300 light:border-blue-600/15 light:bg-blue-50 light:text-blue-700">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {currentStudy.status}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-100 light:text-slate-900 sm:text-2xl">
                  {currentStudy.degree}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-300 light:text-slate-700">
                  {currentStudy.institution}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-400 light:text-slate-600">
                  <MapPin aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
                  {currentStudy.location}
                </p>
              </div>

              <div className="grid shrink-0 grid-cols-2 gap-3 sm:min-w-48 sm:grid-cols-1">
                <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.05] px-4 py-3 light:border-blue-200 light:bg-blue-50">
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    CGPA
                  </span>
                  <p className="mt-1 text-lg font-semibold tracking-tight text-blue-300 light:text-blue-700">
                    {currentStudy.cgpa}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 light:border-slate-200 light:bg-slate-50">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                    <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
                    Expected
                  </span>
                  <p className="mt-1 text-lg font-semibold tracking-tight text-slate-200 light:text-slate-800">
                    {currentStudy.graduation}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {previousEducation.map((education, index) => (
              <motion.article
                key={education.degree}
                {...reveal(12, shouldReduceMotion ? 0 : 0.08 + index * 0.06)}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-blue-400/25 hover:bg-slate-900/60 light:border-slate-200 light:bg-white/75 light:hover:border-blue-200 light:hover:bg-white sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-slate-600 bg-slate-950 transition-colors group-hover:border-blue-400 light:border-slate-300 light:bg-slate-100 light:group-hover:border-blue-500 sm:-left-[46px]"
                />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-100 light:text-slate-900">
                      {education.degree}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 light:text-slate-600">
                      {education.institution}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-400 light:border-slate-200 light:text-slate-600">
                    {education.year}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-slate-300 light:border-slate-200 light:text-slate-700">
                  <BookOpen aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
                  {education.result}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
