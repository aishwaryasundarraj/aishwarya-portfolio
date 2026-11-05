import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

const ResumeCTA = ({ onOpenResume }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-10 sm:p-14 rounded-3xl border border-cyan-500/30 shadow-2xl bg-slate-900/90 relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Let's Build Something Meaningful.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Interested in software development, privacy-aware applications and creating practical technology solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm tracking-wide transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResumeCTA;
