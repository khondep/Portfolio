"use client"

import { motion } from "framer-motion"

export function ProjectPills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((t, i) => (
        <motion.span
          key={t}
          className="px-4 py-2 rounded-full bg-white/15 border border-white/20"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  )
}
