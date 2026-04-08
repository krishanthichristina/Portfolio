import SectionTitle from '../ui/SectionTitle'
import ExperienceCard from '../ui/ExperienceCard'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/40">
      <div className="section-padding">
        <SectionTitle title="Experience & Achievements" subtitle="My journey, roles, and milestones." />

        {/* Desktop timeline */}
        <div className="relative hidden md:block">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-emerald-500 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="grid grid-cols-2 gap-8 items-start">
                {/* Left card */}
                <div className={exp.side === 'left' ? 'pr-8' : ''}>
                  {exp.side === 'left' && <ExperienceCard exp={exp} direction="left" />}
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2" style={{ top: `${i * (100 / experiences.length)}%` }}>
                  <div className="w-4 h-4 rounded-full bg-primary-400 border-4 border-white dark:border-surface-dark shadow-glow" />
                </div>

                {/* Right card */}
                <div className={exp.side === 'right' ? 'pl-8' : ''}>
                  {exp.side === 'right' && <ExperienceCard exp={exp} direction="right" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} direction="left" />
          ))}
        </div>
      </div>
    </div>
  )
}
