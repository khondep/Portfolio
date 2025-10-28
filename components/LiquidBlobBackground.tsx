// components/LiquidBlobBackground.tsx
"use client"
import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"

export default function LiquidBlobBackground() {
  const ref = useRef<SVGPathElement | null>(null)
  const [t, setT] = useState(0)

  // Simple noise-ish path morph without external deps
  useAnimationFrame((time) => {
    // animate ~60fps but keep work tiny
    const tt = time / 3000 // slow, elegant
    if (!ref.current) return
    const r = 220,
      cx = 240,
      cy = 240,
      bumps = 6
    const k = 0.35 // blob curvature
    const points: [number, number][] = []
    for (let i = 0; i < bumps; i++) {
      const a = (i / bumps) * Math.PI * 2
      const wobble = Math.sin(tt * 2 + i * 1.7) * 28 + Math.cos(tt + i) * 16
      const rr = r + wobble
      points.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr])
    }
    // build smooth path
    let d = `M ${points[0][0]} ${points[0][1]} C `
    for (let i = 0; i < points.length; i++) {
      const p0 = points[i]
      const p1 = points[(i + 1) % points.length]
      const cp1x = p0[0] + (p1[0] - p0[0]) * k
      const cp1y = p0[1] + (p1[1] - p0[1]) * k
      const cp2x = p1[0] - (p1[0] - p0[0]) * k
      const cp2y = p1[1] - (p1[1] - p0[1]) * k
      d += `${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1[0]} ${p1[1]} `
    }
    d += "Z"
    ref.current.setAttribute("d", d)
    setT(tt)
  })

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="w-[140vmax] h-[140vmax] -translate-x-1/3 -translate-y-1/3" viewBox="0 0 480 480" aria-hidden>
        {/* Gooey filter for liquid look */}
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 24 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <radialGradient id="blobGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="60%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </radialGradient>
        </defs>

        <g filter="url(#goo)" opacity="0.65">
          <motion.path ref={ref} fill="url(#blobGrad)" />
          {/* small orbs that merge into the blob */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={120 + i * 60}
              cy={120 + Math.sin(i * 2) * 20}
              r="28"
              fill="url(#blobGrad)"
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      </svg>
      {/* soft gradient wash for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
    </div>
  )
}
