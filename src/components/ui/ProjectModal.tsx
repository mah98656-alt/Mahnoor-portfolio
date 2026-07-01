'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  category: string
  year: string
  tools?: string[]
  description?: string
  vimeoUrl?: string
  images?: string[]
  stills?: string[]
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  category,
  year,
  tools,
  description,
  vimeoUrl,
  images,
  stills,
}: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0)
  const allImages = [...(stills || []), ...(images || [])]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg/95 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-surface border border-divider rounded-sm overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors border border-divider hover:border-secondary rounded-sm"
            >
              ✕
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <p className="label-accent mb-3">
                  {category} · {year}
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
                  {title}
                </h2>
                {tools && (
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="label border border-divider text-secondary px-3 py-1.5 rounded-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {vimeoUrl && vimeoUrl.includes('vimeo.com') && !vimeoUrl.includes('XXXXXXXXX') && (
                <div
                  className="relative w-full mb-8 rounded-sm overflow-hidden bg-black"
                  style={{ paddingBottom: '56.25%' }}
                >
                  <iframe
                    src={`${vimeoUrl}?autoplay=1&muted=0&title=0&byline=0&portrait=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {allImages.length > 0 && (
                <div className="mb-8">
                  <div className="w-full rounded-sm overflow-hidden mb-3 bg-bg-alt">
                    <img
                      src={allImages[activeImage]}
                      alt={`${title} ${activeImage + 1}`}
                      className="w-full object-contain max-h-[60vh]"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.style.display = 'none'
                      }}
                    />
                  </div>
                  {allImages.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {allImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`flex-shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-colors ${
                            i === activeImage ? 'border-accent' : 'border-transparent'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {description && (
                <p className="text-secondary leading-relaxed text-base max-w-2xl">
                  {description}
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
