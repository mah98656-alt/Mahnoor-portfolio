'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig, skills } from '@/lib/data'
import { Reveal } from '@/components/ui/Reveal'

const marqueeItems = [
  '2D ANIMATION', '3D ANIMATION', 'MOTION GRAPHICS', 'CHARACTER DESIGN',
  'ILLUSTRATION', 'VISUAL STORYTELLING', 'BRAND IDENTITY', 'DIGITAL COMPOSITING',
]

export default function AboutStripSection() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo + credential logos */}
          <Reveal className="relative">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #0f0f1a 100%)',
                border: '1px solid rgba(124,92,191,0.15)',
              }}
            >
              <img
                src="/images/about/mahnoor-photo.webp"
                alt="Mahnoor Gul"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.style.display = 'none'
                }}
              />
              {/* Placeholder */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ opacity: 0.2 }}
              >
                <div className="w-20 h-20 rounded-full border border-accent/40 flex items-center justify-center">
                  <span className="font-display font-bold text-accent text-2xl">MG</span>
                </div>
                <span className="label text-secondary">ADD PHOTO</span>
              </div>
            </div>

            {/* Credential strip */}
            <div className="flex items-center gap-6 mt-6">
              <span className="label text-secondary/60">EXPERIENCE AT</span>
              <div className="flex items-center gap-6">
                <CredentialBadge name="Figment Craft" role="Animation Intern" />
                <div className="w-px h-8 bg-divider" />
                <CredentialBadge name="Etribe Solutions" role="Design Intern" />
              </div>
            </div>
          </Reveal>

          {/* Right — Text */}
          <div>
            <Reveal delay={0.05}>
              <p className="label-accent mb-4">ABOUT</p>
            </Reveal>
            <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
              <motion.h2
                className="font-display font-bold text-primary"
                style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                initial={{ y: '105%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                I build worlds
                <br />
                <span style={{ color: 'var(--accent)' }}>through motion.</span>
              </motion.h2>
            </div>

            <Reveal delay={0.1}>
              <p className="text-secondary mb-6" style={{ lineHeight: 1.75 }}>
                I'm a multimedia artist and animator passionate about fantasy-inspired storytelling, 
                cinematic visuals, and expressive animation. My work blends 2D and 3D animation, 
                motion design, and illustration to create imaginative visual experiences filled with 
                emotion and atmosphere.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-secondary mb-8" style={{ lineHeight: 1.75 }}>
                With a background in Digital Arts and hands-on experience at Figment Craft and 
                Etribe Solutions, I bring both technical craft and creative vision to every project.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-10">
                {skills.disciplines.slice(0, 6).map((d) => (
                  <span key={d} className="label border border-divider text-secondary px-3 py-2 rounded-sm">
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 label text-accent hover:text-accent-hover transition-colors duration-250"
              >
                FULL BIO & EXPERIENCE
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                >
                  →
                </motion.span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden border-t border-b border-divider py-5">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 pr-6">
              <span className="label text-secondary/40">{item}</span>
              <span className="text-accent/30 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CredentialBadge({ name, role }: { name: string; role: string }) {
  return (
    <div>
      <p className="font-display font-bold text-primary text-sm">{name}</p>
      <p className="label text-secondary/60">{role}</p>
    </div>
  )
}
