'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import SectionHeader from '@/components/ui/SectionHeader'
import { StaggerReveal, StaggerItem } from '@/components/ui/Reveal'
import Footer from '@/components/layout/Footer'

interface Project {
  id: string
  title: string
  category: string
  year: string
  tools?: string[]
  thumbnail: string
  preview?: string
  vimeoUrl?: string
  stills?: string[]
  images?: string[]
  description?: string
  featured?: boolean
}

interface WorkPageProps {
  label: string
  title: string
  subtitle: string
  projects: Project[]
  layout?: 'grid' | 'asymmetric'
}

export default function WorkPageTemplate({ label, title, subtitle, projects, layout = 'grid' }: WorkPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="min-h-screen bg-bg">
        {/* Page header */}
        <div
          className="relative pt-36 pb-20 border-b border-divider"
          style={{ background: 'linear-gradient(to bottom, rgba(124,92,191,0.06) 0%, transparent 100%)' }}
        >
          <div className="container-site">
            <SectionHeader label={label} title={title} subtitle={subtitle} />
          </div>
        </div>

        {/* Projects */}
        <div className="section-padding">
          <div className="container-site">
            {layout === 'asymmetric' && projects.length > 0 ? (
              <AsymmetricLayout projects={projects} onSelect={setSelectedProject} />
            ) : (
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      year={project.year}
                      thumbnail={project.thumbnail}
                      preview={project.preview}
                      onClick={() => setSelectedProject(project)}
                      featured={project.featured}
                    />
                  </StaggerItem>
                ))}
              </StaggerReveal>
            )}

            {projects.length === 0 && (
              <EmptyState category={title} />
            )}
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          category={selectedProject.category}
          year={selectedProject.year}
          tools={selectedProject.tools}
          description={selectedProject.description}
          vimeoUrl={selectedProject.vimeoUrl}
          stills={selectedProject.stills}
          images={selectedProject.images}
        />
      )}
    </>
  )
}

function AsymmetricLayout({ projects, onSelect }: { projects: Project[]; onSelect: (p: Project) => void }) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <div className="space-y-6">
      {/* Featured project — full width */}
      {featured.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectCard
            title={project.title}
            category={project.category}
            year={project.year}
            thumbnail={project.thumbnail}
            preview={project.preview}
            onClick={() => onSelect(project)}
            featured
            aspectRatio="landscape"
          />
        </motion.div>
      ))}

      {/* Rest — 2 column grid */}
      {rest.length > 0 && (
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                title={project.title}
                category={project.category}
                year={project.year}
                thumbnail={project.thumbnail}
                preview={project.preview}
                onClick={() => onSelect(project)}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      )}
    </div>
  )
}

function EmptyState({ category }: { category: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div
        className="w-20 h-20 rounded-sm border border-divider flex items-center justify-center mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(124,92,191,0.08), transparent)' }}
      >
        <span className="font-display font-bold text-accent/40 text-2xl">+</span>
      </div>
      <p className="label text-secondary mb-2">{category.toUpperCase()}</p>
      <p className="text-secondary/60 text-sm max-w-xs">
        Projects coming soon. Add your work to <code className="text-accent/60">src/lib/data.ts</code>
      </p>
    </div>
  )
}
