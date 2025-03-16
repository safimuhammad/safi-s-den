import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "welcome to safi's den",
  description: 'Muhammad Safi - Software Engineer & GenAI Specialist Portfolio',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
