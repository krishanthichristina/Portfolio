import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDownload, HiArrowRight } from 'react-icons/hi'
import BrushStroke from '../ui/BrushStroke'

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-hero-gradient dark:bg-hero-gradient-dark flex items-center pt-16">
      <div className="section-padding w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-primary-500 dark:text-primary-400 font-medium text-lg mb-2"
            >
              The Heart of Creativity
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Krishanthi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-400/40 bg-primary-400/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              IT Undergraduate | Software Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md"
            >
              Krishanthi is a passionate and adaptable IT student with experience in Java, Spring Boot, React, and AI technologies. She transforms ideas into captivating software that resonates and inspires.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="btn-primary"
              >
                View Projects <HiArrowRight />
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="btn-outline"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/krishkrishanthi01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm font-medium"
              >
                <FaGithub size={22} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/krishanthi-christina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm font-medium"
              >
                <FaLinkedin size={22} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex-shrink-0 relative flex items-center justify-center"
          >
            {/* Decorative floating circles */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary-400/25 blur-sm"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-emerald-500/30"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 -right-12 w-10 h-10 rounded-full bg-primary-300/40"
            />

            {/* Brush stroke blob behind photo */}
            <BrushStroke className="absolute w-[110%] h-[110%] -z-0 opacity-90" />

            {/* Profile photo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.5 }}
              className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-surface-darkCard shadow-glow"
            >
              <img
                src="/photos/thi.jpg"
                alt="Krishanthi Christina"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary-400/50 flex items-start justify-center pt-1 cursor-pointer"
            onClick={() => handleScroll('about')}
          >
            <div className="w-1.5 h-3 rounded-full bg-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
