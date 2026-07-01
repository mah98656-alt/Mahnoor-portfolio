'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-accent mb-6">404</p>
          <h1
            className="font-display font-bold text-primary mb-4"
            style={{ fontSize: 'clamp(40px, 8vw, 100px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
          >
            Not Found.
          </h1>
          <p className="text-secondary mb-10 max-w-sm mx-auto" style={{ lineHeight: 1.7 }}>
            This page doesn't exist. Perhaps it's still in production.
          </p>
          <Link
            href="/"
            className="label border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-sm transition-all duration-250"
          >
            ← BACK TO HOME
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
