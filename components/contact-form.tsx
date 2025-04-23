"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY") // Replace with your actual EmailJS public key

      const form = e.target as HTMLFormElement
      const formData = new FormData(form)

      // Add recipient email as a hidden field
      const templateParams = {
        to_email: "khonde.p@northeastern.edu",
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      }

      // Send the email using EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
      )

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        if (formRef.current) {
          formRef.current.reset()
        }
      }, 3000)
    } catch (err) {
      console.error("Error sending email:", err)
      setIsSubmitting(false)
      setError("Failed to send message. Please try again or contact directly via email.")
    }
  }

  return (
    <AnimatePresence>
      {!isSubmitted ? (
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-4"
        >
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-900/50 border-gray-800 text-sm sm:text-base h-8 sm:h-9"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-900/50 border-gray-800 text-sm sm:text-base h-8 sm:h-9"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="min-h-[100px] sm:min-h-[150px] bg-gray-900/50 border-gray-800 text-sm sm:text-base"
            />
          </div>
          {error && (
            <div className="text-red-500 flex items-center gap-2 text-xs sm:text-sm">
              <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{error}</span>
            </div>
          )}
          <Button type="submit" disabled={isSubmitting} className="w-full text-sm sm:text-base h-8 sm:h-9">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
          <p className="text-[10px] sm:text-xs text-gray-400 text-center">
            Your message will be sent directly to khonde.p@northeastern.edu
          </p>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center py-6 sm:py-8"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 text-green-500 mb-3 sm:mb-4">
            <Check className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Message Sent!</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
