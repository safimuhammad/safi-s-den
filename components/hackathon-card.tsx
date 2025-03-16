"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlitchText } from "./glitch-text"
import { SkillBadge } from "./skill-badge"
import { ExternalLink, Trophy, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HackathonCardProps {
  hackathon: {
    title: string
    description: string
    position: string
    event: string
    tech: string[]
    details: string[]
    image: string
    url: string
  }
  className?: string
}

export function HackathonCard({ hackathon, className }: HackathonCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/70 transition-all duration-300",
        className,
      )}
    >
      {/* Hackathon image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={hackathon.image || "/placeholder.svg"}
          alt={hackathon.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized={hackathon.image?.includes("v0.blob.com")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Position badge */}
        <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full flex items-center">
          <Trophy size={14} className="mr-1" />
          <span className="text-sm font-medium">{hackathon.position}</span>
        </div>

        {/* Tech stack badges */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-1">
          {hackathon.tech.slice(0, 3).map((tech, index) => (
            <SkillBadge key={index} skill={tech} color="purple" size="sm" />
          ))}
          {hackathon.tech.length > 3 && (
            <span className="text-xs bg-black/70 text-gray-300 px-2 py-1 rounded">
              +{hackathon.tech.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Hackathon content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-1 text-purple-400">
          <GlitchText text={hackathon.title} />
        </h3>
        <p className="text-gray-300 mb-2">{hackathon.description}</p>
        <p className="text-sm text-purple-300 mb-4 flex items-center">
          <Award size={14} className="mr-1" />
          {hackathon.event}
        </p>

        <ul className="space-y-2 text-gray-300 mb-4">
          {hackathon.details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-purple-400 mr-2">›</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          size="sm"
          className="border-purple-500 text-purple-400 hover:bg-purple-950 w-full"
          onClick={() => window.open(hackathon.url, "_blank")}
        >
          <ExternalLink size={16} className="mr-2" />
          View Project
        </Button>
      </div>

      {/* Cyberpunk corner accent */}
      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
        <div className="absolute transform -rotate-45 bg-gradient-to-r from-purple-500 to-cyan-500 w-24 h-4 -top-2 -left-2"></div>
      </div>
    </div>
  )
}

