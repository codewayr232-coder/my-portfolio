import { motion, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faCertificate, faAward, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Certifications.scss';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "MongoDB Associate Database Administrator",
      issueDate: "Oct 2025",
      credentialId: "f590c980-f846-42c3-8756-4819020aad5a",
      skills: "NoSQL database, Administrative controls",
      icon: faCertificate,
      link: "https://www.credly.com/badges/f590c980-f846-42e3-8756-4819020aad5a/public_url"
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issueDate: "Jul 2025",
      credentialId: "102022854OCF25FNDCFA",
      skills: "Cloud, Kubernetes, Docker",
      icon: faCertificate,
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=ADEB70FD286AF3C00272B3F6F689901EBA1A5FC68AD9B69D7CE04DBE5815041D"
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      issueDate: "Nov 2024",
      credentialId: "",
      skills: "Cloud Computing, SES, SSO, Cloud Delivery Models",
      icon: faCertificate,
      link: "https://www.credly.com/badges/992db377-9c8b-49b0-80cb-056c5ac87fe1/public_url"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Grand-Prize winner of HACKSRM (National Hackathon)",
      description: "Developed an innovative solution that stood out among hundreds of participants",
      icon: faTrophy,
      link: "https://drive.google.com/file/d/1_8o2iI_w2T5Uhgru43v7Cea3cru2BY8n/view?usp=sharing"
    },
    {
      id: 2,
      title: "Codeways Project",
      description: "Led development of an AI-powered code assistant platform with Google Gemini API integration",
      icon: faTrophy,
      link: "https://codeways.live"
    },
    {
      id: 3,
      title: "ReactJS - Udemy",
      description: "Completed advanced course with distinction",
      icon: faMedal,
      link: "https://ude.my/UC-28b39e18-9cde-4fb2-a2ab-2a30aee22e81"
    },
    {
      id: 4,
      title: "Python for Data Science - XIE",
      description: "Recognized for exceptional project implementation",
      icon: faAward,
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/7eee31e894fa2c744cb8ce03822f04ba2712e0b4?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink"
    },
    {
      id: 5,
      title: "NodeJS with Express & MongoDB - Udemy",
      description: "Built a full-stack application as capstone project",
      icon: faMedal,
      link: "https://ude.my/UC-28b39e18-9cde-4fb2-a2ab-2a30aee22e81"
    },
    {
      id: 6,
      title: "Machine Learning",
      description: "Implemented ML algorithms with practical applications",
      icon: faAward,
      link: "https://www.credly.com/badges/7a11bc47-dc43-4282-98de-465136355679/public_url"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>
        
        <div className="certifications-content">
          <div className="certifications-column">
            <h3 className="column-title">Professional Certifications</h3>
            <motion.div 
              className="cert-cards"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.a 
                  className="cert-card" 
                  key={cert.id}
                  variants={itemVariants}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cert-icon">
                    <FontAwesomeIcon icon={cert.icon} />
                  </div>
                  <div className="cert-details">
                    <h4>{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="issue-date">Issued: {cert.issueDate}</span>
                      {cert.credentialId && (
                        <span className="credential-id">ID: {cert.credentialId}</span>
                      )}
                    </div>
                    <p className="skills">Skills: {cert.skills}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div className="achievements-column">
            <h3 className="column-title">Achievements & Courses</h3>
            <motion.div 
              className="achievement-cards"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement) => (
                <motion.a 
                  className="achievement-card" 
                  key={achievement.id}
                  variants={itemVariants}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={achievement.icon} />
                  </div>
                  <div className="achievement-details">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
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

export default Certifications;