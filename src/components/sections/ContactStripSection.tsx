'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'
import { Reveal } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function ContactStripSection() {
  return (
    <>
      <section
        className="relative overflow-hidden py-28 md:py-36"
        style={{ background: 'linear-gradient(to bottom, #0a0a0a, #080808)' }}
      >
        {/* Bg glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(124,92,191,0.12) 0%, transparent 60%)',
          }}
        />

        <div className="container-site relative z-10 text-center">
          <Reveal>
            <p className="label-accent mb-6">OPEN TO WORK</p>
          </Reveal>
          <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
            <motion.h2
              className="font-display font-bold text-primary"
              style={{ fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
              initial={{ y: '105%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Let's Create
            </motion.h2>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
            <motion.h2
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(44px, 7vw, 96px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(124,92,191,0.6)',
              }}
              initial={{ y: '105%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Something.
            </motion.h2>
          </div>
          <Reveal delay={0.2}>
            <p className="text-secondary max-w-md mx-auto mb-12" style={{ lineHeight: 1.7 }}>
              Open to animation, motion design, and multimedia roles in Riyadh, KSA.
              Also available for remote freelance projects worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-display font-bold text-primary text-xl md:text-2xl hover:text-accent transition-colors duration-250"
                style={{ letterSpacing: '-0.01em' }}
              >
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6 mb-12">
              <SocialLink href={siteConfig.instagram} label="INSTAGRAM" />
              <div className="w-px h-4 bg-divider" />
              <SocialLink href={siteConfig.behance} label="BEHANCE" />
              <div className="w-px h-4 bg-divider" />
              <SocialLink href={siteConfig.linkedin} label="LINKEDIN" />
              <div className="w-px h-4 bg-divider" />
              <SocialLink href={siteConfig.whatsapp} label="WHATSAPP" />
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-accent text-accent font-mono text-xs tracking-widest px-8 py-4 rounded-sm hover:bg-accent hover:text-white transition-all duration-250"
            >
              GO TO CONTACT PAGE →
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label text-secondary hover:text-accent transition-colors duration-250"
    >
      {label}
    </a>
  )
}
