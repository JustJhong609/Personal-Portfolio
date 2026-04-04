import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Smartphone } from 'lucide-react'

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Database,
      title: 'Full Stack',
      description: 'Expertise in both frontend and backend technologies'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Modern frameworks and cutting-edge web standards'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach with pixel-perfect designs'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Panel - Content */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">
              Hello, I'm Jhong
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer and UI/UX Designer based in Tankulan, Manolo Fortich, Bukidnon, 
                currently pursuing my Bachelor of Science in Information Technology at Northern Bukidnon State College.
              </p>
              <p>
                I specialize in designing and developing responsive web applications using React, Next.js, and Ionic React. 
                My expertise spans from implementing intuitive UI/UX principles to integrating APIs and backend services 
                using Node.js, PHP, MySQL, and Supabase. I'm passionate about building data visualization dashboards 
                and creating user-centric solutions through iterative feedback.
              </p>
              <p>
                As a UI/UX Designer & System Developer, I led the design and development of a web-based OCR & Entity 
                Extraction System for my capstone project, integrating Tesseract.js for image-to-text processing. 
                I focus on creating user interfaces that prioritize clarity, accessibility, and research usability.
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://drive.google.com/file/d/1OF8kY3fBwVz6HK_U6VLwpM1x8aHQUMQ4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button"
              >
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Panel - Skills & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8">
              <h4 className="text-xl font-bold mb-6 gradient-text">What I Do</h4>
              <div className="grid gap-6">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-white">
                        {item.title}
                      </h5>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">4</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">BS IT</div>
                <div className="text-gray-400 text-sm">NBSC Student</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
