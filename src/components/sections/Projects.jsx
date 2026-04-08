import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="bg-white dark:bg-surface-dark">
      <div className="section-padding">
        <SectionTitle title="My Projects" subtitle="Things I've built along the way." />
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map(project => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
