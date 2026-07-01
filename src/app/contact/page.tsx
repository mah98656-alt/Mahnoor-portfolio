'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'
import { Reveal, StaggerReveal, StaggerItem, ClipReveal } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Opens mailto as fallback — replace with form service (Formspree, Resend, etc.) when ready
    const subject = encodeURIComponent(`Portfolio Enquiry from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const socialLinks = [
    { label: 'EMAIL', value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
    { label: 'WHATSAPP', value: '+92 319 591 4246', href: siteConfig.whatsapp, external: true },
    { label: 'INSTAGRAM', value: '@yourusername', href: siteConfig.instagram, external: true },
    { label: 'BEHANCE', value: 'behance.net/mahnoorgul', href: siteConfig.behance, external: true },
    { label: 'LINKEDIN', value: 'linkedin.com/in/mahnoorgul', href: siteConfig.linkedin, external: true },
  ]

  return (
    <>
      <div className="min-h-screen bg-bg">

        {/* HERO */}
        <section
          className="relative pt-36 pb-24 border-b border-divider overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.07) 0%, transparent 100%)' }}
        >
          {/* Bg glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at top right, rgba(124,92,191,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="container-site relative z-10">
            <motion.p
              className="label-accent mb-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              CONTACT
            </motion.p>
            <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
              <motion.h1
                className="font-display font-bold text-primary"
                style={{ fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Let's Create
              </motion.h1>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
              <motion.h1
                className="font-display font-bold"
                style={{
                  fontSize: 'clamp(44px, 7vw, 96px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(124,92,191,0.5)',
                }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              >
                Something.
              </motion.h1>
            </div>
            <motion.p
              className="text-secondary max-w-lg"
              style={{ lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              Open to motion design, animation, and multimedia roles in Riyadh, KSA.
              Also available for remote freelance projects worldwide. I typically respond within 24–48 hours.
            </motion.p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="section-padding bg-bg">
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Direct contact */}
            <div>
              <Reveal><p className="label-accent mb-10">REACH ME DIRECTLY</p></Reveal>

              <StaggerReveal className="space-y-1 mb-12">
                {socialLinks.map((link) => (
                  <StaggerItem key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between py-5 border-b border-divider hover:border-accent/30 transition-colors duration-250"
                    >
                      <div>
                        <p className="label text-secondary/50 mb-1">{link.label}</p>
                        <p className="font-body text-primary group-hover:text-accent transition-colors duration-250">
                          {link.value}
                        </p>
                      </div>
                      <motion.span
                        className="text-secondary/30 group-hover:text-accent transition-colors duration-250"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.25, ease: [0.34, 1.4, 0.64, 1] }}
                      >
                        →
                      </motion.span>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerReveal>

              {/* Availability badge */}
              <Reveal delay={0.2}>
                <div
                  className="flex items-center gap-3 p-5 rounded-sm border border-divider bg-surface"
                >
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div
                      className="absolute inset-0 rounded-full bg-green-400 animate-ping"
                      style={{ animationDuration: '2s' }}
                    />
                  </div>
                  <div>
                    <p className="font-body text-primary text-sm">Currently available</p>
                    <p className="label text-secondary/50">{siteConfig.availability}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — Form */}
            <div>
              <Reveal><p className="label-accent mb-10">SEND A MESSAGE</p></Reveal>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start gap-4 p-8 rounded-sm border border-accent/30 bg-accent/5"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent">✓</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-xl mb-2">Message prepared.</h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      Your email client should have opened. If not, email me directly at{' '}
                      <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="label text-secondary/50 hover:text-primary transition-colors duration-250 mt-2"
                  >
                    SEND ANOTHER →
                  </button>
                </motion.div>
              ) : (
                <Reveal delay={0.05}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <FormField
                      label="YOUR NAME"
                      type="text"
                      placeholder="e.g. Ahmed Al-Rashid"
                      value={formState.name}
                      onChange={(v) => setFormState((s) => ({ ...s, name: v }))}
                      required
                    />
                    <FormField
                      label="YOUR EMAIL"
                      type="email"
                      placeholder="email@company.com"
                      value={formState.email}
                      onChange={(v) => setFormState((s) => ({ ...s, email: v }))}
                      required
                    />
                    <div>
                      <label className="label text-secondary/60 mb-2 block">MESSAGE</label>
                      <textarea
                        placeholder="Tell me about the project or role..."
                        rows={5}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full bg-surface border border-divider text-primary placeholder-secondary/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors duration-250 resize-none font-body"
                        style={{ lineHeight: 1.7 }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full label bg-accent text-white py-4 rounded-sm hover:bg-accent-hover transition-colors duration-250"
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.1, ease: [0.34, 1.4, 0.64, 1] }}
                    >
                      SEND MESSAGE →
                    </motion.button>
                    <p className="label text-secondary/30 text-center">
                      Or email directly: {siteConfig.email}
                    </p>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-16 border-t border-divider bg-bg-alt">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="label text-secondary/50 mb-1">BASED IN</p>
                  <p className="font-display font-bold text-primary text-lg">Pakistan</p>
                </div>
                <div className="w-px h-8 bg-divider hidden md:block" />
                <div>
                  <p className="label text-secondary/50 mb-1">OPEN TO</p>
                  <p className="font-display font-bold text-primary text-lg">Riyadh, KSA · Remote</p>
                </div>
                <div className="w-px h-8 bg-divider hidden md:block" />
                <div>
                  <p className="label text-secondary/50 mb-1">RESPONSE TIME</p>
                  <p className="font-display font-bold text-primary text-lg">24–48 Hours</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="label text-secondary/60 mb-2 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface border border-divider text-primary placeholder-secondary/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors duration-250 font-body"
      />
    </div>
  )
}
