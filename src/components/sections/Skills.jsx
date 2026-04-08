import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import SkillCard from '../ui/SkillCard'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900/40">
      <div className="section-padding">
        <SectionTitle title="My Skills" subtitle="Technologies and tools I work with." />
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map(cat => (
            <motion.div key={cat.id} variants={item}>
              <SkillCard {...cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
