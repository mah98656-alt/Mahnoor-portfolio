import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-divider bg-bg">
      <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="label text-secondary">
          © {year} Mahnoor Gul · All Rights Reserved
        </p>
        <div className="flex items-center gap-6">
          <Link href="/about" className="label text-secondary hover:text-primary transition-colors duration-250">About</Link>
          <Link href="/work" className="label text-secondary hover:text-primary transition-colors duration-250">Work</Link>
          <Link href="/contact" className="label text-secondary hover:text-primary transition-colors duration-250">Contact</Link>
        </div>
        <a href={`mailto:${siteConfig.email}`} className="label text-secondary hover:text-accent transition-colors duration-250">
          {siteConfig.email}
        </a>
      </div>
    </footer>
  )
}
