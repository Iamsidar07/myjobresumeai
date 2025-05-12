"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b from-zinc-800/90 to-transparent p-px rounded-2xl group"
    >
      <div className="bg-gradient-to-b from-black/90 to-transparent rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ">
        <div className="bg-gradient-b from-pink-800 via-pink-600 to-green-900 p-px mb-6 rounded-lg">
          <div className="w-14 h-14 rounded-lg grid place-items-center bg-black group-hover:text-pink-600 transition-colors duration-200">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 flex-grow">{description}</p>
        <div className="mt-6">
          <button className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-medium flex items-center hover:opacity-80 transition-opacity">
            Learn more
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
