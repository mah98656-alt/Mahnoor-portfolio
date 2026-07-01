'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { experience, education } from '@/lib/data'
import { Reveal, StaggerReveal, StaggerItem, ClipReveal } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

export default function ExperiencePage() {
  return (
    <>
      <div className="min-h-screen bg-bg">

        {/* Header */}
        <section
          className="relative pt-36 pb-20 border-b border-divider"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.06) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <Reveal>
              <p className="label-accent mb-5">EXPERIENCE & EDUCATION</p>
            </Reveal>
            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                className="font-display font-bold text-primary"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '700px' }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Where I've Worked & Learned.
              </motion.h1>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="section-padding bg-bg">
          <div className="container-site">
            <Reveal><p className="label-accent mb-12">WORK EXPERIENCE</p></Reveal>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <ExperienceCard key={index} job={job} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-padding bg-bg-alt border-t border-divider">
          <div className="container-site">
            <Reveal><p className="label-accent mb-12">EDUCATION</p></Reveal>

            <Reveal delay={0.05}>
              <div
                className="rounded-sm border border-divider bg-surface p-8 md:p-10"
                style={{ borderLeft: '3px solid var(--gold)' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="label mb-3" style={{ color: 'var(--gold)', opacity: 0.9 }}>DEGREE</p>
                    <h2 className="font-display font-bold text-primary text-2xl md:text-3xl mb-2">
                      {education.degree}
                    </h2>
                    <p className="font-body text-secondary mb-6">{education.university}</p>

                    <div>
                      <p className="label text-secondary/50 mb-3">RELEVANT COURSEWORK</p>
                      <div className="flex flex-wrap gap-2">
                        {education.relevantCourses.map((course) => (
                          <span key={course} className="label border border-divider text-secondary px-3 py-1.5 rounded-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-sm border border-divider bg-bg">
                      <p className="label text-secondary/50 mb-1">GRADUATION</p>
                      <p className="font-display font-bold text-primary text-xl">{education.year}</p>
                    </div>
                    <div className="p-4 rounded-sm border border-divider bg-bg">
                      <p className="label text-secondary/50 mb-1">THESIS FILM</p>
                      <Link
                        href="/thesis"
                        className="label text-accent hover:text-accent-hover transition-colors duration-250 flex items-center gap-1.5"
                      >
                        VIEW PROJECT →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section-padding bg-bg border-t border-divider">
          <div className="container-site">
            <Reveal><p className="label-accent mb-12">CERTIFICATIONS & CREDENTIALS</p></Reveal>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Degree card */}
              <StaggerItem>
                <div className="p-6 rounded-sm border border-divider bg-surface hover:border-accent/30 transition-colors duration-250">
                  <p className="label mb-3" style={{ color: 'var(--gold)', opacity: 0.8 }}>DEGREE</p>
                  <h3 className="font-display font-bold text-primary text-lg mb-1">Digital Arts</h3>
                  <p className="label text-secondary/60 mb-4">{education.university} · {education.year}</p>
                  <p className="label text-secondary/40">BACHELOR OF SCIENCE</p>
                </div>
              </StaggerItem>

              {/* Experience certificate cards */}
              {experience.map((job, i) => (
                <StaggerItem key={i}>
                  <div className="p-6 rounded-sm border border-divider bg-surface hover:border-accent/30 transition-colors duration-250">
                    <p className="label-accent mb-3">INTERNSHIP</p>
                    <h3 className="font-display font-bold text-primary text-lg mb-1">{job.company}</h3>
                    <p className="label text-secondary/60 mb-4">{job.role} · {job.period}</p>
                    {job.certificateUrl ? (
                      <a
                        href={job.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label text-accent hover:text-accent-hover transition-colors duration-250 flex items-center gap-1.5"
                      >
                        VIEW LETTER →
                      </a>
                    ) : (
                      <p className="label text-secondary/30">CERTIFICATE PENDING</p>
                    )}
                  </div>
                </StaggerItem>
              ))}

              {/* Placeholder for future certs */}
              <StaggerItem>
                <div
                  className="p-6 rounded-sm border border-dashed border-divider flex flex-col items-center justify-center text-center min-h-[140px]"
                  style={{ borderColor: 'rgba(124,92,191,0.15)' }}
                >
                  <p className="label text-secondary/30 mb-2">ADD CERTIFICATION</p>
                  <p className="text-secondary/20 text-xs">Edit src/lib/data.ts</p>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </section>

        {/* EXPERIENCE LETTERS */}
        <section className="py-20 border-t border-divider bg-bg-alt">
          <div className="container-site">
            <Reveal><p className="label-accent mb-8">EXPERIENCE LETTERS</p></Reveal>
            <Reveal delay={0.05}>
              <p className="text-secondary mb-8 max-w-xl" style={{ lineHeight: 1.7 }}>
                Official internship verification letters are available for download. These confirm
                the roles, responsibilities, and duration of each internship.
              </p>
            </Reveal>
            <StaggerReveal className="flex flex-wrap gap-4">
              {experience.map((job, i) => (
                <StaggerItem key={i}>
                  {job.certificateUrl ? (
                    <a
                      href={job.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-divider hover:border-accent/40 text-secondary hover:text-primary px-6 py-4 rounded-sm transition-all duration-250"
                    >
                      <span className="text-accent">↓</span>
                      <div>
                        <p className="font-body text-sm text-primary">{job.company}</p>
                        <p className="label text-secondary/50">{job.role}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 border border-dashed border-divider text-secondary/30 px-6 py-4 rounded-sm">
                      <span>↓</span>
                      <div>
                        <p className="font-body text-sm">{job.company}</p>
                        <p className="label text-secondary/30">Upload PDF to /public/certs/</p>
                      </div>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-divider bg-bg">
          <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
            <ClipReveal>
              <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.02em' }}>
                Ready to bring me on board?
              </h2>
            </ClipReveal>
            <Reveal delay={0.1}>
              <Link
                href="/contact"
                className="label bg-accent text-white hover:bg-accent-hover px-8 py-4 rounded-sm transition-colors duration-250"
              >
                GET IN TOUCH →
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

function ExperienceCard({
  job,
  index,
}: {
  job: typeof experience[0]
  index: number
}) {
  return (
    <Reveal delay={index * 0.08}>
      <div
        className="rounded-sm border border-divider bg-surface p-8 md:p-10 hover:border-accent/25 transition-colors duration-400"
        style={{ borderLeft: '3px solid var(--accent)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left — meta */}
          <div className="md:col-span-1">
            <p className="label-accent mb-2">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="font-mono text-secondary/60 text-xs mb-4">{job.period}</p>
            <p className="label text-secondary/50">{job.location}</p>
          </div>

          {/* Right — content */}
          <div className="md:col-span-3">
            <p className="label text-secondary/50 mb-1">{job.role}</p>
            <h3 className="font-display font-bold text-primary text-2xl md:text-3xl mb-6">
              {job.company}
            </h3>
            <ul className="space-y-3 mb-8">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-3 text-secondary text-sm leading-relaxed">
                  <span className="text-accent/60 flex-shrink-0 mt-0.5">◆</span>
                  {item}
                </li>
              ))}
            </ul>
            {job.certificateUrl ? (
              <a
                href={job.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 label text-accent hover:text-accent-hover transition-colors duration-250"
              >
                VIEW EXPERIENCE LETTER →
              </a>
            ) : (
              <p className="label text-secondary/30">Certificate: upload to /public/certs/{`cert-experience-${job.company.toLowerCase().replace(' ', '-')}.pdf`}</p>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
