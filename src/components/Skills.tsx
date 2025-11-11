import { motion, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "Dart", "R", "JavaScript", "SQL", "NoSQL"]
    },
    {
      title: "Frameworks",
      skills: ["React.JS", "Node.JS", "Django", "Express.JS", "Flutter"]
    },
    {
      title: "Technologies",
      skills: ["Linux", "Git", "GitHub", "MongoDB", "Firebase", "Docker", "AWS"]
    }
  ];

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const skillItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-category card"
              key={index}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3>{category.title}</h3>
              <div className="skill-grid">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    className="skill-item"
                    key={i}
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 5px 15px rgba(255, 107, 107, 0.4)"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
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

export default Skills;