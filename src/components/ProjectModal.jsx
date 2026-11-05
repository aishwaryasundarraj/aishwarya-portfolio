import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, ExternalLink, ShieldCheck, AlertCircle, CheckCircle2, Code } from 'lucide-react';
import { Github } from './SocialIcons';


const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const isInDevelopment = project.statusType === 'development';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel bg-slate-900 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
              {project.category}
            </span>
            <span
              className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                isInDevelopment
                  ? 'bg-amber-950/60 text-amber-400 border-amber-500/40 animate-pulse'
                  : 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
              }`}
            >
              {isInDevelopment ? <AlertCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
              Status: {project.status}
            </span>
          </div>

          <h3 className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-400 mt-1">{project.subtitle}</p>

          <div className="w-full h-[1px] bg-white/10 my-6" />

          {/* Modal Grid Body */}
          <div className="flex flex-col gap-6">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Overview & Summary
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-red-500/20">
                <div className="text-xs font-mono text-red-400 font-semibold mb-1">
                  Problem Addressed
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/20">
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                  Technical Solution
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Flow */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-white/10">
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Pipeline Architecture Flow
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {project.architectureSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-cyan-500/30">
                      {step}
                    </span>
                    {idx < project.architectureSteps.length - 1 && (
                      <span className="text-cyan-400 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/50 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <span className="px-4 py-2.5 rounded-xl bg-slate-950 text-slate-500 text-xs font-mono border border-slate-800 cursor-not-allowed">
              {project.githubText}
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
