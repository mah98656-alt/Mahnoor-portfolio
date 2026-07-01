'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  category: string
  year: string
  thumbnail: string
  preview?: string
  href?: string
  onClick?: () => void
  featured?: boolean
  aspectRatio?: 'landscape' | 'portrait' | 'square'
}

export default function ProjectCard({
  title,
  category,
  year,
  thumbnail,
  preview,
  href,
  onClick,
  featured = false,
  aspectRatio = 'landscape',
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[4/3]'

  const handleMouseEnter = () => {
    setHovered(true)
    if (videoRef.current && preview && !videoError) {
      videoRef.current.play().catch(() => setVideoError(true))
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const CardContent = (
    <motion.div
      className={`project-card rounded-sm overflow-hidden ${aspectClass} relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : '0 0 0 rgba(0,0,0,0)',
        transition: 'box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        className="project-card-media absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: hovered && preview && !videoError ? 0 : 1,
          transition: 'opacity 300ms ease',
        }}
        onError={(e) => {
          const t = e.target as HTMLImageElement
          t.style.display = 'none'
          if (t.parentElement) {
            t.parentElement.style.background =
              'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)'
          }
        }}
      />

      {preview && !videoError && (
        <video
          ref={videoRef}
          src={preview}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 300ms ease',
          }}
          onError={() => setVideoError(true)}
        />
      )}

      <div className="project-card-overlay" />

      <div className="project-card-info">
        <div className="label-accent mb-2">
          {category} · {year}
        </div>
        <h3 className="font-display font-bold text-primary text-lg leading-tight">
          {title}
        </h3>
      </div>

      {featured && (
        <div className="absolute top-4 right-4 label-accent border border-accent/30 bg-accent/10 px-3 py-1.5 rounded-sm backdrop-blur-sm">
          FEATURED
        </div>
      )}
    </motion.div>
  )

  if (href) return <Link href={href}>{CardContent}</Link>
  if (onClick)
    return (
      <button onClick={onClick} className="w-full text-left">
        {CardContent}
      </button>
    )
  return CardContent
}
