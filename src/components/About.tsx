import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/About.scss';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm <span className="highlight">Satyam Rana</span>, a passionate Full Stack Developer from Bhubaneshwar, Odisha. Currently pursuing my B.Tech in Computer Science Engineering at Vellore Institute of Technology.
            </p>
            <p>
              I specialize in building exceptional digital experiences with modern technologies. My journey in software development has equipped me with a strong foundation in both frontend and backend technologies, allowing me to create seamless, user-friendly applications.
            </p>
            <p>
              With experience in <span className="highlight">React</span>, <span className="highlight">Node.js</span>, <span className="highlight">Flutter</span>, and various other frameworks, I enjoy tackling complex problems and turning them into elegant solutions. My approach combines technical expertise with creative thinking to deliver high-quality, scalable applications.
            </p>
            
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="anime-frame">
              <div className="frame-inner">
                <div className="frame-content">
                  <div className="anime-character"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;