import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { random } from 'maath'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import * as THREE from 'three'

// 3D Star field component
function Stars(props: any) {
  const ref = useRef<THREE.Group>(null)
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], [])
  
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#3b82f6" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const Hero: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-primary-400 text-lg sm:text-xl mb-4 font-tech"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Jhong</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-300"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I craft exceptional digital experiences that combine cutting-edge technology 
            with innovative design to bring ideas to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="cyber-button">
              <span>View My Work</span>
            </button>
            <button className="cyber-button border-accent-500 text-accent-400 hover:text-dark-900">
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/JustJhong609', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:20211199@nbsc.edu.ph', label: 'Email' },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
