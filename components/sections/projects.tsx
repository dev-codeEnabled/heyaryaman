"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { MagneticCard } from "@/components/ui/magnetic-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with dark mode support.",
    image: "/portfolio.png",
    tags: ["Next.js", "MongoDB", "Typescript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Aceternity UI"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Cached Info",
    description:
      "A resource management application with upload and request functionality, user authentication, and real-time updates.",
    image: "/cachedinfo.png",
    tags: ["Nextjs", "MongoDB", "Typescript", "Tailwind CSS", "Shadcn UI"],
    demoLink: "https://cachedinfo.vercel.app/",
    githubLink: "https://github.com/dev-codeEnabled/cachedinfo",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Scroll Shop IO - ( in progress )",
    description:
      "A full stack platfrom for creating shoppable videos with user authentication, product management, video uploads, transcoding engine, shopify integration and more.",
    image: "/scrollshop.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Next.js", "Tailwind CSS", "Shadcn UI"],
    demoLink: "https://dev.admin.scrollshop.io/media",
    githubLink: "https://dev.admin.scrollshop.io/media",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Elf Connect - Video Chat & Conferencing",
    description: "A responsive video chat and video conferencing application.",
    image: "/elfconnect.png",
    tags: ["Next.js", "Tailwind CSS", "Stream.io", "Clerk"],
    demoLink: "https://elfconnect.vercel.app/",
    githubLink: "https://github.com/pantherdox/ElfConnect",
    category: "frontend",
  },
  {
    id: 5,
    title: "IP Tracker",
    description: "A frontend project to track the IP of any network with map functionality.",
    image: "/iptracker.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoLink: "https://ip-tracker-pied-iota.vercel.app/",
    githubLink: "https://github.com/pantherdox/IP-Tracker",
    category: "frontend",
  },
  {
    id: 6,
    title: "Simon Game",
    description: "Simon Game is a fun memory-based game where players must mimic an increasingly long sequence of lights and sounds.",
    image: "/simongame.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoLink: "https://pantherdox.github.io/SimonGame/",
    githubLink: "https://github.com/pantherdox/SimonGame",
    category: "frontend",
  },
]

export default function Projects() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Here are some of the projects I&apos;ve worked on. Each project reflects my skills and experience in different
          areas of web development.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <ProjectGrid projects={projects} inView={inView} setRef={ref} />
        </TabsContent>

        <TabsContent value="frontend">
          <ProjectGrid projects={projects.filter((p) => p.category === "frontend")} inView={inView} setRef={ref} />
        </TabsContent>

        <TabsContent value="backend">
          <ProjectGrid projects={projects.filter((p) => p.category === "backend")} inView={inView} setRef={ref} />
        </TabsContent>

        <TabsContent value="fullstack">
          <ProjectGrid projects={projects.filter((p) => p.category === "fullstack")} inView={inView} setRef={ref} />
        </TabsContent>
      </Tabs>
    </section>
  )
}

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
  category: string
}

interface ProjectGridProps {
  projects: Project[]
  inView: boolean
  setRef: (node?: Element | null) => void
}

function ProjectGrid({ projects, inView, setRef }: ProjectGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: -15, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  return (
    <motion.div
      ref={setRef}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <motion.div key={project.id} variants={itemVariants}>
          <MagneticCard className="h-full">
            <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50">
              <div className="relative h-48 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              <CardHeader className="relative">
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <motion.div
                  className="flex flex-wrap gap-2 mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                  <Button asChild size="sm" variant="default" className="w-full group/btn">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-200" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                  <Button asChild size="sm" variant="outline" className="w-full group/btn">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                      Code
                    </a>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </MagneticCard>
        </motion.div>
      ))}
    </motion.div>
  )
}
