'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let lenisInstance: any = null
    let animationFrameId: number

    const initLenis = async () => {
      try {
        const LenisModule = await import('lenis')
        const Lenis = LenisModule.default

        lenisInstance = new Lenis({
          lerp: 0.10,
          duration: 1.2,
        })

        lenisRef.current = lenisInstance

        const raf = (time: number) => {
          lenisInstance.raf(time)
          animationFrameId = requestAnimationFrame(raf)
        }

        animationFrameId = requestAnimationFrame(raf)
      } catch (e) {
        console.warn('Lenis not available, using native scroll')
      }
    }

    initLenis()

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])

  return <>{children}</>
}
