import type { Metadata } from 'next'
import { Inter, Syne, Space_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'
import Navigation from '@/components/layout/Navigation'
import ScrollProgress from '@/components/ui/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Mahnoor Gul — Motion Designer & Animator',
  description: 'Fantasy-inspired motion designer and animator specializing in 2D animation, 3D animation, and motion graphics. Available for roles in Riyadh, KSA.',
  keywords: ['motion designer', '2D animator', '3D animator', 'motion graphics', 'Riyadh', 'animation portfolio'],
  openGraph: {
    title: 'Mahnoor Gul — Motion Designer & Animator',
    description: 'Fantasy-inspired motion designer and animator specializing in 2D animation, 3D animation, and motion graphics.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${spaceMono.variable}`}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  )
}
