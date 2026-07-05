import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp, ExternalLink, Github, Eye } from 'lucide-react'

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const featuredProjects = [
    {
      id: 1,
      title: 'NORTHERN BUKIDNON STATE COLLEGE Entity Extraction System',
      description: 'Web-based system that extracts and organizes entities from student research abstracts using Dandelion API and Supabase. Features include automated entity extraction, visualization tools, and role-based access for students and faculty.',
      image: '/api/placeholder/400/250',
      tags: ['Dandelion API', 'Supabase', 'Entity Extraction', 'Visualization'],
      category: 'fullstack',
      github: 'https://github.com/JustJhong6099/nbsccite-auth',
      live: 'https://www.nbsc-xtract.tech/',
      featured: true
    },
    {
      id: 7,
      title: 'Digitals',
      description: "A comprehensive diagnostic application for an Alternative Learning System (ALS) Deped Bukidnon with advance analytics and Comprehensive downloadable data's.",
      image: '/api/placeholder/400/250',
      tags: ['Diagnostics', 'Alternative Learning System', 'Advanced Analytics', 'Data Download'],
      category: 'fullstack',
      github: null,
      live: 'https://als-diag-test.vercel.app/',
      featured: true
    },
    {
      id: 9,
      title: 'LANDAS (Learner Access Navigation and Data Analytics System)',
      description: 'Learner Access Navigation and Data Analytics System (LANDAS) Province wide Deped Bukidnon.',
      image: '/api/placeholder/400/250',
      tags: ['Education', 'ALS', 'Portal', 'Analytics'],
      category: 'frontend',
      github: 'https://github.com/JustJhong609/AMS-CLUSTER-I',
      live: 'https://ams-cluster-i.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'BUKIDNON ALS CLUSTER I',
      description: 'A static website for ALS Cluster 1 - Alternative Learning System, built with HTML and Tailwind CSS for easy access to learning resources.',
      image: '/api/placeholder/400/250',
      tags: ['HTML', 'Tailwind CSS', 'Static Site', 'Education'],
      category: 'frontend',
      github: 'https://github.com/JustJhong609/ALS-Cluster-I',
      live: 'https://als-cluster-i.vercel.app/',
      featured: true
    }
  ]

  const moreProjects = [
    {
      id: 2,
      title: 'ALS-AMS',
      description: 'Ionic-based ALS attendance and monitoring login portal built for quick access to the system dashboard and user workflows.',
      image: '/api/placeholder/400/250',
      tags: ['Ionic', 'Login Portal', 'Attendance', 'Monitoring'],
      category: 'mobile',
      github: null,
      live: 'https://ams-ionic.vercel.app/login',
      featured: true
    },
    {
      id: 4,
      title: 'File-Encryption-Decryption',
      description: 'Enterprise-grade file encryption/decryption utility with comprehensive security features, performance optimizations, and production-ready error handling.',
      image: '/api/placeholder/400/250',
      tags: ['Encryption', 'Security', 'File Processing', 'Enterprise'],
      category: 'backend',
      github: 'https://github.com/JustJhong609/File-Encryption-Decryption',
      live: null,
      featured: true
    },
    {
      id: 5,
      title: 'habi-2026',
      description: 'A Vercel-deployed project card for the habi-2026 build, kept compact inside the see more section.',
      image: '/api/placeholder/400/250',
      tags: ['Vercel', 'Deployment', 'Portfolio'],
      category: 'frontend',
      github: null,
      live: 'https://habi-2026.vercel.app/',
      featured: false
    },
    {
      id: 6,
      title: 'green-spaces-manolo',
      description: 'A clean project card for green-spaces-manolo, grouped into the expandable section to keep the layout minimal.',
      image: '/api/placeholder/400/250',
      tags: ['Vercel', 'Landing Page', 'Deployment'],
      category: 'frontend',
      github: null,
      live: 'https://green-spaces-manolo.vercel.app/',
      featured: false
    },
    {
      id: 8,
      title: 'OJT-Hours-Tracker',
      description: 'A simple tracker for OJT hours with logging and summaries for trainees.',
      image: '/api/placeholder/400/250',
      tags: ['Tracker', 'OJT', 'Logging'],
      category: 'backend',
      github: 'https://github.com/JustJhong609/OJT-Hours-Tracker',
      live: null,
      featured: false
    },
    {
      id: 10,
      title: 'GIS-Research',
      description: 'Geospatial research utilities and maps for environmental and community projects.',
      image: '/api/placeholder/400/250',
      tags: ['GIS', 'Mapping', 'Research'],
      category: 'data',
      github: 'https://github.com/JustJhong609/GIS-Research',
      live: null,
      featured: false
    },
    {
      id: 11,
      title: 'PineMap',
      description: 'Interactive mapping project focused on pine tree distribution and related datasets.',
      image: '/api/placeholder/400/250',
      tags: ['Maps', 'Interactive', 'Data'],
      category: 'frontend',
      github: 'https://github.com/JustJhong609/PineMap',
      live: null,
      featured: false
    }
  ]

  const ProjectCard = ({ project, compact = false }: { project: (typeof featuredProjects)[number] | (typeof moreProjects)[number], compact?: boolean }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -8 }}
      className={`glass-effect overflow-hidden group ${compact ? 'border border-white/5' : ''}`}
    >
      <div className="relative overflow-hidden">
        <div className={`w-full ${compact ? 'h-40' : 'h-48'} bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center`}>
          <Eye className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} text-primary-400/50`} />
        </div>
        <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-accent-500 rounded-full text-white hover:bg-accent-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      <div className={compact ? 'p-5' : 'p-6'}>
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold mb-2 text-white group-hover:text-primary-400 transition-colors`}>
          {project.title}
        </h3>
        <p className={`text-gray-400 ${compact ? 'mb-3 text-xs' : 'mb-4 text-sm'} leading-relaxed`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-dark-700/50 text-primary-400 text-xs rounded-full border border-primary-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="mt-12">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowMore((current) => !current)}
            className="cyber-button inline-flex items-center gap-2"
          >
            <span>{showMore ? 'Show Less' : 'See More Projects'}</span>
            {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {moreProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} compact />
                  ))}
                </div>
                <div className="text-center mt-10">
                  <a
                    href="https://github.com/JustJhong609?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    View all repositories on GitHub
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects
