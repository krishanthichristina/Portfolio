import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'

const strengths = ['Problem Solver', 'Fast Learner', 'Team Player', 'Adaptable', 'Creative']

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '9+', label: 'Certifications' },
  { value: '2+', label: 'Years Learning' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="bg-white dark:bg-surface-dark">
      <div className="section-padding">
        <SectionTitle title="About Me" subtitle="Get to know who I am and what drives me." />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Photo */}
          <motion.div variants={item} className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-emerald-500 rotate-6 opacity-30" />
              <img
                src="/photos/thi.jpg"
                alt="Krishanthi Christina"
                className="relative z-10 w-full h-full object-cover object-top rounded-2xl shadow-card-hover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.h3 variants={item} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Krishanthi Christina
            </motion.h3>
            <motion.p variants={item} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm a passionate IT undergraduate with a strong foundation in software development, specializing in Java, Spring Boot, React, and AI technologies. I thrive on turning complex problems into elegant, functional solutions.
            </motion.p>
            <motion.p variants={item} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              As a team player and fast learner, I actively contribute to open-source projects and hackathons. My involvement in AIESEC has sharpened my leadership and cross-cultural communication skills, making me a versatile developer who brings both technical depth and human insight to every project.
            </motion.p>

            {/* Strength badges */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
              {strengths.map(s => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-400/20"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-surface-darkCard border border-gray-100 dark:border-surface-darkBorder">
                  <p className="text-2xl font-extrabold gradient-text">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
