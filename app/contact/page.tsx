"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Info</h2>
              <div className="space-y-4">
                <Link
                  href="mailto:khonde.p@northeastern.edu"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  khonde.p@northeastern.edu
                </Link>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
