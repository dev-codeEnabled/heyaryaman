"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: Array<{
    text: string
    className?: string
  }>
  className?: string
}

export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex].text

        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <div className={cn("font-bold", className)}>
      {words.map((word, index) => (
        <span key={index} className={cn(word.className, index === currentWordIndex ? "inline" : "hidden")}>
          {index === currentWordIndex ? currentText : word.text}
        </span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-1 h-6 bg-primary ml-1"
      />
    </div>
  )
}
