import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const clipReveal = {
  initial: { y: '100%' },
  animate: { y: '0%' },
}

export const smoothTransition = (duration = 0.65) => ({
  duration,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
})

export const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
  mass: 1,
}
