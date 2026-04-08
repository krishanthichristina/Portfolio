import { motion } from 'framer-motion'
import { FaCode, FaGlobe, FaServer, FaTools } from 'react-icons/fa'

const iconMap = {
  FaCode: FaCode,
  FaGlobe: FaGlobe,
  FaServer: FaServer,
  FaTools: FaTools,
}

export default function SkillCard({ category, icon, skills }) {
  const Icon = iconMap[icon] || FaCode
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="card-base p-6 hover:shadow-card-hover"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary-400/15 flex items-center justify-center text-primary-500 dark:text-primary-400">
          <Icon size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 dark:text-white text-sm">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium bg-primary-400/10 text-primary-600 dark:text-primary-300 border border-primary-400/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
