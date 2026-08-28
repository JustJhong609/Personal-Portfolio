import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const Certificates: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const certificatesList = [
    '/Certificates/Best Paper Awards.png',
    '/Certificates/Certificate_for_Introduction_to_Open_Distance_eLearning_(ODeL)_(September_2024)-CA_77946_page-0001.jpg',
    '/Certificates/Certificate_for_Introduction_to_Technology_for_Teaching_and_Learning_(September_2024)-CA_74679_page-0001.jpg',
    '/Certificates/Certificate_for_Principles_of_Graphic_Design_(April_2024)-CA_73825 (1)_page-0001.jpg',
    '/Certificates/AKO 1 .jpg',
    '/Certificates/AKO 2 .jpg',
    '/Certificates/AKO 3 .jpg',
    '/Certificates/AKO 4.jpg',
    '/Certificates/ALJHON AKO .jpg'
  ]

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Certificates & <span className="gradient-text">Recognitions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my academic recognitions, professional training, and industry certifications.
          </p>
        </motion.div>

        {/* Carousel Slider */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark-900/80 hover:bg-primary-500 rounded-full text-white border border-white/10 hover:border-primary-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block focus:opacity-100 cursor-pointer shadow-lg shadow-black/50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-4 px-2"
          >
            {certificatesList.map((certPath, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedImage(certPath)}
                className="snap-center shrink-0 w-[280px] sm:w-[350px] aspect-[4/3] rounded-xl overflow-hidden glass-effect border border-white/10 hover:border-primary-400/50 transition-all duration-300 shadow-md hover:shadow-primary-500/10 cursor-pointer"
                aria-label={`View certificate ${idx + 1}`}
              >
                <img
                  src={certPath}
                  alt={`Certificate ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark-900/80 hover:bg-primary-500 rounded-full text-white border border-white/10 hover:border-primary-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block focus:opacity-100 cursor-pointer shadow-lg shadow-black/50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-dark-800/80 hover:bg-primary-500 rounded-full text-white transition-all duration-300 cursor-pointer border border-white/10 hover:border-primary-400/50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged certificate view"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates
