import { motion } from 'framer-motion'

const tagColors = {
  'Programming': 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  'Tools': 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  'AI / Cloud': 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  'Full Stack': 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  'Achievement': 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  'Leadership': 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  'Certification': 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
}

export default function CertificateCard({ cert, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={() => onClick(cert)}
      className="card-base overflow-hidden cursor-pointer hover:shadow-card-hover group"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-surface-darkBorder">
        <img
          src={cert.file}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-white text-xs font-medium bg-primary-500/80 px-3 py-1 rounded-full">
            Click to expand
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug mb-1 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{cert.issuer}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">{cert.date}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[cert.tag] || 'bg-gray-100 text-gray-600'}`}>
            {cert.tag}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
