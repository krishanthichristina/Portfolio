import { motion } from 'framer-motion'
import { FaUsers, FaGlobe, FaTrophy, FaStar } from 'react-icons/fa'

const iconMap = {
  FaUsers,
  FaGlobe,
  FaTrophy,
  FaStar,
}

const typeBadge = {
  Leadership: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  Membership: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  Achievement: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
}

export default function ExperienceCard({ exp, direction }) {
  const Icon = iconMap[exp.icon] || FaStar

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="card-base p-6 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-400/15 flex items-center justify-center text-primary-500 dark:text-primary-400">
          <Icon size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{exp.role}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeBadge[exp.type]}`}>
              {exp.type}
            </span>
          </div>
          <p className="text-primary-500 dark:text-primary-400 text-xs font-medium mb-1">{exp.org}</p>
          <p className="text-gray-400 text-xs mb-3">{exp.period}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
