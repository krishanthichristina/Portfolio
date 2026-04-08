import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import CertificateCard from '../ui/CertificateCard'
import CertificateModal from '../ui/CertificateModal'
import { certificates } from '../../data/certificates'

const allTags = ['All', ...new Set(certificates.map(c => c.tag))]

export default function Certifications() {
  const [activeTag, setActiveTag] = useState('All')
  const [activeCert, setActiveCert] = useState(null)
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered = activeTag === 'All' ? certificates : certificates.filter(c => c.tag === activeTag)

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900/40">
      <div className="section-padding">
        <SectionTitle title="My Certifications" subtitle="Courses and achievements I've earned." />

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {allTags.map(tag => (
            <motion.button
              key={tag}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-primary-400 text-white shadow-card'
                  : 'bg-white dark:bg-surface-darkCard text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-surface-darkBorder hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          key={activeTag}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map(cert => (
            <motion.div key={cert.id} variants={item}>
              <CertificateCard cert={cert} onClick={setActiveCert} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCert && (
          <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
