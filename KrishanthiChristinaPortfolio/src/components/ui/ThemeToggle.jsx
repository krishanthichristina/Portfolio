import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ rotate: 180, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="p-2 rounded-full bg-gray-100 dark:bg-surface-darkCard text-gray-600 dark:text-primary-400 hover:bg-primary-400/10 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </motion.button>
  )
}
