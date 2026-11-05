import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, MessageSquare, Sparkles } from 'lucide-react';
import { softSkills } from '../data/portfolioData';

const iconMap = {
  RefreshCw,
  Zap,
  MessageSquare,
};

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-20 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span>Personal Attributes</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
            Beyond Code
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {softSkills.map((skill, idx) => {
            const IconComp = iconMap[skill.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all bg-slate-900/70"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
