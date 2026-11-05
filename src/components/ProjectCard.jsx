import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, ExternalLink, Code2, Layers, AlertCircle, CheckCircle2, Lock } from 'lucide-react';
import { Github } from './SocialIcons';


const ProjectCard = ({ project, onSelectProject }) => {
  const isInDevelopment = project.statusType === 'development';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative flex flex-col justify-between group overflow-hidden bg-slate-900/80"
    >
      {/* Glow highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
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

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-cyan-300/90 font-mono mt-1">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-4 leading-relaxed">
          {project.description}
        </p>

        {/* Interactive Architecture Visualization Box */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-white/10 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Layers className="w-4 h-4" />
              Architecture Flow Diagram
            </span>
            <span className="text-[10px] text-slate-500">Interactive Pipeline</span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 text-[11px] font-mono overflow-x-auto py-2">
            {project.architectureSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-slate-200 text-center whitespace-nowrap shadow-sm hover:border-cyan-400 transition-colors">
                  {step}
                </div>
                {idx < project.architectureSteps.length - 1 && (
                  <span className="text-cyan-400 shrink-0 font-bold">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Sample PII Scan Box for PII Guardian */}
          {project.sampleScan && (
            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>PII Scanner Live Protection Preview:</span>
                <span className="text-emerald-400 text-[10px]">Sensitive PII Shielded</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {project.sampleScan.map((item, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-900/90 border border-white/5 flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono">{item.label}</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Key Features List */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Key Features:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="px-3.5 py-2 rounded-xl bg-slate-950 text-slate-500 text-xs font-mono border border-slate-800 flex items-center gap-1.5 cursor-not-allowed">
              <Github className="w-3.5 h-3.5" />
              <span>{project.githubText}</span>
            </span>
          )}

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="px-3.5 py-2 rounded-xl bg-slate-950 text-slate-500 text-xs font-mono border border-slate-800 flex items-center gap-1.5 cursor-not-allowed">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{project.liveDemoText}</span>
            </span>
          )}
        </div>

        <button
          onClick={() => onSelectProject(project)}
          className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-medium flex items-center gap-1.5 transition-colors group-hover:border-cyan-400"
        >
          <span>Deep Dive Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
