'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { heroData, showreelData, siteConfig } from '@/lib/data'

export default function HeroSection() {
  const [showreel, setShowreel] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85
    }
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            poster={heroData.posterSrc}
            className="w-full h-full object-cover"
            style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 800ms ease' }}
          >
            <source src={heroData.videoSrc} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 60% 50%, rgba(124,92,191,0.15) 0%, transparent 60%), linear-gradient(to bottom right, #0a0a1a, #080808)',
              opacity: videoLoaded ? 0 : 1,
              transition: 'opacity 800ms ease',
            }}
          />
          <div className="absolute inset-0 bg-bg/50" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{ background: 'linear-gradient(to top, #080808, transparent)' }}
          />
        </div>

        <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-28">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="label-accent border border-accent/30 bg-accent/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                AVAILABLE FOR WORK · RIYADH, KSA
              </span>
            </motion.div>

            <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
              <motion.h1
                className="font-display font-bold text-primary"
                style={{ fontSize: 'clamp(52px, 8vw, 112px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Mahnoor
              </motion.h1>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
              <motion.h1
                className="font-display font-bold"
                style={{
                  fontSize: 'clamp(52px, 8vw, 112px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(240,237,230,0.4)',
                }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Gul
              </motion.h1>
            </div>

            <motion.p
              className="font-mono text-secondary mb-3"
              style={{ fontSize: 'clamp(11px, 1.2vw, 14px)', letterSpacing: '0.18em' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              MOTION DESIGNER · 2D & 3D ANIMATOR · VISUAL STORYTELLER
            </motion.p>

            <motion.p
              className="text-primary/80 font-body mb-10 max-w-md"
              style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.button
                onClick={() => setShowreel(true)}
                className="flex items-center gap-3 bg-accent text-white font-mono text-xs tracking-widest px-7 py-4 rounded-sm"
                whileHover={{ backgroundColor: '#9B7FD4' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                  <polygon points="2,1 12,6.5 2,12" />
                </svg>
                WATCH SHOWREEL
              </motion.button>
              <Link
                href="#work"
                className="flex items-center gap-3 border border-primary/30 text-primary font-mono text-xs tracking-widest px-7 py-4 rounded-sm transition-colors duration-250 hover:border-primary"
              >
                EXPLORE WORK
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(124,92,191,0.3) 0%, transparent 70%)',
                  transform: 'scale(1.4)',
                  filter: 'blur(50px)',
                }}
              />
              <div
                className="relative rounded-sm overflow-hidden"
                style={{
                  width: 'clamp(260px, 26vw, 400px)',
                  aspectRatio: '3/4',
                  border: '1px solid rgba(124,92,191,0.25)',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #0f0f1a 100%)',
                }}
              >
                <img
                  src={heroData.photoSrc}
                  alt="Mahnoor Gul"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                  }}
                />
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/50 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/50 pointer-events-none" />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
                  style={{ opacity: 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center">
                    <span className="font-display font-bold text-accent text-xl">MG</span>
                  </div>
                  <span className="label text-secondary">ADD PHOTO</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-5 -left-6 bg-surface border border-divider px-5 py-4 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="label text-secondary mb-1">SPECIALIZATION</p>
                <p className="font-display font-bold text-primary text-sm">2D · 3D · Motion</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <span className="label text-secondary/50">SCROLL</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-secondary/40 to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </section>

      <AnimatePresence>
        {showreel && <ShowreelModal onClose={() => setShowreel(false)} />}
      </AnimatePresence>
    </>
  )
}

function ShowreelModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-bg/97 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors border border-divider hover:border-secondary rounded-sm"
      >
        ✕
      </button>
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full rounded-sm overflow-hidden bg-black"
          style={{ paddingBottom: '56.25%' }}
        >
          {showreelData.masterReel.vimeoUrl.includes('XXXXXXXXX') ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface">
              <p className="label text-secondary">REPLACE VIMEO URL IN src/lib/data.ts</p>
              <p className="label-accent">showreelData.masterReel.vimeoUrl</p>
            </div>
          ) : (
            <iframe
              src={`${showreelData.masterReel.vimeoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}
        </div>
        <p className="label text-secondary text-center mt-4">
          SHOWREEL 2024–2025 · 2D ANIMATION · 3D ANIMATION · MOTION GRAPHICS
        </p>
      </motion.div>
    </motion.div>
  )
}
