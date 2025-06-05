"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ProgressRingProps {
  percentage: number
  color: string
  delay?: number
  size?: number
}

export function ProgressRing({ percentage, color, delay = 0, size = 120 }: ProgressRingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const radius = (size - 8) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div ref={ref} className="flex items-center justify-center">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-muted/20"
          />

          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{
              duration: 1.5,
              delay,
              ease: "easeInOut",
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={`text-${color.split("-")[1]}-500`} stopColor="currentColor" />
              <stop offset="100%" className={`text-${color.split("-")[3]}-500`} stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {percentage}%
          </span>
        </motion.div>
      </div>
    </div>
  )
}
