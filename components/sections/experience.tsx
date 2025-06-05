"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

// Sample experience data
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Mogi I/O",
    duration: "Aug 2024 - Present",
    description: [
      "Developed and managed a product SuperCMS along with my senior. I learned and gained knowledge about various technologies which includes : React.js, Next.js, Node.js, MongoDB, Tailwind Css, Jenkins, Docker, AWS (SQS & S3 Bucket), Python, Express OpenAI.",
      "I developed the Python engine for the YT Downloader and video processor integrating it with the AWS SQS queue service. Handled micro-services like handling the webhooks, APIs from frontend to backend and in-between.",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Engineered comprehensive video analytics solutions by integrating Amazon SQS for robust event processing and employing MUI components to create an intuitive user interface.",
      "Developed another product for the company based on the idea of Shoppable Videos. This project lets you generate the embedded code snippets for the Shoppable videos. The basic concept of shoppable videos is to let users buy products while browsing videos. The products will be shown on the videos where user can directly add them to their cart and buy them."
    ],
    skills: ["React", "Next.js", "Angular.js", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS", "AWS", "Python", "Docker", "Jenkins"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Branding Elves Pvt Ltd",
    duration: "Feb 2024 - Jul 2024",
    description: [
      "Built responsive user interfaces using React and Tailwind CSS",
      "Assisted in migrating legacy code to modern React practices",
    ],
    skills: ["React", "Tailwind CSS", "Wordpress", "Wix"],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Apployss Pvt Ltd",
    duration: "Jan 2022 - Jun 2022",
    description: [
      "Designed and developed websites for small businesses and startups",
      "Implemented SEO best practices to improve client website rankings",
      "Provided ongoing maintenance and support for client websites",
    ],
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"],
  },
]

// education data
const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Govenment College of Engineering and Technology",
    duration: "2021 - 2024",
    description: "CGPA: 8.5",
  },
  {
    id: 2,
    degree: "Higher Secondary (12th Grade)",
    institution: "Shiksha Niketan Senior Secondary School",
    duration: "2020",
    description: "Percentage: 87.2%",
  },
]

export default function Experience() {
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
    <section id="experience" className="container py-24 sm:py-32 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          My professional journey and educational background in the field of web development.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/resume.pdf" target="_blank" download={true}>
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {exp.description.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {education.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <Badge variant="outline">{edu.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
