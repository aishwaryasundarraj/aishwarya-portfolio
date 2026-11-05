import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';
import { quickFacts } from '../data/portfolioData';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (offset = 16, delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : offset },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: shouldReduceMotion ? 0 : 0.45, delay },
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/[0.07] bg-slate-950/40 py-24 dark:bg-slate-950/40 light:bg-slate-50 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div {...reveal(12)} className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
            <span aria-hidden="true" className="h-px w-8 bg-blue-400 light:bg-blue-600" />
            A little context
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
            About me
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] lg:gap-16">
          <motion.div
            {...reveal(18, 0.05)}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 lg:p-9 light:border-slate-200 light:bg-white/70"
          >
            <p className="text-xl font-medium leading-relaxed tracking-tight text-slate-200 light:text-slate-800 sm:text-2xl">
              I’m Aishwarya, a Computer Science Engineering student interested in building practical software solutions. I enjoy exploring full-stack development, AI-powered applications, privacy-focused technologies and cloud computing. I like understanding how systems work and turning ideas into useful applications.
            </p>
            <div className="mt-8 border-t border-white/10 pt-6 light:border-slate-200">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-400 light:text-blue-700">
                Career objective
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 light:text-slate-600 sm:text-base">
                Seeking opportunities to apply my programming, problem-solving and technical skills to real-world projects while continuously learning and contributing to meaningful software solutions.
              </p>
            </div>
          </motion.div>

          <motion.aside
            {...reveal(18, 0.12)}
            aria-label="Education"
            className="relative mt-2 border-l border-white/10 pl-6 light:border-slate-200 sm:pl-8 lg:mt-8"
          >
            <span aria-hidden="true" className="absolute -left-px top-0 h-12 w-px bg-blue-400 light:bg-blue-600" />
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              <GraduationCap aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
              Currently studying
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-100 light:text-slate-900">
              {quickFacts.education}
            </h3>
            <div className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-slate-400 light:text-slate-600">
              <Building2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <span>{quickFacts.college}</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 light:border-slate-200">
              <div>
                <span className="text-xs uppercase tracking-[0.14em] text-slate-500">Expected graduation</span>
                <p className="mt-1 text-sm font-medium text-slate-200 light:text-slate-800">
                  {quickFacts.expectedGraduation}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.14em] text-slate-500">CGPA</span>
                <p className="mt-1 text-sm font-medium text-slate-200 light:text-slate-800">
                  {quickFacts.cgpa} / 10
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
