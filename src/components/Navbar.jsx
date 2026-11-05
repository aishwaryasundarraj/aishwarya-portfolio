import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Hackathon", href: "#hackathon" },
  { name: "Contact", href: "#contact" },
];

const getTargetScrollPosition = (element) => {
  const marginTop = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0;
  const documentTop = element.getBoundingClientRect().top + window.scrollY;
  const maximumScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  return Math.min(Math.max(documentTop - marginTop, 0), maximumScroll);
};

const scrollToSection = (element, behavior) => {
  const scroller = document.scrollingElement;
  if (!scroller) return;

  const marginTop = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0;
  const top = element.getBoundingClientRect().top + scroller.scrollTop - marginTop;
  const maximumScroll = scroller.scrollHeight - scroller.clientHeight;

  scroller.scrollTo({
    top: Math.min(Math.max(top, 0), maximumScroll),
    behavior,
  });
};

const Navbar = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pendingSectionRef = useRef(null);
  const navigationFrameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pendingSectionRef.current) {
        setActiveSection(pendingSectionRef.current);
        return;
      }

      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.href.substring(1));
          return element ? { id: element.id, top: element.offsetTop } : null;
        })
        .filter(Boolean)
        .sort((first, second) => first.top - second.top);
      const scrollPosition = window.scrollY + 120;
      let currentSection = sections[0]?.id ?? 'home';

      for (const section of sections) {
        if (section.top <= scrollPosition) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const syncAfterNavigation = () => {
      const pendingSection = pendingSectionRef.current;
      if (!pendingSection) return;

      const target = document.getElementById(pendingSection);
      if (target && Math.abs(window.scrollY - getTargetScrollPosition(target)) > 2) return;

      pendingSectionRef.current = null;
      handleScroll();
    };

    const interruptNavigation = () => {
      if (!pendingSectionRef.current) return;
      pendingSectionRef.current = null;
      handleScroll();
    };

    const handleKeyDown = (event) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
        interruptNavigation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('scrollend', syncAfterNavigation);
    document.addEventListener('scrollend', syncAfterNavigation);
    window.addEventListener('wheel', interruptNavigation, { passive: true });
    window.addEventListener('touchstart', interruptNavigation, { passive: true });
    window.addEventListener('pointerdown', interruptNavigation);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();
    return () => {
      if (navigationFrameRef.current !== null) {
        window.cancelAnimationFrame(navigationFrameRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scrollend', syncAfterNavigation);
      document.removeEventListener('scrollend', syncAfterNavigation);
      window.removeEventListener('wheel', interruptNavigation);
      window.removeEventListener('touchstart', interruptNavigation);
      window.removeEventListener('pointerdown', interruptNavigation);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSectionNavigation = (event, href) => {
    event.preventDefault();
    const sectionId = href.slice(1);
    const target = document.getElementById(sectionId);
    if (!target) return;

    const alreadyAtTarget = Math.abs(window.scrollY - getTargetScrollPosition(target)) <= 2;
    pendingSectionRef.current = alreadyAtTarget ? null : sectionId;
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    window.history.pushState(null, '', href);

    if (navigationFrameRef.current !== null) {
      window.cancelAnimationFrame(navigationFrameRef.current);
    }

    navigationFrameRef.current = window.requestAnimationFrame(() => {
      navigationFrameRef.current = null;
      scrollToSection(
        target,
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      );
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(event) => handleSectionNavigation(event, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
            {personalInfo.logoText}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
              SOFTWARE DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleSectionNavigation(event, item.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-100 light:text-slate-600 light:hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-cyan-500/15 dark:bg-cyan-500/20 light:bg-cyan-500/10 rounded-full border border-cyan-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-700/50 flex items-center gap-1.5 text-xs font-mono transition-colors"
            title="Search command palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="text-[10px] bg-slate-700/80 px-1.5 py-0.5 rounded text-slate-300">Ctrl K</span>
          </button>

          <ThemeToggle />

        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-b border-white/10 px-4 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) => handleSectionNavigation(event, item.href)}
                  aria-current={activeSection === item.href.substring(1) ? 'location' : undefined}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
