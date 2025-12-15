import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const Resources = () => {
  const articles = [
    {
      title: 'Complete Guide to Setting Up a Business in Dubai Free Zone',
      excerpt: 'Everything you need to know about starting your business in Dubai free zones, including requirements, costs, and timelines.',
      category: 'Business Setup',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: '📄'
    },
    {
      title: 'UAE Free Zone vs Mainland: Which is Right for You?',
      excerpt: 'A comprehensive comparison of free zone and mainland business setup options to help you make the right decision.',
      category: 'Comparison',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: '📊'
    },
    {
      title: 'Understanding UAE Visa Requirements for Business Owners',
      excerpt: 'Complete guide to investor visas, employee visas, and family sponsorship requirements in the UAE.',
      category: 'Visa Services',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: '🛂'
    },
    {
      title: 'Top 10 Free Zones in UAE for Your Business',
      excerpt: 'Detailed overview of the most popular free zones, their benefits, and which industries they serve best.',
      category: 'Free Zones',
      date: 'February 28, 2024',
      readTime: '12 min read',
      image: '🏢'
    },
    {
      title: 'Bank Account Opening in UAE: Step-by-Step Guide',
      excerpt: 'Everything you need to know about opening a corporate bank account in the UAE, including required documents.',
      category: 'Banking',
      date: 'February 20, 2024',
      readTime: '7 min read',
      image: '🏦'
    },
    {
      title: 'UAE Business License Renewal: What You Need to Know',
      excerpt: 'Complete guide to license renewal process, costs, and important deadlines to keep your business compliant.',
      category: 'Compliance',
      date: 'February 15, 2024',
      readTime: '5 min read',
      image: '✅'
    }
  ]

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
              Resources
            </motion.span>
            <h1 className="hero-title-modern">Resources & Guides</h1>
            <p className="hero-subtitle-modern">Expert insights and comprehensive guides to help you navigate UAE business setup</p>
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
            <span className="section-label-modern">Articles</span>
            <h2 className="section-title-modern">Latest Articles</h2>
            <p className="section-description-modern">Stay informed with our expert insights and industry updates</p>
          </motion.div>

          <div className="articles-grid-modern">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="article-card-modern"
              >
                <div className="article-image-modern">{article.image}</div>
                <div className="article-meta-modern">
                  <span className="article-category-modern">{article.category}</span>
                  <span className="article-date-modern">{article.date}</span>
                </div>
                <h3 className="article-title-modern">{article.title}</h3>
                <p className="article-excerpt-modern">{article.excerpt}</p>
                <div className="article-footer-modern">
                  <span className="read-time-modern">{article.readTime}</span>
                  <Link to="#" className="read-more-modern">
                    Read More <FaArrowRight />
                  </Link>
                </div>
                <div className="article-accent-modern"></div>
              </motion.article>
            ))}
          </div>
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
                <Link to="/contact" className="btn-secondary-modern">
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

export default Resources

