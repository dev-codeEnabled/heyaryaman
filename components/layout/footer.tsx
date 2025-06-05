import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">Aryaman</span> Tickoo
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Full Stack Web Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="grid gap-2">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground">
                Experience
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/pantherdox" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/aryamantickoo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/heyaryaman" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:developer.aryaman@gmail.com" className="hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aryaman Tickoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
