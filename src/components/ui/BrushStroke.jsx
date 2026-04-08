import { motion } from 'framer-motion'

export default function BrushStroke({ className = '' }) {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.03, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M420,300Q380,400,280,430Q180,460,110,370Q40,280,60,180Q80,80,190,60Q300,40,380,120Q460,200,420,300Z"
        fill="url(#blobGrad)"
      />
    </motion.svg>
  )
}
