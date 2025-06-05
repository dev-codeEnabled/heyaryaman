"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Database, Layout, Server, Terminal, Figma } from "lucide-react"
import { MagneticCard } from "@/components/ui/magnetic-card"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express", "REST API", "Authentication", "Authorization"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    category: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "Mongoose", "SQL", "PostgreSQL", "Redis", "Firebase"],
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Netlify"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    category: "Tools",
    icon: <Figma className="h-5 w-5" />,
    skills: ["VS Code", "Postman", "Figma", "Adobe XD", "Chrome DevTools", "Jest"],
    color: "from-pink-500/20 to-rose-500/20",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="container py-24 sm:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            My Skills & Expertise
          </motion.h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            I've mastered a comprehensive range of technologies across the full development stack
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category, index) => (
            <motion.div key={category.category} variants={itemVariants}>
              <MagneticCard className="h-full">
                <div
                  className={`relative bg-gradient-to-br ${category.color} backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center gap-3 mb-6 relative z-10"
                  >
                    <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary/30 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </motion.div>

                  <div className="flex flex-wrap gap-3 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-3 bg-background/80 hover:bg-background transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
