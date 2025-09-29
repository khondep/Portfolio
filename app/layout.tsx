import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { TimeDisplay } from "@/components/time-display"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Purvang Khonde - Portfolio",
  description: "Full Stack Developer and Software Engineer",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* Removed EmailJS script */}</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-gradient-to-br from-emerald-950 to-gray-950 dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4">
              <header className="flex flex-col sm:flex-row justify-between items-center py-4 text-gray-300 gap-4">
                <div className="text-sm">Boston/EST</div>
                <Navigation />
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <TimeDisplay />
                </div>
              </header>
              <main>{children}</main>
              <footer className="py-6 text-center text-gray-400 text-sm mt-12">
                <p>© {new Date().getFullYear()} Purvang Khonde. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
