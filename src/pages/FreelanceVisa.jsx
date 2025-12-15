import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight, FaFileAlt, FaUserTie, FaUsers, FaGlobe, FaBriefcase, FaClock, FaShieldAlt, FaRocket, FaIdCard, FaHandshake, FaDollarSign, FaQuestionCircle, FaCertificate, FaPortrait, FaHeadset, FaPhone, FaWhatsapp, FaStar, FaBuilding } from 'react-icons/fa'

const FreelanceVisa = () => {
  const packageInclusions = [
    {
      icon: <FaUserTie />,
      title: 'Freelance Permit - 1 Year Validity',
      description: 'Renewable annually, allowing you to carry out your freelance activities legally in the UAE.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Co-working Lease Agreement - 1 Year Validity',
      description: 'Includes access to co-working space within the Free Zone.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Freelance Visa - 2 Years Validity',
      description: 'Issued under the Free Zone Authority with full legal residency rights.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Medical Test',
      description: 'Assistance with the mandatory medical test required for visa issuance.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Biometric & Emirates ID',
      description: 'Support with biometric appointment and Emirates ID processing.'
    },
    {
      icon: <FaUserTie />,
      title: 'Basic Health Insurance',
      description: 'Provided as per UAE requirements (coverage excludes Dubai and Abu Dhabi).'
    }
  ]

  const documentsRequired = [
    'Passport copy (2-page spread)',
    'Passport cover photo (both sides)',
    'Passport-size photo (white background)',
    'Visa cancellation document / Visit visa copy',
    'Previous residence visa - if applicable',
    'Previous Emirates ID - if applicable',
    'Mobile number',
    'Email ID',
    'Attested degree - if applicable',
    'Chosen profession from approved list',
    'Father\'s name',
    'Mother\'s name',
    'Spouse\'s name',
    'Religion and faith'
  ]

  const packageBenefits = [
    {
      icon: <FaUsers />,
      title: 'Eligibility to Sponsor Dependents',
      description: 'You can sponsor your family under your freelance visa. The commonly used profession \'PR Specialist\' does not require an attested degree and is exempt from the AED 3,000 immigration security deposit normally required for dependents.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Access to Co-working Facilities',
      description: 'Enjoy access to a professional co-working space inside the Free Zone Authority premises, ideal for meetings and networking.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Access to Corporate Support Letters',
      description: 'You can request official documents such as Salary Certificates, NOCs, and other corporate letters directly from the Free Zone Authority (Service charges will apply based on the type of request).'
    }
  ]

  const whyChoosePoints = [
    '100% legal freelance operation under a UAE Free Zone',
    '2-year residence visa with renewable freelance license',
    'No physical office requirement',
    'Affordable yearly cost',
    'Suitable for consultants, professionals, creatives, and independent workers'
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
    <div className="freelance-visa-page-modern">
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
            <Link to="/" className="back-link-modern">
              ← Back to Home
            </Link>
            <h1 className="hero-title-modern">Free Zone Freelance Visa</h1>
            <p className="hero-subtitle-modern">
              Get your UAE freelance visa and work independently with complete legal compliance and flexibility
            </p>
            <div className="price-box-modern">
              <div className="price-amount-modern">AED 9,999</div>
              <div className="price-package-modern">Yearly Package (Renewable)</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Package Overview</h2>
            <p className="package-overview-text">
              The Free Zone Freelance Visa Package is a perfect choice for professionals seeking independence and flexibility to live and work legally in the UAE. This package allows you to operate as a licensed freelancer under a recognized UAE Free Zone authority, enjoy a professional workspace, and secure a 2-year residence visa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header-modern"
            style={{ marginTop: '60px' }}
          >
            <h2 className="section-title-modern">Package Inclusions</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="package-inclusions-grid"
          >
            {packageInclusions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="package-inclusion-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="package-inclusion-icon">
                  {item.icon}
                </div>
                <h3 className="package-inclusion-title">{item.title}</h3>
                <p className="package-inclusion-desc">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-modern documents-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="documents-header-modern"
          >
            <FaFileAlt className="documents-icon" />
            <h2 className="section-title-modern">Documents & Details Required</h2>
          </motion.div>

          <div className="documents-list-modern">
            {documentsRequired.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="document-item-modern"
              >
                <FaCheckCircle className="document-check-icon" />
                <span>{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern cost-payment-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">$ Cost and Payment Terms</h2>
          </motion.div>

          <div className="cost-payment-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="package-fees-card"
            >
              <div className="cost-card-icon">
                <FaDollarSign />
              </div>
              <h3 className="cost-card-title">Package Fees</h3>
              <div className="fee-item">
                <span>Freelance Visa Package:</span>
                <strong className="fee-amount">AED 9,999/year</strong>
              </div>
              <div className="fee-item">
                <span>Research & Knowledge Fee:</span>
                <strong className="fee-amount">AED 25/year</strong>
              </div>
              <div className="fee-item">
                <span>Pre-approval Fee:</span>
                <strong className="fee-amount">AED 524*</strong>
              </div>
              <p className="fee-note">* Applicable for certain nationalities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="payment-details-card"
            >
              <div className="cost-card-icon">
                <FaCheckCircle />
              </div>
              <h3 className="cost-card-title">Payment Details</h3>
              <div className="payment-detail-item">
                <FaUserTie className="payment-icon" />
                <div>
                  <strong>Visa Validity</strong>
                  <span>2 Years</span>
                </div>
              </div>
              <div className="payment-detail-item">
                <FaFileAlt className="payment-icon" />
                <div>
                  <strong>Payment Terms</strong>
                  <span>Payable in two terms (1st year and 2nd year)</span>
                </div>
              </div>
              <div className="payment-detail-item">
                <FaDollarSign className="payment-icon" />
                <div>
                  <strong>$ Payment Methods</strong>
                  <div className="payment-methods">
                    <div><FaCheckCircle className="method-check" /> Direct bank transfer to Free Zone Authority</div>
                    <div><FaCheckCircle className="method-check" /> Payment link (2.5% fee applies)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="important-note-card"
          >
            <FaStar className="note-icon" />
            <div>
              <strong>Important Note</strong>
              <p>If you do not renew your package in the second year, both your freelance permit and freelance visa will be automatically cancelled by the Free Zone Authority.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-modern benefits-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Benefits of the Freelance Visa Package</h2>
          </motion.div>

          <div className="package-benefits-grid">
            {packageBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="package-benefit-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="package-benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="package-benefit-title">{benefit.title}</h3>
                <p className="package-benefit-desc">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern why-choose-package-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Why Choose This Package?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="why-choose-list-box"
          >
            <ul className="why-choose-list">
              {whyChoosePoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheckCircle className="why-choose-check" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>


      <section className="freelance-cta-section-blue">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="freelance-cta-content-blue"
          >
            <h2 className="freelance-cta-title-blue">Ready to Start Your Freelance Journey in UAE?</h2>
            <p className="freelance-cta-desc-blue">
              Get expert guidance and start your freelance visa application today. Our team is ready to help you every step of the way.
            </p>
            <div className="freelance-cta-buttons-blue">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-white">
                  Get Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/971554182103" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:+971554182103" className="btn btn-secondary">
                  <FaPhone /> Call +971 55 418 2103
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FreelanceVisa

