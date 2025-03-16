import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  skill: string
  color: "cyan" | "fuchsia" | "yellow" | "green" | "blue" | "purple"
  size?: "sm" | "md"
  className?: string
}

export function SkillBadge({ skill, color, size = "md", className }: SkillBadgeProps) {
  const colorMap = {
    cyan: "bg-cyan-950/50 text-cyan-400 border-cyan-500/50 hover:border-cyan-500",
    fuchsia: "bg-fuchsia-950/50 text-fuchsia-400 border-fuchsia-500/50 hover:border-fuchsia-500",
    yellow: "bg-yellow-950/50 text-yellow-400 border-yellow-500/50 hover:border-yellow-500",
    green: "bg-green-950/50 text-green-400 border-green-500/50 hover:border-green-500",
    blue: "bg-blue-950/50 text-blue-400 border-blue-500/50 hover:border-blue-500",
    purple: "bg-purple-950/50 text-purple-400 border-purple-500/50 hover:border-purple-500",
  }

  const sizeMap = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
  }

  return (
    <span
      className={cn(
        "inline-block rounded border backdrop-blur-sm transition-colors duration-300",
        colorMap[color],
        sizeMap[size],
        className,
      )}
    >
      {skill}
    </span>
  )
}

