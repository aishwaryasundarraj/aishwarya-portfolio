import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Home, User, Cpu, FolderGit2, Briefcase, GraduationCap, Trophy, Mail, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

import { personalInfo } from '../data/portfolioData';

const paletteOptions = [
  { label: "Home", href: "#home", category: "Navigation", icon: Home },
  { label: "About", href: "#about", category: "Navigation", icon: User },
  { label: "Skills", href: "#skills", category: "Navigation", icon: Cpu },
  { label: "Projects", href: "#projects", category: "Navigation", icon: FolderGit2 },
  { label: "Experience", href: "#experience", category: "Navigation", icon: Briefcase },
  { label: "Education", href: "#education", category: "Navigation", icon: GraduationCap },
  { label: "Hackathon", href: "#hackathon", category: "Navigation", icon: Trophy },
  { label: "Contact", href: "#contact", category: "Navigation", icon: Mail },
  { label: "GitHub Profile", href: personalInfo.contact.github, category: "External", icon: Github, isExternal: true },
  { label: "LinkedIn Profile", href: personalInfo.contact.linkedin, category: "External", icon: Linkedin, isExternal: true },
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredOptions = paletteOptions.filter(opt =>
    opt.label.toLowerCase().includes(query.toLowerCase()) ||
    opt.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (option) => {
    if (option.isExternal) {
      window.open(option.href, '_blank');
    } else {
      const el = document.querySelector(option.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Palette Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl glass-panel bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search sections, projects, or links... (Press Esc to close)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-slate-100 text-sm placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, idx) => {
                const IconComponent = opt.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    className="w-full p-3 rounded-xl flex items-center justify-between hover:bg-slate-800/80 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-950 text-slate-400 group-hover:text-cyan-400 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {opt.label}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-950">
                        {opt.category}
                      </span>
                      {opt.isExternal && <ExternalLink className="w-3.5 h-3.5 text-slate-500" />}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-6 text-center text-xs text-slate-500 font-mono">
                No matching navigation items found.
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-950 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Use ↑ ↓ to navigate</span>
            <span>ESC to exit</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
