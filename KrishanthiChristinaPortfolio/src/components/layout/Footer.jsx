import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const socials = [
  { icon: FaGithub, href: 'https://github.com/krishkrishanthi01', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/krishanthi-christina', label: 'LinkedIn' },
  { icon: MdEmail, href: 'mailto:krishkrishanthi01@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-4">
        <span className="text-2xl font-bold gradient-text">Krishanthi Christina</span>
        <p className="text-sm text-gray-500">IT Undergraduate | Software Developer</p>
        <div className="flex gap-5 mt-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full bg-gray-800 hover:bg-primary-400/20 hover:text-primary-400 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-600 text-center">
          © {new Date().getFullYear()} Krishanthi Christina. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
