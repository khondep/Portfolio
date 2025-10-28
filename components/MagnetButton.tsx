"use client"

import type React from "react"

import Link from "next/link"
import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

type Props = { href: string; children: React.ReactNode; variant?: "solid" | "ghost" }

export default function MagnetButton({ href, children, variant = "solid" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const dx = useSpring(x, { stiffness: 200, damping: 15 })
  const dy = useSpring(y, { stiffness: 200, damping: 15 })

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect()
          if (!r) return
          const mx = e.clientX - (r.left + r.width / 2)
          const my = e.clientY - (r.top + r.height / 2)
          x.set(mx * 0.15)
          y.set(my * 0.15)
        }}
        onMouseLeave={() => {
          x.set(0)
          y.set(0)
        }}
        style={{ x: dx, y: dy }}
        className={[
          "rounded-2xl px-5 py-3 text-sm md:text-base transition-colors backdrop-blur",
          variant === "solid"
            ? "bg-white/10 hover:bg-white/20 border border-white/20"
            : "border border-white/10 hover:bg-white/10",
        ].join(" ")}
      >
        {children}
      </motion.div>
    </Link>
  )
}
