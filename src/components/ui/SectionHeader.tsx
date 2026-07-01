import { ClipReveal, Reveal } from './Reveal'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}>
      {label && (
        <Reveal delay={0}>
          <p className="label-accent mb-4">{label}</p>
        </Reveal>
      )}
      <ClipReveal delay={0.05}>
        <h2
          className="font-display font-bold text-primary"
          style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          {title}
        </h2>
      </ClipReveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className="text-secondary mt-4 text-base max-w-xl" style={{ lineHeight: 1.7 }}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
