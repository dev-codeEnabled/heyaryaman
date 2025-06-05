import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import { ParticleSystem } from "@/components/ui/particle-system"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticleSystem />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
