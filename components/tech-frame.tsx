"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface TechFrameProps {
  children: React.ReactNode
  className?: string
  code?: string
}

export function TechFrame({ children, className, code }: TechFrameProps) {
  const [year, setYear] = useState("----")
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])
  
  return (
    <div className={cn("relative border border-primary/30 bg-black/50", className)}>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary"></div>

      {/* Technical markers */}
      {code && (
        <div className="absolute -top-2.5 left-6 bg-black px-2 text-xs text-primary uppercase tracking-wider">
          {code}
        </div>
      )}

      <div className="absolute -bottom-2.5 right-6 bg-black px-2 text-xs text-gray-500 uppercase tracking-wider">
        {year}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

