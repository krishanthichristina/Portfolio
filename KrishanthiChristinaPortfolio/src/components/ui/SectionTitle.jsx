import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionTitle({ title, subtitle, light = false }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title.split(' ').map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="gradient-text"> {word}</span>
          ) : (
            <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
          )
        )}
      </h2>
      <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-400 to-emerald-500" />
      {subtitle && (
        <p className={`mt-4 text-base max-w-xl mx-auto ${light ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
