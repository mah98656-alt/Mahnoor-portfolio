import WorkPageTemplate from '@/components/sections/WorkPageTemplate'
import { projectsMotion } from '@/lib/data'

export const metadata = {
  title: 'Motion Graphics — Mahnoor Gul',
  description: 'Kinetic typography, logo animation, and motion design by Mahnoor Gul.',
}

export default function MotionGraphicsPage() {
  return (
    <WorkPageTemplate
      label="MOTION GRAPHICS"
      title="Motion Graphics"
      subtitle="Kinetic typography, logo animation, and motion design that gives ideas a voice and a rhythm."
      projects={projectsMotion}
      layout="asymmetric"
    />
  )
}
