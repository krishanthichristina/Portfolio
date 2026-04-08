import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const { title, description, tech, github, live, number } = project
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="card-base overflow-hidden flex flex-col hover:shadow-card-hover"
    >
      {/* Card header */}
      <div className="h-28 bg-gradient-to-br from-primary-400/20 to-emerald-500/10 dark:from-primary-400/10 dark:to-emerald-500/5 flex items-center justify-between px-6">
        <span className="text-5xl font-extrabold text-primary-400/20 dark:text-primary-400/15 select-none">{number}</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-400/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
          <div className="w-3 h-3 rounded-full bg-teal-300/40" />
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-surface-darkBorder text-gray-600 dark:text-gray-300">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-surface-darkBorder px-4 py-2 rounded-full hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <FaGithub size={14} /> GitHub
          </a>
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium btn-primary py-2 px-4"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-600 border border-dashed border-gray-200 dark:border-surface-darkBorder px-4 py-2 rounded-full cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
