import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glowing-text"
          >
            <span className="text-gradient">SATYAM RANA</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Backend and Android/IOS Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Building <span className="highlight">innovative</span> web experiences with <span className="highlight">modern</span> technologies
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <motion.a 
              href="https://github.com/satyam232" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#ff6b6b' }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/satyam-rana-68938117b" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#ff6b6b' }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="anime-avatar">
            <div className="avatar-container">
              <div className="avatar-circle"></div>
              <div className="avatar-glow"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;