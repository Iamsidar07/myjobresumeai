"use client"

import type React from "react"

import { createContext, useContext } from "react"
import { motion, useReducedMotion } from "framer-motion"

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: "0px 0px -200px" }

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  [key: string]: any
}) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: isInStaggerGroup ? 0 : delay }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({
  children,
  className,
  faster = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  faster?: boolean
  [key: string]: any
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster || shouldReduceMotion ? 0.12 : 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  )
}
