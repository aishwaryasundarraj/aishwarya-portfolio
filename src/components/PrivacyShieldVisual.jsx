import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Lock, Eye, Activity, FileSpreadsheet } from 'lucide-react';

const PrivacyShieldVisual = () => {
  const nodes = [
    { label: "Patient Data", icon: FileSpreadsheet, angle: 0, color: "text-blue-400" },
    { label: "Privacy", icon: Lock, angle: 72, color: "text-cyan-400" },
    { label: "Security", icon: ShieldCheck, angle: 144, color: "text-emerald-400" },
    { label: "Anonymization", icon: Eye, angle: 216, color: "text-purple-400" },
    { label: "Analytics", icon: Activity, angle: 288, color: "text-indigo-400" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto flex items-center justify-center p-4">
      {/* Outer subtle radar ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" style={{ animationDuration: '35s' }} />
      <div className="absolute inset-6 rounded-full border border-blue-500/10 pointer-events-none" />

      {/* SVG Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const radius = 150;
          const x2 = 200 + radius * Math.cos(rad);
          const y2 = 200 + radius * Math.sin(rad);

          return (
            <g key={i}>
              <line
                x1="200"
                y1="200"
                x2={x2}
                y2={y2}
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx={x2} cy={y2} r="4" fill="#06b6d4" className="animate-ping" style={{ animationDuration: `${3 + i}s` }} />
            </g>
          );
        })}
      </svg>

      {/* Central Digital Shield */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-44 h-44 rounded-2xl glass-panel border border-cyan-500/40 flex flex-col items-center justify-center p-4 shadow-[0_0_50px_rgba(6,182,212,0.25)] glow-shield"
      >
        <div className="w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center mb-2 shadow-inner">
          <ShieldCheck className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
        <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
          PII PROTECTED
        </span>
        <span className="text-[10px] text-slate-400 mt-1 font-mono">
          Differential Privacy • Redacted
        </span>
      </motion.div>

      {/* Satellite Nodes around shield */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const radius = 150; // Distance from center
        const IconComponent = node.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            style={{
              left: `calc(50% + ${radius * Math.cos(rad)}px - 56px)`,
              top: `calc(50% + ${radius * Math.sin(rad)}px - 24px)`,
            }}
            className="absolute z-10 flex items-center gap-2 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 shadow-lg hover:border-cyan-500/50 transition-all duration-300 group cursor-default"
          >
            <div className={`p-1.5 rounded-lg bg-slate-800/80 ${node.color} group-hover:scale-110 transition-transform`}>
              <IconComponent className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 whitespace-nowrap">
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PrivacyShieldVisual;
