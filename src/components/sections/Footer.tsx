import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-900 border-t border-gray-800">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">
              &lt;Jhong/&gt;
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building digital experiences from Edmonton, Alberta that inspire and engage users worldwide.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 mb-2"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 text-sm"
          >
            <p className="flex items-center justify-center">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2 text-red-400"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              by Jhong © {currentYear}
            </p>
            <p className="mt-2">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
