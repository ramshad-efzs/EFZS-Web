import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Guides = () => {
  const guides = [
    {
      title: 'Free Zone Setup Checklist',
      desc: 'Download our comprehensive checklist for free zone company setup',
      type: 'PDF Guide'
    },
    {
      title: 'Visa Application Guide',
      desc: 'Step-by-step guide for UAE visa applications',
      type: 'PDF Guide'
    },
    {
      title: 'Bank Account Opening Requirements',
      desc: 'Complete list of documents needed for bank account opening',
      type: 'PDF Guide'
    }
  ]

  return (
    <div className="resources-page-modern">
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
              Guides
            </motion.span>
            <h1 className="hero-title-modern">Downloadable Guides</h1>
            <p className="hero-subtitle-modern">Free comprehensive guides to help you with your business setup journey</p>
          </motion.div>
        </div>
      </section>

      <section className="section-modern guides-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Guides</span>
            <h2 className="section-title-modern">Downloadable Guides</h2>
            <p className="section-description-modern">Free comprehensive guides to help you with your business setup journey</p>
          </motion.div>

          <div className="guides-grid-modern">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="guide-card-modern"
              >
                <motion.div
                  className="guide-icon-modern"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  📥
                </motion.div>
                <h3 className="guide-title-modern">{guide.title}</h3>
                <p className="guide-desc-modern">{guide.desc}</p>
                <span className="guide-type-modern">{guide.type}</span>
                <Link to="/contact" className="btn btn-secondary">
                  Download Guide <FaArrowRight />
                </Link>
                <div className="guide-accent-modern"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guides

