import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaRocket, FaEye, FaBullseye, FaCheckCircle, FaArrowRight, FaUserTie, FaGavel, FaChartLine, FaUserCircle } from 'react-icons/fa'

const About = () => {
  const coreValues = [
    {
      icon: <FaBullseye />,
      title: 'Transparency',
      description: 'Clear, honest communication with no hidden fees or surprises throughout the process.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service and exceeding client expectations.'
    },
    {
      icon: <FaUserTie />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We tailor our services to meet your specific business needs.'
    }
  ]

  const missionVision = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'Our mission is to empower entrepreneurs and businesses by providing streamlined company formation services, personalized guidance, and end-to-end support. We aim to eliminate complexities, reduce delays, and deliver value-driven solutions that allow our clients to start operating with confidence and ease.'
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'Our vision is to become the most trusted business setup partner in the UAE—recognized for our transparency, professionalism, and commitment to helping clients achieve their goals. We aspire to build long-lasting relationships and play a key role in shaping the success stories of businesses across industries.'
    }
  ]

  const teamMembers = [
    {
      name: 'Mohamed Ramshadali',
      role: 'Co-founder, Managing Director',
      description: 'Leading our company with extensive expertise in UAE business formation and strategic business development.',
      icon: <FaUserTie />
    },
    {
      name: 'Seba Nageeb',
      role: 'Legal Consultant',
      description: 'Expert legal consultant specializing in UAE business law and regulatory compliance with comprehensive knowledge of Free Zone regulations.',
      icon: <FaUserCircle />
    },
    {
      name: 'Deepanshu Mendiratta',
      role: 'Business Setup Advisor',
      description: 'Expert business advisor specializing in UAE company formation and Free Zone regulations.',
      icon: <FaUserTie />
    },
    {
      name: 'Fathimath Minha',
      role: 'Head of Marketing',
      description: 'Leading our marketing initiatives and client communication strategies to ensure exceptional service delivery.',
      icon: <FaUserCircle />
    }
  ]

  const whyChoose = [
    { icon: <FaCheckCircle />, title: 'Company Formation', desc: 'Assisting in the establishment of businesses across various free zones in the UAE, ensuring compliance with all legal requirements' },
    { icon: <FaGavel />, title: 'Licensing & Registration', desc: 'Managing the entire process of obtaining necessary licenses and registrations for your business operations' },
    { icon: <FaRocket />, title: 'Visa Processing', desc: 'Facilitating visa applications for business owners, employees, and their families, ensuring a smooth relocation process' },
    { icon: <FaChartLine />, title: 'Bank Account Assistance', desc: 'Guiding clients through the process of opening corporate bank accounts with reputable financial institutions in the UAE' }
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
            <h1 className="hero-title-modern">About Us</h1>
            <p className="hero-subtitle-modern">At Easy Free Zone Setup, we specialize in helping entrepreneurs, startups, and established businesses seamlessly establish their presence in the UAE. Our expertise lies in simplifying the complex process of company formation, ensuring our clients can focus on growing their business while we handle the legal, administrative, and regulatory requirements. With a client-first approach, we provide tailored solutions that make setting up in the UAE free zones smooth, transparent, and hassle-free.</p>
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
                Our Story
              </motion.span>
              <h2 className="section-title-modern">Our Story</h2>
              <div className="about-text-content">
              <p>
                Easy Free Zone Setup was founded with a clear purpose—to make UAE business setup simple, efficient, and accessible for everyone. We recognized that many aspiring entrepreneurs and businesses face challenges in navigating company formation procedures, so we built our consultancy on the principles of clarity, trust, and results. Today, we take pride in being a reliable partner for businesses who want to launch, grow, and succeed in the UAE.
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


      {/* CORE VALUES & MISSION VISION */}
      <section className="about-dark-section" style={{ background: '#000000', backgroundColor: '#000000' }}>
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-dark"
          >
            <span className="section-label-dark">Core Values</span>
            <h2 className="section-title-dark">Why Choose Us?</h2>
          </motion.div>

          <div className="values-list-modern">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="value-item-modern"
              >
                <div className="value-icon-wrapper-dark">
                  {value.icon}
                </div>
                <div className="value-content-dark">
                  <h3 className="value-title-dark">{value.title}</h3>
                  <p className="value-description-dark">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mission-vision-list-modern">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mission-vision-item-modern"
              >
                <div className="mission-vision-icon-dark">
                  {item.icon}
                </div>
                <div className="mission-vision-content-dark">
                  <h3 className="mission-vision-title-dark">{item.title}</h3>
                  <p className="mission-vision-desc-dark">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-light"
          >
            <span className="section-label-light">Our Team</span>
            <h2 className="section-title-light">Meet Our Expert Team</h2>
            <p className="section-description-light">Dedicated professionals committed to your business success</p>
          </motion.div>

          <div className="team-grid-new">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-item-new"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="team-avatar-new">
                  {member.icon}
                </div>
                <h3 className="team-name-new">{member.name}</h3>
                <p className="team-role-new">{member.role}</p>
                <p className="team-description-new">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="about-services-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Our Services</span>
            <h2 className="section-title-modern">Comprehensive Business Setup Solutions</h2>
            <p className="section-description-modern">End-to-end services to ensure a seamless business setup experience</p>
          </motion.div>

          <div className="services-list-new">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="service-item-new"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="service-icon-new">
                  {item.icon}
                </div>
                <div className="service-content-new">
                  <h3 className="service-title-new">{item.title}</h3>
                  <p className="service-desc-new">{item.desc}</p>
                </div>
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
            <h2 className="about-cta-title">Ready to Start Your UAE Business Journey?</h2>
            <p className="about-cta-desc">Join thousands of successful entrepreneurs who chose Easy Free Zone Setup for their business formation needs. Let our expert team guide you through every step of the process.</p>
            <div className="about-cta-buttons">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-primary btn-large">
                  Get Free Consultation <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/services" className="btn btn-primary btn-large">
                  View Our Services <FaArrowRight />
                </Link>
              </motion.div>
            </div>
            <div className="about-cta-accent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

