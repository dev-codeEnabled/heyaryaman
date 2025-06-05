"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Navbar() {
  return (
    <>
      <ScrollProgress />
      <motion.div
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Rest of the navbar content remains the same */}
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Aryaman</span> Tickoo
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#skills" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#projects" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#experience" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Experience</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="h-6 w-6 cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="#about" className="text-lg font-medium">
                    About
                  </Link>
                  <Link href="#skills" className="text-lg font-medium">
                    Skills
                  </Link>
                  <Link href="#projects" className="text-lg font-medium">
                    Projects
                  </Link>
                  <Link href="#experience" className="text-lg font-medium">
                    Experience
                  </Link>
                  <Link href="#contact" className="text-lg font-medium">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </>
  )
}
