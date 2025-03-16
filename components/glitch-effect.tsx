"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GlitchEffectProps {
  className?: string
}

export function GlitchEffect({ className }: GlitchEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const resizeHandler = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeHandler)

    // Grid lines
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)"
      ctx.lineWidth = 0.5

      // Horizontal lines
      const gridSize = 40
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
    }

    // Random glitch rectangles - increased frequency
    const drawGlitches = () => {
      const numGlitches = Math.floor(Math.random() * 10) + 3 // Increased number of glitches

      for (let i = 0; i < numGlitches; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const width = Math.random() * 150 + 50 // Increased size
        const height = Math.random() * 30 + 5

        const colors = [
          "rgba(0, 255, 255, 0.2)",
          "rgba(255, 0, 255, 0.2)",
          "rgba(255, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.fillStyle = color
        ctx.fillRect(x, y, width, height)
      }
    }

    // Animation loop with increased frequency
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()

      // Increased probability of glitches
      if (Math.random() < 0.2) {
        // Increased from 0.1 to 0.2
        drawGlitches()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeHandler)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 z-0", className)} />
}

