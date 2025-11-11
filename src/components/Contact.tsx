import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get In Touch</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>satyamr232@gmail.com</span>
              </div>
              <div className="contact-method">
                <FontAwesomeIcon icon={faPhone} />
                <span>+91-8093404743</span>
              </div>
              <div className="contact-method" >
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://linkedin.com/in/satyam-rana-68938117b" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="contact-method">
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/satyam232" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form>
              <div className="form-group">
                <motion.input 
                  type="text" 
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="form-group">
                <motion.input 
                  type="email" 
                  placeholder="Your Email"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="form-group">
                <motion.input 
                  type="text" 
                  placeholder="Subject"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="form-group">
                <motion.textarea 
                  placeholder="Your Message"
                  rows={5}
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>© 2024 Satyam Rana. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;