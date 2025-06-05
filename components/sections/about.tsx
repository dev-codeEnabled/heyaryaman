"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MagneticCard } from "@/components/ui/magnetic-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ProgressRing } from "@/components/ui/progress-ring"
import { InteractiveTimeline } from "@/components/ui/interactive-timeline"
import { FloatingIcons } from "@/components/ui/floating-icons"
import { Code2, Coffee, Gamepad2, Music, Camera, BookOpen, Zap, Target, Users, Clock, Star } from "lucide-react"

const stats = [
  { label: "Projects Completed", value: 25, icon: Target, suffix: "+" },
  { label: "Happy Clients", value: 15, icon: Users, suffix: "+" },
  { label: "Hours of Coding", value: 1200, icon: Clock, suffix: "+" },
  { label: "GitHub Stars", value: 150, icon: Star, suffix: "+" },
]

const skills = [
  { name: "Frontend Development", percentage: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Backend Development", percentage: 85, color: "from-green-500 to-emerald-500" },
  { name: "Database Design", percentage: 80, color: "from-purple-500 to-violet-500" },
  { name: "UI/UX Design", percentage: 75, color: "from-pink-500 to-rose-500" },
]

const interests = [
  { icon: Code2, label: "Coding", description: "Building innovative solutions" },
  { icon: Coffee, label: "Coffee", description: "Fuel for late-night coding" },
  { icon: Gamepad2, label: "Gaming", description: "Strategy and puzzle games" },
  { icon: Music, label: "Music", description: "Lo-fi beats while coding" },
  { icon: Camera, label: "Photography", description: "Capturing beautiful moments" },
  { icon: BookOpen, label: "Reading", description: "Tech blogs and sci-fi novels" },
]

const achievements = [
  {
    year: "2025",
    title: "Full Stack Developer",
    description: "Started my journey as a professional developer",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "Graduated with Bachelor's Degree",
    description: "Completed Computer Science degree with 8.5 CGPA",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "First Freelance Project",
    description: "Successfully delivered my first client project",
    icon: "💼",
  },
  {
    year: "2022",
    title: "Coding Bootcamp",
    description: "Intensive full-stack development training",
    icon: "⚡",
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <FloatingIcons />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ y, opacity }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Passionate developer crafting digital experiences with creativity and precision
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid gap-12 lg:gap-16">
            {/* Personal Introduction */}
            <motion.div variants={itemVariants} className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-evenly">
                <MagneticCard>
                  <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                      <Image
                        src="/me.jpg"
                        alt="Aryaman Tickoo"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                </MagneticCard>
              </div>

              {/* Personal Info */}
              <div className="space-y-8">
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-3xl font-bold">Hello! I'm Aryaman Tickoo</h3>
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with a
                      strong foundation in modern web technologies. My journey in tech started with curiosity and has
                      evolved into a deep love for creating innovative digital solutions.
                    </p>
                    <p>
                      I specialize in building <span className="text-purple-600 font-semibold">responsive</span> and
                      <span className="text-pink-600 font-semibold"> performant</span> web applications using
                      cutting-edge technologies like React, Next.js, Node.js, and MongoDB.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                      projects, or enjoying a good cup of coffee while planning my next big project.
                    </p>
                  </div>
                </motion.div>

                {/* Quick Facts */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">New Delhi, India</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-semibold">1+ Years</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-semibold">B.E CSE</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-semibold text-green-600">Open to work</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Interests & Hobbies */}
            <motion.div variants={itemVariants}  className="hidden md:block">
              <h3 className="text-2xl font-bold text-center mb-8">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="group"
                  >
                    <MagneticCard>
                      <Card className="p-6 text-center bg-gradient-to-br from-background to-muted/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-primary/5">
                        <CardContent className="p-0 space-y-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                          >
                            <interest.icon className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold">{interest.label}</h4>
                            <p className="text-xs text-muted-foreground">{interest.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </MagneticCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Timeline */}
            <motion.div variants={itemVariants} className="hidden md:block">
              <h3 className="text-2xl font-bold text-center mb-8">My Journey</h3>
              <InteractiveTimeline achievements={achievements} />
            </motion.div>

            {/* Personal Philosophy */}
            <motion.div variants={itemVariants} className="text-center hidden md:block">
              <MagneticCard>
                <Card className="p-8 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 border-0 shadow-xl">
                  <CardContent className="p-0">
                    <motion.div whileHover={{ scale: 1.02 }} className="space-y-4">
                      <Zap className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="text-2xl font-bold">My Philosophy</h3>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        "Code is poetry in motion. Every line should tell a story, every function should solve a
                        problem, and every project should make the world a little bit better."
                      </p>
                      <div className="flex justify-center gap-2 mt-6">
                        {["Innovation", "Quality", "Collaboration", "Growth"].map((value) => (
                          <Badge key={value} variant="secondary" className="px-3 py-1">
                            {value}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </MagneticCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
