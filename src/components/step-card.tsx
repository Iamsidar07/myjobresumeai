"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StepCardProps {
  number: string
  icon: ReactNode
  title: string
  description: string
}

export default function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-zinc-800 transition-all duration-300 relative group"
    >
      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300">
      {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
