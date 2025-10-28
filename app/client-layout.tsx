"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { TimeDisplay } from "@/components/time-display"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import LiquidBlobBackground from "@/components/LiquidBlobBackground"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-gradient-to-br from-emerald-950 to-gray-950 dark:from-gray-900 dark:to-gray-950">
        <LiquidBlobBackground />
        <div className="relative z-10 container mx-auto px-4">
          <header className="flex flex-col sm:flex-row justify-between items-center py-4 text-gray-300 gap-4">
            <div className="text-sm">Boston/EST</div>
            <Navigation />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <TimeDisplay />
            </div>
          </header>
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <footer className="py-6 text-center text-gray-400 text-sm mt-12">
            <p>© {new Date().getFullYear()} Purvang Khonde. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
