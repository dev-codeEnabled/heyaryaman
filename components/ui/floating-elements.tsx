"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Zap, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

const icons = [Code, Database, Globe, Smartphone, Zap, Cpu]

export function FloatingElements() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [isClient, setIsClient] = useState(false)
  const [positions, setPositions] = useState<Array<{x: number, y: number, duration: number}>>([])

  useEffect(() => {
    setIsClient(true)
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    
    // Generate consistent random positions after client-side hydration
    setPositions(icons.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 20 + Math.random() * 10,
    })))
    
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Don't render anything on the server to avoid hydration mismatch
  if (!isClient || positions.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          initial={{
            x: positions[index].x,
            y: positions[index].y,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            rotate: 360,
          }}
          transition={{
            duration: positions[index].duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  )
}