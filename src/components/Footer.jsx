import React from 'react';
import { Mail, Heart, Shield } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="flex items-center gap-2 group mb-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              {personalInfo.logoText}
            </div>
            <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
          </a>
          <p className="text-xs text-slate-400 max-w-sm">
            Building practical software with privacy, security and user experience in mind.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="flex items-center gap-3 mb-2">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            © 2026 Aishwarya S. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
