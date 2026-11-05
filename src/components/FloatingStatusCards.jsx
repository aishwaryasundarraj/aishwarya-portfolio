import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code, Sparkles } from 'lucide-react';

const icons = {
  ShieldCheck,
  Code,
  Sparkles,
};

const FloatingStatusCards = () => {
  const cards = [
    {
      title: "Privacy",
      subtitle: "Building privacy-preserving applications",
      icon: "ShieldCheck",
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
      delay: 0,
      yOffset: [-6, 6, -6],
    },
    {
      title: "Development",
      subtitle: "React • FastAPI • Python",
      icon: "Code",
      color: "from-blue-500/20 to-purple-500/10 border-blue-500/30 text-blue-400",
      delay: 1.5,
      yOffset: [6, -6, 6],
    },
    {
      title: "Focus",
      subtitle: "Software Development + UI/UX",
      icon: "Sparkles",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400",
      delay: 0.8,
      yOffset: [-4, 8, -4],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-8 px-4">
      {cards.map((card, index) => {
        const Icon = icons[card.icon];
        return (
          <motion.div
            key={index}
            animate={{ y: card.yOffset }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: card.delay,
            }}
            className={`p-4 rounded-2xl glass-panel bg-gradient-to-br ${card.color} border shadow-lg backdrop-blur-md flex items-start gap-3 hover:scale-105 transition-transform duration-300`}
          >
            <div className={`p-2.5 rounded-xl bg-slate-900/60 border border-white/10 ${card.color.split(' ')[2]}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {card.title}
              </div>
              <div className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-800 mt-0.5">
                {card.subtitle}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingStatusCards;
