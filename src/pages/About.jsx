import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaAward, FaUsers, FaGlobeAmericas, FaHandshake, FaRocket, FaEye, FaBullseye, FaCheckCircle, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: <FaAward />, number: '500+', label: 'Companies Setup' },
    { icon: <FaUsers />, number: '15+', label: 'Years Experience' },
    { icon: <FaGlobeAmericas />, number: '50+', label: 'Countries Served' },
    { icon: <FaHandshake />, number: '98%', label: 'Client Satisfaction' }
  ]

  const values = [
    {
      title: 'Integrity',
      description: 'We operate with the highest standards of honesty and transparency in all our dealings.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring quality outcomes.'
    },
    {
      title: 'Innovation',
      description: 'We leverage the latest tools and processes to deliver efficient solutions.'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, supporting their growth journey.'
    }
  ]

  const missionVision = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'To empower entrepreneurs and businesses worldwide by providing seamless, transparent, and efficient UAE business setup solutions that enable them to achieve their global ambitions.'
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'To become the most trusted and innovative business setup consultancy in the UAE, recognized for our commitment to client success and excellence in service delivery.'
    }
  ]

  const milestones = [
    { year: '2008', title: 'Company Founded', desc: 'Started with a vision to simplify UAE business setup' },
    { year: '2015', title: '500+ Companies', desc: 'Helped over 500 businesses establish in UAE' },
    { year: '2020', title: 'Digital Transformation', desc: 'Launched online platform for remote setup' },
    { year: '2024', title: 'Industry Leader', desc: 'Recognized as top business setup consultancy' }
  ]

  const testimonials = [
    {
      text: "Outstanding service from start to finish. The team guided us through every step of setting up our free zone company. Highly professional and responsive.",
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      rating: 5
    },
    {
      text: "The transparency and expertise shown by Easy Free Zone Setup is unmatched. They made what seemed complex, incredibly simple.",
      name: 'Michael Chen',
      role: 'Business Owner',
      rating: 5
    },
    {
      text: "Fast, efficient, and reliable. We had our business license in 3 days without even visiting UAE. Exceptional service!",
      name: 'Emma Williams',
      role: 'Entrepreneur',
      rating: 5
    }
  ]

  const whyChoose = [
    { icon: <FaCheckCircle />, title: '15+ Years Experience', desc: 'Proven track record in UAE business setup' },
    { icon: <FaUsers />, title: 'Expert Team', desc: 'Certified professionals with deep industry knowledge' },
    { icon: <FaRocket />, title: 'Fast Processing', desc: '2-3 days setup time for most free zones' },
    { icon: <FaHandshake />, title: '100% Transparency', desc: 'No hidden fees, clear pricing structure' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="about-page-modern">
      <section className="page-hero-modern">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="page-hero-content-modern"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-badge-modern"
            >
              About Us
            </motion.span>
            <h1 className="hero-title-modern">Your Trusted Partner</h1>
            <p className="hero-subtitle-modern">Leading UAE business setup consultancy with 15+ years of excellence</p>
          </motion.div>
        </div>
      </section>

      <section className="section-modern">
        <div className="container-modern">
          <div className="about-content-modern">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="about-text-modern"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-label-modern"
              >
                Who We Are
              </motion.span>
              <h2 className="section-title-modern">Excellence in Business Setup</h2>
              <div className="about-text-content">
              <p>
                Easy Free Zone Setup is a leading business consultancy firm specializing in 
                UAE free zone company formation and business setup services. With over 15 years 
                of experience, we have helped hundreds of entrepreneurs and businesses establish 
                their presence in the UAE.
              </p>
              <p>
                Our team of experienced professionals understands the complexities of UAE business 
                regulations and free zone requirements. We provide end-to-end solutions, from initial 
                consultation to post-setup support, ensuring a smooth and hassle-free experience.
              </p>
              <p>
                We pride ourselves on our commitment to excellence, integrity, and client satisfaction. 
                Our personalized approach ensures that each client receives tailored solutions that 
                meet their specific business needs.
              </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="about-visual-modern"
            >
              <div className="visual-card-modern">
                <div className="card-glow-modern"></div>
                <div className="card-content-modern">
                  <div className="animated-grid-modern">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="grid-cell-modern"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section-modern">
        <div className="container-modern">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="stats-grid-modern"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="stat-card-modern"
              >
                <div className="stat-icon-wrapper-modern">
                  <motion.div
                    className="stat-icon-modern"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <motion.div
                  className="stat-number-modern"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label-modern">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="values-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Our Values</span>
            <h2 className="section-title-modern">The Principles That Guide Us</h2>
            <p className="section-description-modern">Core values that drive everything we do</p>
          </motion.div>

          <div className="values-grid-modern">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="value-card-modern"
              >
                <div className="value-number-modern">0{index + 1}</div>
                <h3 className="value-title-modern">{value.title}</h3>
                <p className="value-description-modern">{value.description}</p>
                <div className="value-accent-modern"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-modern mission-vision-section">
        <div className="container-modern">
          <div className="mission-vision-grid">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                className="mission-vision-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="mission-vision-icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="mission-vision-title">{item.title}</h3>
                <p className="mission-vision-desc">{item.description}</p>
                <div className="mission-vision-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section-modern milestones-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Our Journey</span>
            <h2 className="section-title-modern">Key Milestones</h2>
            <p className="section-description-modern">Our growth story and achievements over the years</p>
          </motion.div>

          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="milestone-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h4 className="milestone-title">{milestone.title}</h4>
                  <p className="milestone-desc">{milestone.desc}</p>
                </div>
                <div className="milestone-dot"></div>
                {index < milestones.length - 1 && <div className="milestone-line"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-modern why-choose-about-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Why Choose Us</span>
            <h2 className="section-title-modern">What Sets Us Apart</h2>
            <p className="section-description-modern">Reasons why businesses trust us for their UAE setup</p>
          </motion.div>

          <div className="why-choose-grid-about">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="why-choose-card-about"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="why-choose-icon-about"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="why-choose-title-about">{item.title}</h3>
                <p className="why-choose-desc-about">{item.desc}</p>
                <div className="why-choose-accent-about"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-modern about-testimonials-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Testimonials</span>
            <h2 className="section-title-modern">What Our Clients Say</h2>
            <p className="section-description-modern">Real feedback from businesses we've helped</p>
          </motion.div>

          <div className="about-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="about-testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="testimonial-quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="testimonial-stars-about">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text-about">"{testimonial.text}"</p>
                <div className="testimonial-author-about">
                  <strong className="author-name-about">{testimonial.name}</strong>
                  <span className="author-role-about">{testimonial.role}</span>
                </div>
                <div className="testimonial-accent-about"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-modern about-cta-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-cta-card"
          >
            <h2 className="about-cta-title">Ready to Start Your Business Journey?</h2>
            <p className="about-cta-desc">Let's discuss how we can help you establish your business in UAE</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-primary-modern btn-large-modern">
                Get Started <FaArrowRight />
              </Link>
            </motion.div>
            <div className="about-cta-accent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

