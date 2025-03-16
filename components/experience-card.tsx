import { cn } from "@/lib/utils"
import { GlitchText } from "./glitch-text"
import { MapPin, Calendar } from "lucide-react"

interface ExperienceCardProps {
  experience: {
    company: string
    location: string
    position: string
    period: string
    achievements: string[]
  }
  className?: string
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/70 transition-all duration-300",
        className,
      )}
    >
      {/* Glitch effect on hover */}
      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 25%)" }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ clipPath: "polygon(0 75%, 100% 75%, 100% 100%, 0 100%)" }}
        ></div>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-1 text-cyan-400 tracking-wider uppercase">
          <GlitchText text={experience.position} />
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-300">
            <span className="font-semibold">{experience.company}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center text-gray-400">
              <MapPin size={14} className="mr-1" />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>

          <div className="flex items-center text-gray-400">
            <Calendar size={14} className="mr-1" />
            <span className="text-sm tracking-wider">{experience.period}</span>
          </div>
        </div>

        <ul className="space-y-2 text-gray-300">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-cyan-400 mr-2">›</span>
              <span className="tracking-wide">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

