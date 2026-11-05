import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ExternalLink, FolderGit2, ShieldCheck } from 'lucide-react';
import { projects } from '../data/portfolioData';

const piiGuardian = projects.find((project) => project.id === 'pii-guardian');

const featuredProjects = [
  {
    id: 'agentshield',
    title: 'AgentShield',
    subtitle: 'Privacy-Preserving Healthcare Data Sharing Platform',
    status: 'In progress · Final year project',
    statusType: 'development',
    description:
      'Healthcare data enables research and coordinated care, but sharing records can expose sensitive patient information. AgentShield is an ongoing final-year project to explore privacy-preserving ways to make healthcare data sharing safer.',
    technologies: ['React', 'FastAPI', 'Microsoft Presidio', 'Ollama', 'k-anonymity', 'Differential privacy'],
    technologyLabel: 'Planned technologies',
    overview:
      'An in-progress final-year project exploring how healthcare information can be shared for legitimate use while limiting exposure of personally identifiable information (PII).',
    problem:
      'Healthcare records contain sensitive identifiers. Sharing them without privacy safeguards can expose patients, while excessive removal of information can reduce the data’s usefulness.',
    approach:
      'The planned workflow combines PII identification with privacy-aware processing. k-anonymity and differential privacy are planned to help reduce re-identification risk, while Ollama is intended for local AI-assisted processing.',
    plannedFeatures: [
      'PII identification',
      'Privacy-aware data processing',
      'Secure healthcare data sharing',
      'Local AI-assisted processing',
    ],
    plannedFeatureLabel: 'Planned features',
    implementationStatus:
      'In progress · Final year project. The listed technologies and features describe the project plan; no feature is represented here as implemented.',
  },
  {
    id: 'sentinelai',
    title: 'SentinelAI',
    subtitle: 'Smart Surveillance and Predictive Behavioral Threat Detection',
    status: 'Completed',
    statusType: 'completed',
    description:
      'A completed smart-surveillance project focused on video-based person detection, multi-object tracking and behavioural threat analysis.',
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'DeepSORT / ByteTrack', 'MediaPipe', 'FastAPI', 'Node.js', 'React', 'SQLite', 'Socket.IO'],
    technologyLabel: 'Documented project technologies',
    overview:
      'SentinelAI analyses surveillance video around person detection and tracking, with behavioural threat analysis as its application focus.',
    problem:
      'Finding relevant activity in continuous video feeds can be difficult. The project addresses this by structuring video analysis around detected people, their movement over time and potential zone or loitering events.',
    approach:
      'The documented architecture pairs Python, OpenCV and YOLOv8 for video and person-detection workflows with DeepSORT / ByteTrack for multi-object tracking. MediaPipe is also part of the recorded stack. FastAPI and Node.js services, a React interface, SQLite storage and Socket.IO are documented as application components.',
    features: [
      'Person detection and tracking',
      'Loitering analysis',
      'Restricted-zone violation analysis',
      'Movement path trails',
      'Predicted intrusion alerts',
      'Threat scoring and risk visualisation',
    ],
    featureLabel: 'Documented project capabilities',
    implementationStatus:
      'Completed project. Original project files are unavailable; the architecture and capabilities are described from the available project information without claiming unverified feature-level implementation.',
  },
];

const getProjectLinks = (project) => [
  project.githubUrl && { label: 'GitHub', href: project.githubUrl },
  project.liveDemoUrl && { label: 'Live demo', href: project.liveDemoUrl },
].filter(Boolean);

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const existingProject = piiGuardian;

  const cards = [
    ...featuredProjects,
    ...(existingProject
      ? [{
          id: existingProject.id,
          title: existingProject.title,
          subtitle: existingProject.subtitle,
          status: existingProject.status,
          statusType: existingProject.statusType,
          description: existingProject.description,
          technologies: existingProject.techStack,
          technologyLabel: 'Verified technology stack',
          overview:
            'A completed privacy-focused system that scans raw text and datasets to identify personally identifiable information (PII).',
          problem:
            'Unstructured text and datasets may contain identifiers that are easy to overlook and can be exposed during processing or sharing.',
          approach:
            'Python-based detection combines spaCy NLP entity recognition with regular expressions to find PII expressed as recognizable patterns. Detected identifiers are highlighted for review.',
          features: [
            'Scan raw text and datasets',
            'Recognize entities with spaCy NLP',
            'Detect pattern-based identifiers with Regex',
            'Highlight detected PII',
          ],
          featureLabel: 'Implemented capabilities',
          implementationStatus: existingProject.status,
          sourceProject: existingProject,
        }]
      : []),
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 dark:bg-slate-950 light:bg-slate-100 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 light:text-blue-700">
            <FolderGit2 aria-hidden="true" className="h-4 w-4" />
            Selected work
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-100 light:text-slate-950 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 light:text-slate-600">
            A selection of project work and ideas, with status and implementation details kept explicit.
          </p>
        </motion.header>

        <div className="grid gap-5 lg:grid-cols-2">
          {cards.map((project, index) => {
            const links = project.sourceProject ? getProjectLinks(project.sourceProject) : [];
            const isInProgress = project.statusType === 'development';
            const isCompleted = project.statusType === 'completed';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : (index % 2) * 0.06,
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 p-6 transition-colors hover:border-blue-400/30 hover:bg-slate-900/75 light:border-slate-200 light:bg-white/80 light:hover:border-blue-300 light:hover:bg-white sm:p-7"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.16em] text-slate-500">
                    PROJECT / {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium ${
                      isInProgress
                        ? 'border-blue-400/20 bg-blue-400/[0.07] text-blue-300 light:border-blue-600/20 light:bg-blue-50 light:text-blue-700'
                        : isCompleted
                          ? 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300 light:border-emerald-600/20 light:bg-emerald-50 light:text-emerald-700'
                          : 'border-white/10 bg-white/[0.03] text-slate-400 light:border-slate-200 light:bg-slate-50 light:text-slate-600'
                    }`}
                  >
                    {isInProgress && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-blue-300 light:text-slate-900 light:group-hover:text-blue-700 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-blue-300/90 light:text-blue-700">
                  {project.subtitle}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 light:text-slate-600">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                      {project.technologyLabel}
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-lg border border-white/[0.08] bg-slate-950/50 px-2.5 py-1.5 text-xs text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <details className="group/details border-t border-white/10 pt-4 light:border-slate-200">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-slate-300 outline-none transition-colors hover:text-blue-300 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-blue-400 light:text-slate-700 light:hover:text-blue-700 [&::-webkit-details-marker]:hidden">
                      <span>Expanded project details</span>
                      <ArrowDownRight aria-hidden="true" className="h-4 w-4 transition-transform group-open/details:rotate-90" />
                    </summary>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-400 light:text-slate-600">
                      <div>
                        <h4 className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                          Project overview
                        </h4>
                        <p>{project.overview}</p>
                      </div>
                      <div>
                        <h4 className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                          Problem addressed
                        </h4>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                          Technical approach
                        </h4>
                        <p>{project.approach}</p>
                      </div>
                      {(project.plannedFeatures ?? project.features)?.length > 0 && (
                        <div>
                          <h4 className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                            {project.plannedFeatureLabel ?? project.featureLabel}
                          </h4>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {(project.plannedFeatures ?? project.features).map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-xs light:border-slate-200"
                              >
                                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <h4 className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                          {project.technologyLabel}
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <li
                              key={technology}
                              className="rounded-lg border border-white/[0.08] px-2.5 py-1 text-xs light:border-slate-200"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                          Implementation status
                        </h4>
                        <p>{project.implementationStatus}</p>
                      </div>
                    </div>
                  </details>

                  {(links.length > 0 || project.id === 'agentshield') && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {links.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-blue-400/20 px-3 py-2 text-xs font-medium text-blue-300 transition-colors hover:border-blue-400/40 hover:bg-blue-400/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 light:text-blue-700"
                        >
                          {label}
                          <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                        </a>
                      ))}
                      {project.id === 'agentshield' && (
                        <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                          <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
                          Planned work
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
