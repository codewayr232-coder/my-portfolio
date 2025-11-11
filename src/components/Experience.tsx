import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Experience.scss';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: " SDC (Software Development Cell) VIT-AP",
      period: "Jun 2024 - Jul 2024",
      location: "VIT-AP, Andhra Pradesh",
      description: [
        "Developed scalable APIs with optimized server calls.",
        "Designed smooth and responsive UI for better UX.",
        "Delivered clean, maintainable, and production-ready code."
      ]
    },
    {
      title: "Full Stack Developer (Remote)",
      company: " Navigate Labs",
      period: "Jun 2024 - Jul 2024",
      location: "Virginia, United States",
      description: [
        "Designed and implemented APIs for frontend-backend integration.",
        "Built rich, animated UIs using modern frameworks.",
        "Delivered high-quality, scalable features on schedule."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <div className="timeline-info">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
      </div>
    </section>
  );
};

export default Experience;