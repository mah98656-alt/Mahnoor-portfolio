'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { thesisFilm } from '@/lib/data'
import { Reveal } from '@/components/ui/Reveal'

export default function ThesisFeaturedSection() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding bg-bg">
      <div className="container-site">
        <Reveal>
          <p className="label-accent mb-12">FEATURED PROJECT</p>
        </Reveal>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/thesis">
            <div
              className="relative overflow-hidden rounded-sm cursor-pointer"
              style={{ aspectRatio: '21/9' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-surface">
                <img
                  src={thesisFilm.heroImage}
                  alt={thesisFilm.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: hovered ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                  }}
                />
                {/* Fallback gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 30%, #0a1a0a 60%, #080808 100%)',
                  }}
                />
              </div>

              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: hovered
                    ? 'linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0.3) 100%)'
                    : 'linear-gradient(to right, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.3) 60%, rgba(8,8,8,0.15) 100%)',
                  transition: 'background 400ms ease',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-12 md:px-20">
                <div className="max-w-2xl">
                  <motion.p
                    className="label-accent mb-4"
                    animate={{ opacity: hovered ? 1 : 0.7 }}
                    transition={{ duration: 0.25 }}
                  >
                    THESIS FILM · {thesisFilm.year}
                  </motion.p>
                  <h2
                    className="font-display font-bold text-primary mb-4"
                    style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                  >
                    {thesisFilm.title}
                  </h2>
                  <p className="text-primary/70 mb-8 max-w-lg" style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.7 }}>
                    {thesisFilm.tagline}
                  </p>

                  <motion.div
                    className="flex items-center gap-3"
                    animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0.8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="label text-accent">VIEW FULL PROJECT</span>
                    <motion.span
                      className="text-accent"
                      animate={{ x: hovered ? 6 : 0 }}
                      transition={{ duration: 0.35, ease: [0.34, 1.4, 0.64, 1] }}
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {thesisFilm.tools.map((tool) => (
                      <span
                        key={tool}
                        className="label border border-primary/20 text-secondary/70 px-3 py-1.5 rounded-sm backdrop-blur-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-6 right-6">
                <span className="label border border-gold/40 text-gold bg-gold/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                  THESIS FILM
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
