'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { illustrations } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { StaggerReveal, StaggerItem } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function IllustrationPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i === null ? null : i > 0 ? i - 1 : illustrations.length - 1))
  const next = () => setLightbox((i) => (i === null ? null : i < illustrations.length - 1 ? i + 1 : 0))

  return (
    <>
      <div className="min-h-screen bg-bg">
        <div
          className="relative pt-36 pb-20 border-b border-divider"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.06) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <SectionHeader
              label="ILLUSTRATION"
              title="Illustration"
              subtitle="Character-driven illustration exploring fantasy, culture, and emotion — from expressive portraits to world-building scenes."
            />
          </div>
        </div>

        <div className="section-padding">
          <div className="container-site">
            <StaggerReveal className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {illustrations.map((illus, index) => (
                <StaggerItem key={illus.id}>
                  <motion.div
                    className="break-inside-avoid relative overflow-hidden rounded-sm cursor-pointer group bg-surface"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setLightbox(index)}
                  >
                    <img
                      src={illus.src}
                      alt={illus.title}
                      className="w-full object-cover"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.style.display = 'none'
                        t.parentElement!.style.height = '280px'
                        t.parentElement!.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)'
                        const ph = document.createElement('div')
                        ph.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;'
                        ph.innerHTML = `<span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.2em;color:rgba(124,92,191,0.4);">${illus.id.toUpperCase()}</span>`
                        t.parentElement!.appendChild(ph)
                      }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(8,8,8,0.5)' }}
                    >
                      <span className="label text-primary border border-primary/40 px-4 py-2 rounded-sm backdrop-blur-sm">
                        VIEW
                      </span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}

              {illustrations.length === 0 && (
                <div className="col-span-3 flex flex-col items-center py-32 text-center">
                  <p className="label text-secondary mb-2">ILLUSTRATION</p>
                  <p className="text-secondary/60 text-sm">
                    Add illustrations to <code className="text-accent/60">src/lib/data.ts</code>
                  </p>
                </div>
              )}
            </StaggerReveal>
          </div>
        </div>
      </div>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg/97 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary border border-divider hover:border-secondary rounded-sm transition-colors"
            >
              ✕
            </button>

            {/* Nav prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary border border-divider hover:border-secondary rounded-sm transition-colors"
            >
              ←
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={illustrations[lightbox].src}
                alt={illustrations[lightbox].title}
                className="max-w-full max-h-[85vh] object-contain rounded-sm"
              />
              <p className="label text-secondary text-center mt-4">{illustrations[lightbox].title}</p>
            </motion.div>

            {/* Nav next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary border border-divider hover:border-secondary rounded-sm transition-colors"
            >
              →
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 label text-secondary">
              {lightbox + 1} / {illustrations.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
