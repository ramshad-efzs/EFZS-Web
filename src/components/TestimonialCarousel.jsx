import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  return (
    <div className="testimonials-carousel-modern">
      <div className="carousel-container-modern">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="testimonial-slide-modern"
          >
            <div className="testimonial-card-modern-new">
              <div className="quote-marks-modern">
                <span className="quote-mark-left">"</span>
                <span className="quote-mark-right">"</span>
              </div>
              <p className="testimonial-text-modern">{testimonials[currentIndex].text}</p>
              <div className="testimonial-divider-modern"></div>
              <div className="testimonial-footer-modern">
                <div className="author-info-modern">
                  <strong className="author-name-modern">{testimonials[currentIndex].name}</strong>
                  <span className="country-badge-modern">{testimonials[currentIndex].country}</span>
                </div>
                <div className="stars-modern">★★★★★</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button 
          className="carousel-nav-modern carousel-nav-prev"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </motion.button>
        <motion.button 
          className="carousel-nav-modern carousel-nav-next"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </motion.button>
      </div>

      <div className="carousel-dots-modern">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`carousel-dot-modern ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel

