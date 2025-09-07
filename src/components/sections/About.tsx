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
                I'm a passionate developer based in Edmonton, Alberta, who loves creating innovative 
                digital solutions that make a difference. With a strong foundation in 
                modern web technologies and a keen eye for user experience, I transform 
                complex ideas into elegant, functional applications.
              </p>
              <p>
                My journey in technology has been driven by curiosity and a constant 
                desire to learn and grow. I believe in writing clean, maintainable code 
                and creating digital experiences that not only look stunning but also 
                deliver exceptional performance.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I'm always excited about the next challenge 
                and opportunity to create something amazing.
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button className="cyber-button">
                <span>Download Resume</span>
              </button>
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
                <div className="text-2xl font-bold text-primary-400 mb-1">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">20+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
