import WorkPageTemplate from '@/components/sections/WorkPageTemplate'
import { projects2D } from '@/lib/data'

export const metadata = {
  title: '2D Animation — Mahnoor Gul',
  description: 'Character animation, expressive motion, and 2D storytelling by Mahnoor Gul.',
}

export default function TwoDAnimationPage() {
  return (
    <WorkPageTemplate
      label="2D ANIMATION"
      title="2D Animation"
      subtitle="Expressive character animation, fluid motion, and 2D storytelling that breathes emotion into every frame."
      projects={projects2D}
      layout="asymmetric"
    />
  )
}
