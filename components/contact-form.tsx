"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 uppercase tracking-wider">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-black/50 border-cyan-500/30 focus:border-cyan-500 text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 uppercase tracking-wider">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black/50 border-cyan-500/30 focus:border-cyan-500 text-white"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 uppercase tracking-wider">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-black/50 border-cyan-500/30 focus:border-cyan-500 text-white"
            placeholder="What is this regarding?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 uppercase tracking-wider">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-black/50 border-cyan-500/30 focus:border-cyan-500 text-white min-h-[120px]"
            placeholder="Your message here..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-600 hover:to-fuchsia-700 text-white uppercase tracking-wider font-semibold"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Send size={16} className="mr-2" />
              Send Message
            </span>
          )}
        </Button>

        {submitStatus === "success" && (
          <div className="bg-green-950/50 border border-green-500 text-green-400 px-4 py-2 rounded">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-950/50 border border-red-500 text-red-400 px-4 py-2 rounded">
            There was an error sending your message. Please try again.
          </div>
        )}
      </div>
    </form>
  )
}

