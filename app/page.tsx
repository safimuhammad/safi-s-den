"use client"

import { GlitchText } from "@/components/glitch-text"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectCard } from "@/components/project-card"
import { HackathonCard } from "@/components/hackathon-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { GlitchEffect } from "@/components/glitch-effect"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  // Add state for scanlines
  const [scanlines, setScanlines] = useState<Array<{ top: string, animation: string, animationDelay: string }>>([])
  
  // Generate scanlines only on client-side
  useEffect(() => {
    const newScanlines = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      animation: `scanline ${3 + Math.random() * 5}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }))
    setScanlines(newScanlines)
  }, [])

  const skills = {
    languages: ["Python", "JavaScript"],
    frameworks: [
      "TensorFlow",
      "PyTorch",
      "React.js",
      "FastAPI",
      "Django Rest Framework",
      "LlamaIndex",
      "Pydantic AI",
      "Langchain",
      "Langgraph",
    ],
    data: ["Pandas", "NumPy", "PySpark", "Apache Kafka"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Neo4j"],
    cloud: ["AWS", "GCP"],
    devops: ["Docker", "Kubernetes", "Microservices", "CI/CD", "Agile (Scrum/Kanban)"],
    openSource: ["Sospice", "OpenSearch", "Predibase", "AutoGPT", "Genesis-GPT"],
  }

  const experiences = [
    {
      company: "CaveAI",
      location: "California",
      position: "Founding Software Engineer GenAI",
      period: "Jun 2024 - Present",
      achievements: [
        "Developed an agent-based recommendation system using a RAG-to-SQL framework, boosting data retrieval efficiency by 30%.",
        "Collaborated with senior engineers to reduce system latency by 25% through optimized RAG design.",
        "Engineered FastAPI backend services and implemented automated CI/CD pipelines on AWS, reducing deployment time by 20%.",
        "Fine-tuned ANN model, enhancing semantic retrieval accuracy by 35%.",
      ],
    },
    {
      company: "Xloop Digital Services",
      location: "California (Remote)",
      position: "Software Engineer",
      period: "Feb 2023 - Apr 2024",
      achievements: [
        "Established and led the Generative AI department, driving a 37% revenue increase through tailored AI solutions.",
        "Optimized OpenAI API usage, reducing costs by 45% via efficient batch processing.",
        "Revamped GovFinder's payment system with Stripe integration, reducing latency and enabling smart subscription management.",
        "Spearheaded development of flagship products (ChatGene, Chat CSV, App-Pilot), expanding services by 70% and boosting client engagement.",
      ],
    },
    {
      company: "NexaSoft Labs",
      location: "Freelance",
      position: "Software Engineer",
      period: "Nov 2021 - Oct 2022",
      achievements: [
        "Developed and deployed scalable software solutions tailored to client needs.",
        "Led projects using Python, Reactjs, and Flask, delivering high-quality applications.",
        "Implemented APIs and optimized backend performance, enhancing reliability.",
      ],
    },
    {
      company: "Rapidobots",
      location: "Pakistan",
      position: "Intern React.js Developer",
      period: "Jul 2021 - Nov 2021",
      achievements: [
        "Engineered detailed software specifications, streamlining sprint processes and reducing time by up to 10%, thereby enhancing project efficiency and team productivity.",
        "Designed and built high performance data monitoring dashboards using Reactjs.",
      ],
    },
  ]

  // Update the projects array to include GitHub preview images
  const projects = [
    {
      title: "GENESIS-GPT",
      description: "Multi-Agent Orchestration Framework",
      tech: ["Python", "SQLite3", "OpenAI API", "Gemini"],
      details: [
        "Modular agent framework built from scratch enabling, for better scalability and easy integration.",
        "Implemented multi-threading with worker agents to optimize task execution and resource utilization.",
        "Collaborated with the open-source community to adhere to industry standards and best practices.",
      ],
      image: "https://opengraph.githubassets.com/1/safimuhammad/Genesis-GPT",
      github: "https://github.com/safimuhammad/Genesis-GPT",
      demo: null,
    },
    {
      title: "GENESIS-Workflow",
      description: "No-code agent builder platform",
      tech: ["Python", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "FastAPI", "Celery", "Reactjs", "Redis"],
      details: [
        "Developed a no-code agent builder platform with drag-and-drop components for creating and scheduling agent workflows.",
        "Designed a scalable microservices architecture to ensure zero downtime.",
        "Integrated Genesis-GPT as the core agent orchestrator for managing agent workflows.",
      ],
      image: "https://opengraph.githubassets.com/1/safimuhammad/Genesis-Workflows",
      github: "https://github.com/safimuhammad/Genesis-Workflows",
      demo: null,
    },
    {
      title: "RecruitFlow",
      description: "AI-powered recruitment platform",
      tech: ["Python", "Reactjs", "NLP", "Machine Learning", "PostgreSQL"],
      details: [
        "Built an AI-powered recruitment platform to streamline the hiring process.",
        "Implemented resume parsing and candidate matching algorithms.",
        "Created an intuitive dashboard for HR professionals to track applicants.",
      ],
      image: "https://opengraph.githubassets.com/1/safimuhammad/RecruitFlow",
      github: "https://github.com/safimuhammad/RecruitFlow",
      demo: null,
    },
  ]

  // Update the hackathons array to include lablab.ai preview images
  const hackathons = [
    {
      title: "Archiflow",
      description: "Interior decoration using GenAI",
      position: "2nd Place",
      event: "3D AI Models Hackathon",
      tech: ["Python", "Reactjs", "OpenAI Shap-E", "3D modeling"],
      details: [
        "Developed a platform converting text descriptions into 3D architectural models.",
        "Built text to 3D model pipeline with contextual understanding using OpenAI Shap-E model.",
        "Created an intuitive UI for users to visualize and modify their designs.",
      ],
      image:
        "https://sjc.microlink.io/gofevIj1h-QRSxacH0xwdTaRO6FFAbxd3Zd6DNfcn-l3hAB6WWH6NjBNozh9r1UnDGsr423Jq8Z0yDYK95PgXw.jpeg",
      url: "https://lablab.ai/event/3d-ai-models-hackathon/maverick/archiflow-dream-design-with-ai",
    },
    {
      title: "MemoriesRevive",
      description: "Heartfelt Talks, Everlasting Bonds",
      position: "Finalist",
      event: "Eleven Labs AI Hackathon",
      tech: ["Python", "React", "ElevenLabs API", "OpenAI"],
      details: [
        "Created a platform to preserve memories of loved ones through AI voice recreation.",
        "Implemented voice cloning technology to maintain authentic conversations.",
        "Designed an emotional interface for users to interact with memories.",
      ],
      image:
        "https://sjc.microlink.io/gofevIj1h-QRSxacH0xwdTaRO6FFAbxd3Zd6DNfcn-l3hAB6WWH6NjBNozh9r1UnDGsr423Jq8Z0yDYK95PgXw.jpeg",
      url: "https://lablab.ai/event/eleven-labs-ai-hackathon/maverick/memoriesrevive-heartfelt-talks-everlasting-bonds",
    },
    {
      title: "FutureSync",
      description: "Transforming Business Dynamics",
      position: "Top 10",
      event: "AI Startup Hackathon Episode 4",
      tech: ["Python", "FastAPI", "React", "Machine Learning"],
      details: [
        "Built a predictive analytics platform for business forecasting.",
        "Implemented machine learning models to analyze market trends.",
        "Created interactive dashboards for business intelligence visualization.",
      ],
      image:
        "https://sjc.microlink.io/gofevIj1h-QRSxacH0xwdTaRO6FFAbxd3Zd6DNfcn-l3hAB6WWH6NjBNozh9r1UnDGsr423Jq8Z0yDYK95PgXw.jpeg",
      url: "https://lablab.ai/event/ai-startup-hackathon-episode-4/enigma/futuresync-transforming-business-dynamics",
    },
    {
      title: "DefendIQ",
      description: "Empowering Military Operations through AI",
      position: "Honorable Mention",
      event: "Llama 2 Hackathon with Clarifai",
      tech: ["Python", "Llama 2", "Clarifai API", "React"],
      details: [
        "Developed an AI system for military tactical analysis and decision support.",
        "Implemented natural language processing for intelligence report analysis.",
        "Created secure communication channels for sensitive information exchange.",
      ],
      image:
        "https://sjc.microlink.io/gofevIj1h-QRSxacH0xwdTaRO6FFAbxd3Zd6DNfcn-l3hAB6WWH6NjBNozh9r1UnDGsr423Jq8Z0yDYK95PgXw.jpeg",
      url: "https://lablab.ai/event/llama-2-hackathon-with-clarifai/enigma/defendiq-empowering-military-operations-through-ai",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cyberpunk grid background with increased effects */}
      <div className="fixed inset-0 z-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-cyan-500"></div>
        ))}
      </div>

      {/* Dynamic scanlines with increased frequency */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {scanlines.map((style, i) => (
          <div
            key={i}
            className="absolute w-full h-[1px] bg-cyan-500/10"
            style={style}
          ></div>
        ))}
      </div>

      {/* Header with navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-cyan-500/30 bg-black/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-black font-bold text-xl">
              MS
            </div>
            <GlitchText text="Muhammad Safi" className="text-xl font-bold" />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#hackathons" className="hover:text-cyan-400 transition-colors">
              Hackathons
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-950"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1nRTK3Tz53ZTDtJN31Mhi8fHlc_jZN-QQ/view?usp=sharing",
                "_blank",
              )
            }
          >
            Resume
          </Button>
        </div>
      </header>

      {/* Hero section with minimal modern font */}
      <section id="about" className="relative min-h-[90vh] flex items-center">
        <GlitchEffect className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 font-semibold">
                Muhammad Safi
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-6 text-cyan-400">
              Software Engineer <span className="text-fuchsia-500">|</span> GenAI Specialist
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl font-light leading-relaxed">
              Specialized in building scalable backend systems and cutting-edge GenAI solutions. Proficient in Python,
              TensorFlow, and various AI frameworks with a passion for creating intelligent, efficient software
              solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-600 hover:to-fuchsia-700 text-white"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1nRTK3Tz53ZTDtJN31Mhi8fHlc_jZN-QQ/view?usp=sharing",
                    "_blank",
                  )
                }
              >
                Resume
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/safimuhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-safi-7210b0207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:safiwahid38@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail size={24} />
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin size={20} className="mr-1" />
                <span>Bay Area, California</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light mb-12 flex items-center">
            <span className="text-cyan-400 mr-2">&lt;</span>
            Experience
            <span className="text-cyan-400 ml-2">/&gt;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/10 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light mb-12 flex items-center">
            <span className="text-fuchsia-400 mr-2">&lt;</span>
            Projects
            <span className="text-fuchsia-400 ml-2">/&gt;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons section */}
      <section id="hackathons" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light mb-12 flex items-center">
            <span className="text-purple-400 mr-2">&lt;</span>
            Hackathons
            <span className="text-purple-400 ml-2">/&gt;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={index} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/10 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light mb-12 flex items-center">
            <span className="text-yellow-400 mr-2">&lt;</span>
            Skills
            <span className="text-yellow-400 ml-2">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/50 backdrop-blur-md border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-light mb-4 text-yellow-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} color="yellow" />
                ))}
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-light mb-4 text-cyan-400">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} color="cyan" />
                ))}
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-fuchsia-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-light mb-4 text-fuchsia-400">Data Handling</h3>
              <div className="flex flex-wrap gap-2">
                {skills.data.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} color="fuchsia" />
                ))}
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-green-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-light mb-4 text-green-400">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} color="green" />
                ))}
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-light mb-4 text-blue-400">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.cloud, ...skills.devops].map((skill, index) => (
                  <SkillBadge key={index} skill={skill} color="blue" />
                ))}
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-light mb-4 text-purple-400">Open-Source Contributions</h3>
              <div className="flex flex-wrap gap-2">
                {skills.openSource.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} color="purple" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-light mb-12 flex items-center">
            <span className="text-cyan-400 mr-2">&lt;</span>
            Contact
            <span className="text-cyan-400 ml-2">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-light mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have any
                questions or just want to say hi!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400" size={20} />
                  <a href="mailto:safiwahid38@gmail.com" className="hover:text-cyan-400 transition-colors">
                    safiwahid38@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-fuchsia-400" size={20} />
                  <a
                    href="https://github.com/safimuhammad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fuchsia-400 transition-colors"
                  >
                    github.com/safimuhammad
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-yellow-400" size={20} />
                  <a
                    href="https://www.linkedin.com/in/muhammad-safi-7210b0207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    linkedin.com/in/muhammad-safi-7210b0207
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-green-400" size={20} />
                  <span>Bay Area, California 94577</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/30 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Muhammad Safi. All rights reserved.</p>
          <p className="text-gray-600 mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}

