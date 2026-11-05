import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ShieldCheck, Mail, Phone, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

import { personalInfo, quickFacts, experienceTimeline, educationTimeline, hackathonData, skillCategories } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel bg-slate-900 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Action Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIAL RESUME PREVIEW</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Body */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col gap-6 text-slate-200">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
                <p className="text-cyan-400 font-mono text-xs mt-1 font-semibold">{personalInfo.headline}</p>
                <p className="text-slate-400 text-xs mt-1">{personalInfo.supportingLine}</p>
              </div>

              <div className="flex flex-col gap-1 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.contact.email}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.contact.phone}
                </span>
                <span className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.contact.github}
                </span>
                <span className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  {personalInfo.contact.linkedin}
                </span>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                Career Objective
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/60 p-3 rounded-xl border border-white/5">
                "{personalInfo.objective}"
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>
              <div className="flex flex-col gap-3">
                {educationTimeline.map((edu, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between items-start text-xs">
                    <div>
                      <div className="font-bold text-slate-100">{edu.degree}</div>
                      <div className="text-slate-400">{edu.institution}</div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="text-cyan-400 font-semibold">{edu.year}</div>
                      <div className="text-slate-400">{edu.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </h2>
              <div className="flex flex-col gap-4">
                {experienceTimeline.map((exp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-bold text-slate-100">{exp.role}</span> — <span className="text-cyan-300 font-mono">{exp.company}</span> ({exp.location})
                      </div>
                      <span className="font-mono text-cyan-400 font-semibold">{exp.year}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathon */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                Hackathon Experience
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs">
                <div className="font-bold text-slate-100">{hackathonData.badge} — {hackathonData.role}</div>
                <div className="text-cyan-300 font-mono mt-0.5">Project: {hackathonData.projectTitle}</div>
                <p className="text-slate-300 mt-1">{hackathonData.description}</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <Code className="w-4 h-4" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                    <div className="font-semibold text-slate-200 mb-1">{cat.title}:</div>
                    <div className="text-slate-400">
                      {cat.skills.map(s => `${s.name} (${s.level})`).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 mx-auto shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
