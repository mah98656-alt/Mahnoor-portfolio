'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brandingProjects } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function BrandingPage() {
  const [selected, setSelected] = useState<typeof brandingProjects[0] | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  const openProject = (project: typeof brandingProjects[0]) => {
    setSelected(project)
    setActiveImage(0)
  }

  return (
    <>
      <div className="min-h-screen bg-bg">
        {/* Header */}
        <div
          className="relative pt-36 pb-20 border-b border-divider"
          style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.05) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <SectionHeader
              label="BRAND IDENTITY & DESIGN"
              title="Branding"
              subtitle="Complete brand identity systems — from logo and typography to packaging, print collateral, and brand guidelines."
            />
          </div>
        </div>

        {/* Projects */}
        <div className="section-padding">
          <div className="container-site">
            {brandingProjects.length > 0 ? (
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brandingProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <BrandCard project={project} onClick={() => openProject(project)} />
                  </StaggerItem>
                ))}
              </StaggerReveal>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
      <Footer />

      {/* Detail Modal */}
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
                {/* Header */}
                <div className="mb-8">
                  <p className="label-accent mb-3">{selected.category} · {selected.year}</p>
                  <h2 className="font-display font-bold text-primary text-3xl md:text-4xl mb-4">{selected.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selected.deliverables.map((d) => (
                      <span key={d} className="label border border-divider text-secondary px-3 py-1.5 rounded-sm">{d}</span>
                    ))}
                  </div>
                  {selected.description && (
                    <p className="text-secondary leading-relaxed max-w-2xl">{selected.description}</p>
                  )}
                </div>

                {/* Gallery */}
                {selected.fullImages.length > 0 && (
                  <div>
                    {/* Main image */}
                    <div className="w-full rounded-sm overflow-hidden mb-3 bg-bg-alt" style={{ minHeight: '300px' }}>
                      <img
                        src={selected.fullImages[activeImage]}
                        alt={`${selected.title} ${activeImage + 1}`}
                        className="w-full object-contain max-h-[60vh]"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.parentElement!.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'
                          t.parentElement!.style.height = '300px'
                          t.style.display = 'none'
                        }}
                      />
                    </div>
                    {/* Thumbnails */}
                    {selected.fullImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {selected.fullImages.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            className={`flex-shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-colors duration-150 bg-bg-alt ${
                              i === activeImage ? 'border-accent' : 'border-transparent hover:border-divider'
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function BrandCard({
  project,
  onClick,
}: {
  project: typeof brandingProjects[0]
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer rounded-sm overflow-hidden bg-surface border border-divider"
      whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.25)' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onError={(e) => {
            const t = e.target as HTMLImageElement
            t.parentElement!.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)'
            t.style.display = 'none'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)',
            opacity: hovered ? 1 : 0.5,
            transition: 'opacity 350ms ease',
          }}
        />
        {/* View prompt */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <span className="label text-primary border border-primary/40 px-5 py-2.5 rounded-sm backdrop-blur-sm">
            VIEW PROJECT
          </span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="label text-secondary/60 mb-1" style={{ color: 'var(--gold)', opacity: 0.8 }}>
          {project.category} · {project.year}
        </p>
        <h3 className="font-display font-bold text-primary text-xl mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.deliverables.slice(0, 4).map((d) => (
            <span key={d} className="label border border-divider text-secondary/60 px-2.5 py-1 rounded-sm text-[10px]">
              {d}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="w-20 h-20 rounded-sm border border-divider flex items-center justify-center mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), transparent)' }}>
        <span className="font-display font-bold text-gold/30 text-2xl">B</span>
      </div>
      <p className="label text-secondary mb-2">BRANDING</p>
      <p className="text-secondary/60 text-sm max-w-xs">
        Add branding projects to <code className="text-accent/60">src/lib/data.ts</code> → brandingProjects
      </p>
    </div>
  )
}
