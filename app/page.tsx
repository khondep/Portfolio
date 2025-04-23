"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileDown, Mail, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-5rem)] max-w-6xl mx-auto py-8 sm:py-12 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <TypewriterEffect />
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mb-6 sm:mb-8">
            I&apos;m Purvang Khonde, a Full Stack Developer pursuing MS in Information Systems at Northeastern
            University. I craft scalable web applications and innovative software solutions.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <Link href="https://www.linkedin.com/in/purvangk/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 text-sm sm:text-base">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/khondep" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 text-sm sm:text-base">
                <Github size={18} />
                GitHub
              </Button>
            </Link>
            <Link href="/Purvang_Khonde_Resume.html" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="gap-2 text-sm sm:text-base">
                <FileDown size={18} />
                Download Resume
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0"
        >
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/261DD9A9-3B11-4E5D-9B5C-09DB7770C494_1_105_c-JXZutTSJ42BBlTURzw30Yzk3f4OIN2.jpeg"
              alt="Purvang Khonde in Boston"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Get in Touch</h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <Mail className="text-primary" size={18} />
                <a
                  href="mailto:khonde.p@northeastern.edu"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  khonde.p@northeastern.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary" size={18} />
                <a
                  href="tel:+16174067238"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +1 (617) 406 7238
                </a>
              </div>
            </div>
            <ContactForm />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

function TypewriterEffect() {
  const designations = ["Full Stack Developer", "UX Designer", "Business Analyst"]

  const [currentDesignation, setCurrentDesignation] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current word being processed
        const designation = designations[currentIndex]

        // If deleting, remove a character, otherwise add a character
        if (isDeleting) {
          setCurrentDesignation(designation.substring(0, currentChar - 1))
          setCurrentChar((prev) => prev - 1)
        } else {
          setCurrentDesignation(designation.substring(0, currentChar + 1))
          setCurrentChar((prev) => prev + 1)
        }

        // If word is complete, start deleting after a pause
        if (!isDeleting && currentChar === designation.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
        // If deletion is complete, move to next word
        else if (isDeleting && currentChar === 0) {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % designations.length)
        }
      },
      isDeleting ? 50 : 100,
    ) // Typing is slower than deleting

    return () => clearTimeout(timeout)
  }, [currentDesignation, currentChar, currentIndex, isDeleting, designations])

  return (
    <div className="min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center">
      <span className="text-primary">{currentDesignation}</span>
      <span className="text-primary animate-pulse ml-1">|</span>
    </div>
  )
}
