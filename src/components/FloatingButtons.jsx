import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

const FloatingButtons = () => {
  const whatsappNumber = '971554182103'
  const phoneNumber = '+971554182103'
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about your services.')

  return (
    <div className="floating-buttons">
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </motion.a>
      <motion.a
        href={`tel:${phoneNumber}`}
        className="floating-btn floating-btn-call"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call"
      >
        <FaPhone />
      </motion.a>
    </div>
  )
}

export default FloatingButtons



