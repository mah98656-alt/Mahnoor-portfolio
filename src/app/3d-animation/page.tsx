import WorkPageTemplate from '@/components/sections/WorkPageTemplate'
import { projects3D } from '@/lib/data'

export const metadata = {
  title: '3D Animation — Mahnoor Gul',
  description: 'Cinematic 3D environments, characters, and scene animation by Mahnoor Gul.',
}

export default function ThreeDAnimationPage() {
  return (
    <WorkPageTemplate
      label="3D ANIMATION"
      title="3D Animation"
      subtitle="Cinematic environments, atmospheric storytelling, and character animation in three dimensions."
      projects={projects3D}
      layout="asymmetric"
    />
  )
}
