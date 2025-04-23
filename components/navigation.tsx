"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, FileText, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Work Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FileText },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close menu when screen size changes from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  return (
    <nav className="relative z-50">
      {isMobile ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm p-2 transition-colors hover:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span>{isOpen ? "Close" : "Menu"}</span>
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-gray-900/95 border border-gray-800 rounded-lg shadow-lg p-4 w-48">
              <div className="flex flex-col space-y-4">
                {links.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "flex items-center gap-2 text-sm p-2 rounded-md transition-colors hover:bg-gray-800 hover:text-white",
                      pathname === href ? "text-white bg-gray-800" : "text-gray-400",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex space-x-6">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 text-sm transition-colors hover:text-white",
                pathname === href ? "text-white" : "text-gray-400",
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
