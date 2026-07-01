'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { workCategories, thesisFilm } from '@/lib/data'
import { Reveal, StaggerReveal, StaggerItem, ClipReveal } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function WorkIndexPage() {
  return (
    <>
      <div className="min-h-screen bg-bg">
        <section
          className="relative pt-36 pb-20 border-b border-divider"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.06) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <Reveal><p className="label-accent mb-5">ALL WORK</p></Reveal>
            <ClipReveal>
              <h1
                className="font-display font-bold text-primary"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
              >
                Selected Works
              </h1>
            </ClipReveal>
            <Reveal delay={0.15}>
              <p className="text-secondary mt-5 max-w-xl" style={{ lineHeight: 1.75 }}>
                Six disciplines. Each with its own space, its own rules, its own audience.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Thesis featured */}
        <section className="pt-20 pb-10 bg-bg">
          <div className="container-site">
            <Reveal><p className="label text-secondary/50 mb-6">FEATURED PROJECT</p></Reveal>
            <Reveal delay={0.05}>
              <Link href="/thesis">
                <motion.div
                  className="relative overflow-hidden rounded-sm cursor-pointer"
                  style={{ aspectRatio: '21/9' }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, #0a0a1a, #1a0a2e, #080808)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.75), rgba(8,8,8,0.25))' }}
                  />
                  <div className="absolute inset-0 flex items-center px-10 md:px-16">
                    <div>
                      <p className="label-accent mb-3">THESIS FILM · {thesisFilm.year}</p>
                      <h2
                        className="font-display font-bold text-primary mb-4"
                        style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                      >
                        {thesisFilm.title}
                      </h2>
                      <p className="text-primary/60 max-w-md mb-6" style={{ lineHeight: 1.7, fontSize: 'clamp(13px, 1.2vw, 15px)' }}>
                        {thesisFilm.tagline}
                      </p>
                      <span className="label text-accent">VIEW FULL CASE STUDY →</span>
                    </div>
                  </div>
                  <div className="absolute top-5 right-5">
                    <span className="label border border-gold/40 text-gold bg-gold/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                      THESIS FILM
                    </span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Categories */}
        <section className="pt-10 section-padding bg-bg">
          <div className="container-site">
            <Reveal><p className="label text-secondary/50 mb-8">BROWSE BY DISCIPLINE</p></Reveal>
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workCategories.map((cat) => (
                <StaggerItem key={cat.href}>
                  <CategoryCard {...cat} />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

function CategoryCard({
  label,
  href,
  description,
}: {
  label: string
  href: string
  description: string
  thumbnail: string
}) {
  return (
    <Link href={href}>
      <motion.div
        className="group relative overflow-hidden rounded-sm bg-surface border border-divider hover:border-accent/30 transition-colors duration-400 cursor-pointer"
        style={{ aspectRatio: '4/3' }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Gradient background instead of image with onError */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(124,92,191,0.08) 0%, rgba(8,8,8,0.9) 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <p className="label-accent mb-2">{label.toUpperCase()}</p>
          <p className="text-secondary/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="label text-accent">VIEW WORK</span>
            <span className="text-accent text-sm">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
