'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  y?: number
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  className = '',
  once = true,
  y = 28,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function ClipReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '105%' }}
        animate={isInView ? { y: '0%' } : { y: '105%' }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
