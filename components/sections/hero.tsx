"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingElements } from "@/components/ui/floating-elements"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"


export default function Hero() {

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const words = [{ text: "Full Stack Development", className: "text-primary" }, { text: "Freelancing" }, { text: "Next.js" }, { text: "React.js" }, { text: "Express.js" }, { text: "Node.js" }, { text: "Angular.js" }, { text: "MongoDB" }, { text: "Typescript" }, { text: "Javascript" }, { text: "UI/UX Design" }, { text: "Open Source" }]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />

      <motion.div style={{ y, opacity }} className="container relative z-10 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl animate-pulse" />
            <div className="relative bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                Hi, I'm <span className="inline-block animate-bounce" style={{ color: '#FCD34D' }}>👋</span>
              </h1>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl mt-2">Aryaman Tickoo</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[700px]"
          >
            <TypewriterEffect words={words} className="text-xl md:text-2xl mb-4" />
            <p className="text-muted-foreground md:text-lg">
              Crafting exceptional digital experiences with modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <Button asChild className="relative bg-background hover:bg-background/90 text-black">
                <Link href="#contact">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild className="group">
                <Link href="/resume.pdf" target="_blank" download={true}>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 mt-8"
          >
            {[
              { href: "https://github.com/pantherdox", icon: Github, color: "hover:text-gray-900 dark:hover:text-white" },
              { href: "https://www.linkedin.com/in/aryamantickoo/", icon: Linkedin, color: "hover:text-blue-600" },
              { href: "https://x.com/heyaryaman", icon: Twitter, color: "hover:text-blue-400" },
              { href: "mailto:developer.aryaman@gmail.com", icon: Mail, color: "hover:text-red-500" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-muted/50 backdrop-blur-sm p-3 rounded-full border border-border/50 transition-all duration-300 ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.icon.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
