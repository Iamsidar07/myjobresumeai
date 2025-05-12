"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b from-zinc-600/60 to-transparent rounded-2xl p-px"
    >
      <div className="p-8 bg-gradient-to-b from-black to-transparent rounded-2xl">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-pink-500 fill-pink-500" : "text-gray-700"}`} />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          <span className="text-white font-medium">{author.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
</div>
    </motion.div>
  )
}
