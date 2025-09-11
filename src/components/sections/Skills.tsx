import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
        { name: 'Three.js', level: 78 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      category: 'Design & Creative',
      skills: [
        { name: 'Graphic Design', level: 92 },
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe Illustrator', level: 88 },
        { name: 'Adobe After Effects', level: 85 },
        { name: 'Figma', level: 88 }
      ]
    }
  ]

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'Vue.js', 
    'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL',
    'Tailwind CSS', 'Framer Motion', 'Three.js', 'Git', 'Linux', 'Figma',
    'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Graphic Design'
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a Full Stack Developer and Graphic Designer with expertise in both technical development 
            and creative design. I combine programming skills with visual creativity to deliver 
            comprehensive digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="glass-effect p-6"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + index * 0.1, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
                className="px-4 py-2 bg-dark-700/50 border border-primary-500/30 rounded-full text-gray-300 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
