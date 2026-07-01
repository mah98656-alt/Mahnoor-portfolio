'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { workCategories } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { StaggerReveal, StaggerItem } from '@/components/ui/Reveal'

export default function WorkCategoriesSection() {
  return (
    <section id="work" className="section-padding bg-bg-alt">
      <div className="container-site">
        <SectionHeader
          label="SELECTED WORK"
          title="Disciplines"
          subtitle="Each discipline lives in its own dedicated space — no crowding, no compromising."
        />

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workCategories.map((cat) => (
            <StaggerItem key={cat.href}>
              <CategoryCard {...cat} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function CategoryCard({
  label,
  href,
  description,
  thumbnail,
}: {
  label: string
  href: string
  description: string
  thumbnail: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        className="relative overflow-hidden rounded-sm bg-surface group cursor-pointer"
        style={{ aspectRatio: '4/3' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={thumbnail}
            alt={label}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onError={(e) => {
              const t = e.target as HTMLImageElement
              t.style.display = 'none'
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: hovered
                ? 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.2) 100%)'
                : 'linear-gradient(to top, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)',
              transition: 'background 350ms ease',
            }}
          />
          {/* Fallback pattern */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(124,92,191,0.08) 0%, rgba(201,168,76,0.05) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-7">
          <motion.p
            className="label-accent mb-2"
            animate={{ opacity: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.25 }}
          >
            {label.toUpperCase()}
          </motion.p>
          <motion.p
            className="text-secondary text-sm leading-relaxed"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex items-center gap-2 mt-4"
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label text-accent">VIEW WORK</span>
            <motion.span
              className="text-accent text-sm"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.3, ease: [0.34, 1.4, 0.64, 1] }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
