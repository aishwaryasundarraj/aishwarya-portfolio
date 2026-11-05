import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, FileText, Mail, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = ({ onOpenResume }) => {
  const shouldReduceMotion = useReducedMotion();
  const links = [
    {
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/aishwarya-sundarraj',
      href: personalInfo.contact.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/aishwaryasundarraj',
      href: personalInfo.contact.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.07] bg-slate-950 py-24 dark:bg-slate-950 light:bg-slate-100 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          >
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
              <MessageSquare aria-hidden="true" className="h-4 w-4" />
              Get in touch
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
              Let’s connect.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 light:text-slate-600">
              I’m Aishwarya S. Recruiters and hiring teams are welcome to reach out about opportunities, or connect with me through my profiles.
            </p>
            <button
              type="button"
              onClick={onOpenResume}
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 light:focus-visible:ring-offset-slate-100"
            >
              <FileText aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Opens the resume preview, where you can print or save as PDF.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/45 px-5 light:divide-slate-200 light:border-slate-200 light:bg-white/75 sm:px-7"
            aria-label="Contact links"
          >
            {links.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 py-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.06] text-blue-300 transition-colors group-hover:border-blue-400/30 group-hover:bg-blue-400/10 light:border-blue-600/15 light:bg-blue-50 light:text-blue-700">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-slate-200 transition-colors group-hover:text-blue-300 light:text-slate-800 light:group-hover:text-blue-700 sm:break-normal">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-blue-300 light:group-hover:text-blue-700"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
