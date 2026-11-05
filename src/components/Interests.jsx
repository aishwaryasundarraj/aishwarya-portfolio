import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Compass, ArrowUpRight } from 'lucide-react';
import { areasOfInterest } from '../data/portfolioData';

const iconMap = {
  Terminal,
  Layout,
};

const Interests = () => {
  return (
    <section id="interests" className="py-24 relative overflow-hidden bg-slate-950 dark:bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Compass className="w-4 h-4" />
            <span>Passions & Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
            What I'm Interested In
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Two Major Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areasOfInterest.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Terminal;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all shadow-2xl bg-gradient-to-br from-slate-900 to-slate-950 relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="p-2 rounded-xl bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-700 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Active Skill Pursuit</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Interests;
