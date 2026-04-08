import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        onClick={e => e.stopPropagation()}
        className="bg-white dark:bg-surface-darkCard rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-surface-darkBorder">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug">{cert.title}</h3>
            <p className="text-primary-500 dark:text-primary-400 text-xs mt-0.5">{cert.issuer} · {cert.date}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-darkBorder text-gray-500 dark:text-gray-400 transition-colors"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Image */}
        <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
          <img
            src={cert.file}
            alt={cert.title}
            className="max-h-[70vh] max-w-full object-contain rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
