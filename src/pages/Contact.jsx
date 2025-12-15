import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock, FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaCheckCircle, FaHeadset, FaCalendar, FaGlobe } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', content: 'info@easyfreezonesetup.com', link: 'mailto:info@easyfreezonesetup.com' },
    { icon: <FaPhone />, title: 'Phone', content: '+971 XX XXX XXXX', link: 'tel:+971XXXXXXXXX' },
    { icon: <FaWhatsapp />, title: 'WhatsApp', content: '+971 XX XXX XXXX', link: 'https://wa.me/971XXXXXXXXX' },
    { icon: <FaMapMarkerAlt />, title: 'Address', content: 'Dubai, United Arab Emirates', link: null }
  ]

  const officeLocations = [
    { city: 'Dubai', address: 'Business Bay, Dubai, UAE', icon: <FaMapMarkerAlt /> },
    { city: 'Abu Dhabi', address: 'Al Maryah Island, Abu Dhabi, UAE', icon: <FaMapMarkerAlt /> },
    { city: 'Sharjah', address: 'Sharjah Media City, Sharjah, UAE', icon: <FaMapMarkerAlt /> }
  ]

  const whyContact = [
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Round-the-clock assistance for all your queries' },
    { icon: <FaCheckCircle />, title: 'Expert Advice', desc: 'Get guidance from experienced business setup professionals' },
    { icon: <FaClock />, title: 'Fast Response', desc: 'We respond to all inquiries within 24 hours' },
    { icon: <FaCalendar />, title: 'Free Consultation', desc: 'Schedule a free consultation to discuss your needs' }
  ]

  const faqs = [
    { q: 'How quickly can you set up my business?', a: 'Most free zone setups can be completed in 2-3 working days without physical presence.' },
    { q: 'Do I need to visit UAE for business setup?', a: 'No, we can handle the entire process remotely for most free zones.' },
    { q: 'What documents are required?', a: 'Typically passport copies, photos, and business plan. We\'ll provide a complete checklist.' },
    { q: 'Can you help with visa processing?', a: 'Yes, we provide complete visa processing services for investors and employees.' }
  ]

  return (
    <div className="contact-page-modern">
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
              Contact
            </motion.span>
            <h1 className="hero-title-modern">Get In Touch</h1>
            <p className="hero-subtitle-modern">Let's discuss how we can help you set up your business</p>
          </motion.div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="section-modern why-contact-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Why Contact Us</span>
            <h2 className="section-title-modern">We're Here to Help</h2>
            <p className="section-description-modern">Get expert guidance and support throughout your business setup journey</p>
          </motion.div>

          <div className="why-contact-grid">
            {whyContact.map((item, index) => (
              <motion.div
                key={index}
                className="why-contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="why-contact-icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="why-contact-title">{item.title}</h3>
                <p className="why-contact-desc">{item.desc}</p>
                <div className="why-contact-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="section-modern contact-main-section">
        <div className="container-modern">
          <div className="contact-content-modern">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="contact-info-modern"
            >
              <span className="section-label-modern">Contact Information</span>
              <h2 className="section-title-modern">Let's Connect</h2>
              <p className="contact-info-description">
                Have questions about our services? We're here to help. 
                Reach out to us through any of the channels below.
              </p>

              <div className="contact-info-list-modern">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link || '#'}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="contact-info-item-modern"
                  >
                    <motion.div
                      className="contact-icon-wrapper-modern"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="contact-info-content-modern">
                      <h4 className="contact-info-title-modern">{info.title}</h4>
                      <p className="contact-info-text-modern">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-section-modern">
                <h4 className="social-section-title">Follow Us</h4>
                <div className="social-icons-modern">
                  <motion.a
                    href="#"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="contact-form-wrapper-modern"
            >
              <div className="form-header-modern">
                <h3 className="form-title-modern">Send Us a Message</h3>
                <p className="form-subtitle-modern">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form-modern">
                <div className="form-group-modern">
                  <label htmlFor="name" className="form-label-modern">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="form-input-modern"
                  />
                </div>

                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label htmlFor="email" className="form-label-modern">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="form-input-modern"
                    />
                  </div>

                  <div className="form-group-modern">
                    <label htmlFor="phone" className="form-label-modern">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone"
                      className="form-input-modern"
                    />
                  </div>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="service" className="form-label-modern">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input-modern form-select-modern"
                  >
                    <option value="">Select a service</option>
                    <option value="free-zone-setup">Free Zone Business Setup</option>
                    <option value="mainland-setup">Mainland Business Setup</option>
                    <option value="visa-processing">Visa Processing</option>
                    <option value="bank-account">Bank Account Opening</option>
                    <option value="tax-registration">Tax Registration & Filing</option>
                    <option value="bookkeeping">Bookkeeping Services</option>
                    <option value="consulting">Business Consulting</option>
                  </select>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="message" className="form-label-modern">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your requirements and we'll provide a customized solution..."
                    className="form-input-modern form-textarea-modern"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn-submit-modern"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane /> <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="section-modern office-locations-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Our Offices</span>
            <h2 className="section-title-modern">Visit Our Locations</h2>
            <p className="section-description-modern">We have offices across UAE to serve you better</p>
          </motion.div>

          <div className="office-locations-grid">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                className="office-location-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="office-icon-wrapper">
                  {office.icon}
                </div>
                <h3 className="office-city">{office.city}</h3>
                <p className="office-address">{office.address}</p>
                <div className="office-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-modern contact-faq-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">FAQ</span>
            <h2 className="section-title-modern">Frequently Asked Questions</h2>
            <p className="section-description-modern">Quick answers to common questions about our services</p>
          </motion.div>

          <div className="contact-faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="contact-faq-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="faq-number">0{index + 1}</div>
                <h4 className="faq-question">{faq.q}</h4>
                <p className="faq-answer">{faq.a}</p>
                <div className="faq-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS */}
      <section className="section-modern business-hours-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="business-hours-card"
          >
            <div className="hours-icon-wrapper">
              <FaClock />
            </div>
            <div className="hours-content">
              <h3 className="hours-title">Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">9:00 AM - 6:00 PM GST</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">10:00 AM - 4:00 PM GST</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">Closed</span>
                </div>
              </div>
              <p className="hours-note">24/7 support available via WhatsApp and email</p>
            </div>
            <div className="hours-accent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

