import type React from "react"
export default function GooeyContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" style={{ filter: "url(#gooey)" }}>
      <svg className="absolute pointer-events-none" width="0" height="0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 22 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      {children}
    </div>
  )
}
