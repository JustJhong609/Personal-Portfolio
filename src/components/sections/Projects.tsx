import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const projects = [
    {
      id: 1,
      title: 'NORTHERN BUKIDNON STATE COLLEGE Entity Extraction System',
      description: 'Web-based system that extracts and organizes entities from student research abstracts using Dandelion API and Supabase. Features include automated entity extraction, visualization tools, and role-based access for students and faculty.',
      image: '/api/placeholder/400/250',
      tags: ['Dandelion API', 'Supabase', 'Entity Extraction', 'Visualization'],
      category: 'fullstack',
      github: 'https://github.com/JustJhong6099/nbsccite-auth',
      live: 'https://github.com/JustJhong6099/nbsccite-auth',
      featured: true
    },
    {
      id: 2,
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
      id: 3,
      title: 'BUKIDNON ALS CLUSTER I',
      description: 'A static website for ALS Cluster 1 – Alternative Learning System, built with HTML, and Tailwind CSS cdn for easy access to learning resources.',
      image: '/api/placeholder/400/250',
      tags: ['HTML', 'Tailwind CSS', 'Static Site', 'Education'],
      category: 'frontend',
      github: 'https://github.com/JustJhong609/ALS-Cluster-I',
      live: 'https://als-cluster-i.vercel.app/',
      featured: true
    }
  ]

  const filters = ['all', 'frontend', 'backend', 'fullstack', 'mobile']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 capitalize ${
                filter === filterType
                  ? 'border-primary-500 text-primary-400 bg-primary-500/10'
                  : 'border-gray-600 text-gray-400 hover:border-primary-500/50 hover:text-primary-400'
              }`}
            >
              {filterType}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-effect overflow-hidden group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-primary-400/50" />
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

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
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
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/JustJhong609?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-block"
          >
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
