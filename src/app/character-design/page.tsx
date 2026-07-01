'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { characterDesigns } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function CharacterDesignPage() {
  const [selected, setSelected] = useState<typeof characterDesigns[0] | null>(null)

  const featured = characterDesigns.find((c) => c.featured)
  const rest = characterDesigns.filter((c) => !c.featured)

  return (
    <>
      <div className="min-h-screen bg-bg">
        <div
          className="relative pt-36 pb-20 border-b border-divider"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.06) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <SectionHeader
              label="CHARACTER DESIGN"
              title="Character Design"
              subtitle="Original characters, complete turnarounds, expression sheets, and cultural design work — built from concept to final sheet."
            />
          </div>
        </div>

        <div className="section-padding">
          <div className="container-site space-y-8">
            {/* Featured character */}
            {featured && (
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 bg-surface rounded-sm overflow-hidden border border-divider">
                  {/* Image */}
                  <div className="lg:col-span-3 relative" style={{ minHeight: '360px' }}>
                    <img
                      src={featured.turnaround || featured.thumbnail}
                      alt={featured.name}
                      className="w-full h-full object-cover"
                      style={{ minHeight: '360px' }}
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.parentElement!.style.background = 'linear-gradient(135deg, #1a1a2e, #2d1b4e)'
                        t.style.display = 'none'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="label-accent border border-accent/30 bg-accent/10 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                        FEATURED CHARACTER
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <p className="label-accent mb-3">ORIGINAL CHARACTER</p>
                    <h2 className="font-display font-bold text-primary text-3xl md:text-4xl mb-4">{featured.name}</h2>
                    <p className="text-secondary mb-8" style={{ lineHeight: 1.75 }}>{featured.description}</p>
                    <button
                      onClick={() => setSelected(featured)}
                      className="group inline-flex items-center gap-3 label text-accent hover:text-accent-hover transition-colors duration-250 self-start"
                    >
                      VIEW FULL SHEETS
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                      >
                        →
                      </motion.span>
                    </button>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Rest */}
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((char) => (
                <StaggerItem key={char.id}>
                  <motion.div
                    className="bg-surface rounded-sm overflow-hidden border border-divider cursor-pointer group"
                    whileHover={{ y: -4, borderColor: 'rgba(124,92,191,0.3)' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelected(char)}
                  >
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={char.thumbnail}
                        alt={char.name}
                        className="w-full h-full object-cover"
                        style={{ transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.parentElement!.style.background = 'linear-gradient(135deg, #1a1a2e, #0f0f1a)'
                          t.style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/30 transition-colors duration-300" />
                    </div>
                    <div className="p-6">
                      <p className="label-accent mb-2">CHARACTER DESIGN</p>
                      <h3 className="font-display font-bold text-primary text-xl mb-2">{char.name}</h3>
                      <p className="text-secondary text-sm" style={{ lineHeight: 1.6 }}>{char.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
      <Footer />

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-bg/95 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-surface border border-divider rounded-sm overflow-y-auto"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary border border-divider hover:border-secondary rounded-sm transition-colors"
              >
                ✕
              </button>
              <div className="p-8 md:p-12">
                <p className="label-accent mb-3">CHARACTER DESIGN</p>
                <h2 className="font-display font-bold text-primary text-3xl md:text-4xl mb-8">{selected.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {/* Show all available sheets */}
                  {[
                    selected.turnaround,
                    selected.expressions,
                    selected.colorSheet,
                    ...(selected.images || []),
                  ].filter(Boolean).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selected.name} sheet ${i + 1}`}
                      className="w-full rounded-sm object-contain bg-bg"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.parentElement!.style.display = 'none'
                      }}
                    />
                  ))}
                </div>
                {selected.description && (
                  <p className="text-secondary leading-relaxed">{selected.description}</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
