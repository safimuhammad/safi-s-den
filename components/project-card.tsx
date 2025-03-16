"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlitchText } from "./glitch-text"
import { SkillBadge } from "./skill-badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProxiedImageUrl } from "@/lib/image-utils"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    details: string[]
    image: string
    github?: string | null
    demo?: string | null
  }
  className?: string
  index?: number
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-black/50 backdrop-blur-md border border-fuchsia-500/30 rounded-lg overflow-hidden hover:border-fuchsia-500/70 transition-all duration-300",
        className,
      )}
    >
      {/* Project image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getProxiedImageUrl(project.image)}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading={index === 0 ? "eager" : "lazy"}
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Tech stack badges */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((tech, index) => (
            <SkillBadge key={index} skill={tech} color="fuchsia" size="sm" />
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs bg-black/70 text-gray-300 px-2 py-1 rounded">+{project.tech.length - 3} more</span>
          )}
        </div>
      </div>

      {/* Project content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-1 text-fuchsia-400">
          <GlitchText text={project.title} />
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <ul className="space-y-2 text-gray-300 mb-4">
          {project.details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-fuchsia-400 mr-2">›</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mt-4">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              className="border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-950"
              onClick={() => project.github && window.open(project.github, "_blank")}
            >
              <Github size={16} className="mr-2" />
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              variant="outline"
              size="sm"
              className="border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-950"
              onClick={() => project.demo && window.open(project.demo, "_blank")}
            >
              <ExternalLink size={16} className="mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>

      {/* Cyberpunk corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute transform rotate-45 bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-24 h-4 -top-2 -right-2"></div>
      </div>
    </div>
  )
}

