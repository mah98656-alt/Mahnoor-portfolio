'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { thesisFilm } from '@/lib/data'
import { Reveal, StaggerReveal, StaggerItem, ClipReveal } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function ThesisPage() {
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-bg">

        {/* HERO — full viewport */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={thesisFilm.heroImage}
              alt={thesisFilm.title}
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.02)' }}
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.style.display = 'none'
              }}
            />
            {/* Fallback gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 35%, #080808 70%, #000408 100%)',
              }}
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-bg/40" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 40%, transparent 100%)' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container-site pb-20 pt-36 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <Link href="/" className="label text-secondary hover:text-primary transition-colors duration-250 flex items-center gap-2">
                ← HOME
              </Link>
            </motion.div>

            <motion.p
              className="label-accent mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              THESIS FILM · {thesisFilm.year} · {thesisFilm.duration}
            </motion.p>

            <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
              <motion.h1
                className="font-display font-bold text-primary"
                style={{ fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {thesisFilm.title}
              </motion.h1>
            </div>

            <motion.p
              className="text-primary/70 max-w-xl mb-10"
              style={{ fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {thesisFilm.tagline}
            </motion.p>

            {/* Meta row */}
            <motion.div
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <p className="label text-secondary/50 mb-1">ROLE</p>
                <p className="font-mono text-sm text-primary/80">{thesisFilm.role}</p>
              </div>
              <div className="w-px h-8 bg-divider hidden md:block" />
              <div>
                <p className="label text-secondary/50 mb-1">TOOLS</p>
                <div className="flex flex-wrap gap-2">
                  {thesisFilm.tools.map((t) => (
                    <span key={t} className="label border border-divider text-secondary px-3 py-1.5 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FILM PLAYER */}
        <section className="section-padding bg-bg-alt border-y border-divider">
          <div className="container-site">
            <Reveal className="mb-8">
              <p className="label-accent">THE FILM</p>
            </Reveal>
            <Reveal>
              <div
                className="relative w-full rounded-sm overflow-hidden bg-black"
                style={{ paddingBottom: '56.25%' }}
              >
                {!playing ? (
                  /* Poster with play button */
                  <div className="absolute inset-0">
                    <img
                      src={thesisFilm.thumbnail}
                      alt="Thesis film poster"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.parentElement!.style.background = 'linear-gradient(135deg, #0a0a1a, #1a0a2e)'
                        t.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-bg/30" />
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 group"
                      aria-label="Play film"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center breathe"
                        whileHover={{ scale: 1.12, backgroundColor: 'rgba(124,92,191,1)' }}
                        transition={{ duration: 0.3, ease: [0.34, 1.4, 0.64, 1] }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <polygon points="6,4 20,12 6,20" />
                        </svg>
                      </motion.div>
                      <span className="label text-primary/70">PLAY FILM</span>
                    </button>
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    {thesisFilm.vimeoUrl.includes('XXXXXXXXX') ? (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-surface">
                        <p className="label text-secondary">REPLACE VIMEO URL IN src/lib/data.ts</p>
                        <p className="label-accent">thesisFilm.vimeoUrl</p>
                      </div>
                    ) : (
                      <iframe
                        src={`${thesisFilm.vimeoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONCEPT */}
        <section className="section-padding bg-bg">
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <p className="label-accent mb-4">THE CONCEPT</p>
              </Reveal>
              <ClipReveal>
                <h2
                  className="font-display font-bold text-primary mb-8"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  A world built
                  <br />
                  frame by frame.
                </h2>
              </ClipReveal>
              <Reveal delay={0.1}>
                <p className="text-secondary leading-relaxed mb-6">{thesisFilm.concept}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-secondary leading-relaxed">{thesisFilm.development}</p>
              </Reveal>
            </div>

            {/* Learnings */}
            <div>
              <Reveal>
                <p className="label-accent mb-6">KEY LEARNINGS</p>
              </Reveal>
              <StaggerReveal className="space-y-4">
                {thesisFilm.learnings.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4 p-5 rounded-sm border border-divider bg-surface">
                      <span className="font-mono text-accent/60 text-xs mt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-secondary text-sm leading-relaxed">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* STILLS GALLERY */}
        {thesisFilm.stills.length > 0 && (
          <section className="section-padding bg-bg-alt border-t border-divider">
            <div className="container-site">
              <Reveal className="mb-12">
                <p className="label-accent">STILL FRAMES</p>
              </Reveal>
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {thesisFilm.stills.map((still, i) => (
                  <StaggerItem key={i}>
                    <div className="rounded-sm overflow-hidden bg-surface" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={still}
                        alt={`${thesisFilm.title} — still ${i + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.parentElement!.style.background = `linear-gradient(${120 + i * 30}deg, #0a0a1a, #1a0a${i}e)`
                          t.style.display = 'none'
                          const ph = document.createElement('div')
                          ph.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;'
                          ph.innerHTML = `<span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.2em;color:rgba(124,92,191,0.3);">STILL ${i + 1}</span>`
                          t.parentElement!.appendChild(ph)
                        }}
                      />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </section>
        )}

        {/* NEXT PROJECT */}
        <section className="py-20 border-t border-divider bg-bg">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="label text-secondary/50 mb-2">NEXT UP</p>
                  <h3 className="font-display font-bold text-primary text-2xl">3D Animation</h3>
                </div>
                <Link
                  href="/3d-animation"
                  className="group flex items-center gap-3 label text-accent hover:text-accent-hover transition-colors duration-250"
                >
                  VIEW 3D WORK
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
