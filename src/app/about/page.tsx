'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig, skills, education } from '@/lib/data'
import { Reveal, StaggerReveal, StaggerItem, ClipReveal } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

const toolIcons: Record<string, string> = {
  ae: 'AE', an: 'AN', ch: 'CH', ps: 'PS', ai: 'AI', pr: 'PR',
  blender: 'BL', '3dsmax': '3D',
}

const toolColors: Record<string, string> = {
  ae: '#9999FF', an: '#FF7C00', ch: '#1473E6', ps: '#31A8FF',
  ai: '#FF9A00', pr: '#9999FF', blender: '#EA7600', '3dsmax': '#00A3E0',
}

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-bg">

        {/* HERO */}
        <section
          className="relative pt-36 pb-20 border-b border-divider overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.07) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <motion.p
                  className="label-accent mb-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  ABOUT
                </motion.p>
                <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
                  <motion.h1
                    className="font-display font-bold text-primary"
                    style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Mahnoor Gul
                  </motion.h1>
                </div>
                <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
                  <motion.h2
                    className="font-display font-bold"
                    style={{
                      fontSize: 'clamp(44px, 6vw, 80px)',
                      lineHeight: 1.0,
                      letterSpacing: '-0.03em',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(124,92,191,0.5)',
                    }}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Motion Designer.
                  </motion.h2>
                </div>
                <motion.p
                  className="label text-secondary"
                  style={{ letterSpacing: '0.15em' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {siteConfig.location}
                </motion.p>
              </div>

              {/* Photo */}
              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-sm"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(124,92,191,0.2) 0%, transparent 70%)',
                      transform: 'scale(1.3)',
                      filter: 'blur(40px)',
                    }}
                  />
                  <div
                    className="relative rounded-sm overflow-hidden"
                    style={{
                      width: 'clamp(240px, 22vw, 360px)',
                      aspectRatio: '4/5',
                      border: '1px solid rgba(124,92,191,0.2)',
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #0f0f1a 100%)',
                    }}
                  >
                    <img
                      src="/images/about/mahnoor-photo.webp"
                      alt="Mahnoor Gul"
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none" style={{ opacity: 0.2 }}>
                      <span className="font-display font-bold text-accent text-3xl">MG</span>
                      <span className="label text-secondary">ADD PHOTO</span>
                    </div>
                    <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-accent/50 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-accent/50 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BIO */}
        <section className="section-padding bg-bg">
          <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <Reveal><p className="label-accent mb-6">BIO</p></Reveal>
              <ClipReveal>
                <h2
                  className="font-display font-bold text-primary mb-8"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  I build worlds
                  <br />
                  <span style={{ color: 'var(--accent)' }}>through motion.</span>
                </h2>
              </ClipReveal>
              <Reveal delay={0.1}>
                <p className="text-secondary leading-relaxed mb-5">
                  I'm a multimedia artist and animator passionate about fantasy-inspired storytelling,
                  cinematic visuals, and expressive animation. My work blends 2D and 3D animation,
                  motion design, and illustration to create imaginative visual experiences filled with
                  emotion and atmosphere.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-secondary leading-relaxed mb-5">
                  With a background in Digital Arts and hands-on internship experience at Figment Craft
                  and Etribe Solutions, I've developed both the technical skills and the creative
                  instincts to bring complex visual ideas to life — from concept through to final render.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-secondary leading-relaxed mb-8">
                  My thesis film — the culmination of my degree — represents everything I've learned:
                  world-building, character design, 3D production, compositing, and storytelling through
                  motion. It's the project I'm most proud of, and a foundation I intend to build on.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div
                  className="p-6 rounded-sm border border-accent/20"
                  style={{ background: 'rgba(124,92,191,0.05)' }}
                >
                  <p className="label-accent mb-2">WHAT I'M LOOKING FOR</p>
                  <p className="text-secondary leading-relaxed text-sm">
                    An animation studio, motion design agency, or creative team in Riyadh, KSA where I can
                    contribute meaningful motion work, grow as an artist, and be part of a team that
                    takes visual storytelling seriously. Open to remote and hybrid roles globally.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right — quick facts */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="label-accent mb-6">QUICK FACTS</p>
              </Reveal>
              <StaggerReveal className="space-y-5">
                {[
                  { label: 'BASED IN', value: 'Pakistan · Open to Riyadh, KSA' },
                  { label: 'EDUCATION', value: `${education.degree}, ${education.year}` },
                  { label: 'UNIVERSITY', value: education.university },
                  { label: 'SPECIALIZATION', value: '2D Animation · 3D Animation · Motion Graphics' },
                  { label: 'LANGUAGES', value: 'Urdu (Native) · English (Professional)' },
                  { label: 'AVAILABILITY', value: 'Open to full-time & freelance' },
                ].map((fact) => (
                  <StaggerItem key={fact.label}>
                    <div className="flex gap-4 py-4 border-b border-divider">
                      <span className="label text-secondary/50 flex-shrink-0 w-28">{fact.label}</span>
                      <span className="font-body text-primary text-sm">{fact.value}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* CREATIVE PHILOSOPHY */}
        <section
          className="py-24 border-y border-divider overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,92,191,0.04) 0%, transparent 60%)' }}
        >
          <div className="container-site text-center">
            <Reveal><p className="label-accent mb-8">CREATIVE PHILOSOPHY</p></Reveal>
            <div style={{ overflow: 'hidden' }}>
              <motion.blockquote
                className="font-display font-bold text-primary mx-auto"
                style={{
                  fontSize: 'clamp(22px, 3vw, 38px)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  maxWidth: '800px',
                }}
                initial={{ y: '105%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                "Every frame is a decision. Every decision is a story. 
                I don't just animate objects — I animate intention."
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* SKILLS & TOOLS */}
        <section className="section-padding bg-bg">
          <div className="container-site">
            <Reveal><p className="label-accent mb-12">SKILLS & TOOLS</p></Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Animation tools */}
              <div>
                <Reveal><h3 className="font-display font-bold text-primary text-lg mb-6">Animation & 3D</h3></Reveal>
                <StaggerReveal className="space-y-3">
                  {skills.animation.map((tool) => (
                    <StaggerItem key={tool.name}>
                      <div className="flex items-center gap-4 p-3 rounded-sm border border-divider bg-surface">
                        <div
                          className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: `${toolColors[tool.icon] || '#444'}22` }}
                        >
                          <span
                            className="font-mono font-bold text-[10px]"
                            style={{ color: toolColors[tool.icon] || '#888' }}
                          >
                            {toolIcons[tool.icon] || tool.icon.toUpperCase().slice(0, 2)}
                          </span>
                        </div>
                        <span className="font-body text-primary text-sm">{tool.name}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>

              {/* Design tools */}
              <div>
                <Reveal><h3 className="font-display font-bold text-primary text-lg mb-6">Design</h3></Reveal>
                <StaggerReveal className="space-y-3">
                  {skills.design.map((tool) => (
                    <StaggerItem key={tool.name}>
                      <div className="flex items-center gap-4 p-3 rounded-sm border border-divider bg-surface">
                        <div
                          className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: `${toolColors[tool.icon] || '#444'}22` }}
                        >
                          <span className="font-mono font-bold text-[10px]" style={{ color: toolColors[tool.icon] || '#888' }}>
                            {toolIcons[tool.icon]}
                          </span>
                        </div>
                        <span className="font-body text-primary text-sm">{tool.name}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>

                <div className="mt-6">
                  <Reveal><h3 className="font-display font-bold text-primary text-lg mb-6">Production</h3></Reveal>
                  <StaggerReveal className="space-y-3">
                    {skills.production.map((tool) => (
                      <StaggerItem key={tool.name}>
                        <div className="flex items-center gap-4 p-3 rounded-sm border border-divider bg-surface">
                          <div
                            className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                            style={{ background: `${toolColors[tool.icon] || '#444'}22` }}
                          >
                            <span className="font-mono font-bold text-[10px]" style={{ color: toolColors[tool.icon] || '#888' }}>
                              {toolIcons[tool.icon]}
                            </span>
                          </div>
                          <span className="font-body text-primary text-sm">{tool.name}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerReveal>
                </div>
              </div>

              {/* Disciplines */}
              <div>
                <Reveal><h3 className="font-display font-bold text-primary text-lg mb-6">Disciplines</h3></Reveal>
                <StaggerReveal className="flex flex-wrap gap-2">
                  {skills.disciplines.map((d) => (
                    <StaggerItem key={d}>
                      <span className="label border border-divider text-secondary px-3 py-2 rounded-sm hover:border-accent/40 hover:text-primary transition-colors duration-250">
                        {d}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-divider bg-bg-alt">
          <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Reveal><p className="label text-secondary mb-2">READY TO CONNECT?</p></Reveal>
              <ClipReveal>
                <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}>
                  Let's make something great.
                </h2>
              </ClipReveal>
            </div>
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <Link
                  href="/experience"
                  className="label border border-divider text-secondary hover:text-primary hover:border-secondary px-6 py-3.5 rounded-sm transition-colors duration-250"
                >
                  VIEW EXPERIENCE
                </Link>
                <Link
                  href="/contact"
                  className="label bg-accent text-white hover:bg-accent-hover px-6 py-3.5 rounded-sm transition-colors duration-250"
                >
                  GET IN TOUCH
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
