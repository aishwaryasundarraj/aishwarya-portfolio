import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BatteryCharging, Leaf, Trophy } from 'lucide-react';
import { hackathonData } from '../data/portfolioData';

const Hackathon = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hackathon"
      className="relative overflow-hidden border-y border-white/[0.07] bg-slate-950/40 py-24 dark:bg-slate-950/40 light:bg-slate-50 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
            <Trophy aria-hidden="true" className="h-4 w-4" />
            Hackathon experience
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
            Hackathons &amp; achievements
          </h2>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.05 }}
          className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-colors hover:border-blue-400/25 light:border-slate-200 light:bg-white/75 sm:p-8"
        >
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 light:border-slate-200 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.07] text-blue-300 light:border-blue-600/15 light:bg-blue-50 light:text-blue-700">
                <Trophy aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-300 light:text-blue-700">
                  {hackathonData.title}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-100 light:text-slate-900 sm:text-2xl">
                  Team Leader
                </h3>
              </div>
            </div>
            <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 light:border-slate-200 light:text-slate-600">
              EV sustainability
            </span>
          </div>

          <div className="grid gap-8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.65fr)] md:items-center md:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <BatteryCharging aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-400 light:text-blue-600" />
                <h4 className="text-lg font-semibold text-slate-100 light:text-slate-900 sm:text-xl">
                  {hackathonData.projectTitle}
                  <span className="font-normal text-slate-400 light:text-slate-600">
                    {' '}— EV Battery Second-Life Certification
                  </span>
                </h4>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 light:text-slate-600 sm:text-base">
                As team leader, I helped build a website that displays battery status as SAFE or UNSAFE to support second-life certification. The project focuses on smart, sustainable reuse of EV batteries.
              </p>
            </div>

            <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.04] p-5 light:border-blue-200 light:bg-blue-50/70">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                <Leaf aria-hidden="true" className="h-4 w-4 text-blue-400 light:text-blue-600" />
                Project focus
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-700">
                Supporting responsible EV battery reuse through clear SAFE / UNSAFE status presentation.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Hackathon;
