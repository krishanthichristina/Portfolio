import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdEmail, MdPhone, MdSend } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

const contactInfo = [
  { icon: MdEmail, label: 'Email', value: 'krishkrishanthi01@gmail.com', href: 'mailto:krishkrishanthi01@gmail.com' },
  { icon: MdPhone, label: 'Phone', value: '+94 71 460 9907', href: 'tel:+94714609907' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/krishkrishanthi01', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/krishanthi-christina', label: 'LinkedIn' },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // EmailJS integration — replace with your IDs
    // import emailjs from '@emailjs/browser'
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    //   .then(() => setStatus('success'))
    //   .catch(() => setStatus('error'))

    // Simulate for now
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="bg-white dark:bg-surface-dark">
      <div className="section-padding">
        <SectionTitle title="Get In Touch" subtitle="Have a project or just want to say hi? My inbox is open." />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Left: info */}
          <motion.div variants={item} className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Let's work together</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I'm currently open to new opportunities, internships, and collaborations. Whether you have a question, a project idea, or just want to connect — feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-surface-darkCard border border-gray-100 dark:border-surface-darkBorder hover:border-primary-400/50 hover:shadow-card transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-500 dark:text-primary-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-gray-50 dark:bg-surface-darkCard border border-gray-100 dark:border-surface-darkBorder hover:border-primary-400/50 hover:text-primary-500 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400 transition-all"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={item}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-surface-darkBorder bg-gray-50 dark:bg-surface-darkCard text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/30 transition-colors placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-surface-darkBorder bg-gray-50 dark:bg-surface-darkCard text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/30 transition-colors placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-surface-darkBorder bg-gray-50 dark:bg-surface-darkCard text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/30 transition-colors placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-emerald-600 dark:text-emerald-400 text-center font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 text-center"
                >
                  Something went wrong. Please try again or email directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
