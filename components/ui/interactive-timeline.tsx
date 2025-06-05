"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MagneticCard } from "@/components/ui/magnetic-card"

interface Achievement {
  year: string
  title: string
  description: string
  icon: string
}

interface InteractiveTimelineProps {
  achievements: Achievement[]
}

export function InteractiveTimeline({ achievements }: InteractiveTimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative max-w-4xl mx-auto"
    >
      {/* Timeline line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-600 to-pink-600"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <motion.div key={achievement.year} variants={itemVariants} className="relative flex items-center gap-8">
            {/* Timeline dot */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full shadow-lg"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl">{achievement.icon}</span>
            </motion.div>

            {/* Content card */}
            <div className="flex-1">
              <MagneticCard>
                <motion.div whileHover={{ scale: 1.02, x: 10 }} transition={{ duration: 0.2 }}>
                  <Card className="bg-gradient-to-br from-background to-muted/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {achievement.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </MagneticCard>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
