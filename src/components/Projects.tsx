import { motion } from 'framer-motion';
import '../styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: "CodeWays",
      technologies: "React, TypeScript, Node.js, MongoDB",
      date: "Apr 2023",
      description: [
        "Developed a comprehensive coding platform with real-time code execution and collaborative features.",
        "Implemented advanced code editor with syntax highlighting, auto-completion, and multiple language support.",
        "Built scalable backend architecture handling thousands of concurrent users with real-time collaboration."
      ],
      githubLink: "https://github.com/satyam232/codeways",
      liveLink: "https://www.codeways.live"
    },
    {
      title: "Large Video Processing Application",
      technologies: "Node.js, React, AWS S3, MongoDB, WebRTC",
      date: "Jul 2023",
      description: [
        "Designed and implemented a distributed microservices architecture capable of processing 20GB+ 4K video files with parallel processing techniques, reducing encoding time by 75%.",
        "Engineered custom WebSocket implementation with binary protocol optimization, achieving 40% latency reduction and 60% bandwidth savings for real-time video streaming."
      ],
      githubLink: "https://github.com/satyam232/VideoStreamongApplication-Flutter"
    },
    {
      title: "VTOP Android Application",
      technologies: "Python, Flask, HTTPPIO, Flutter, SQLite, Redis",
      date: "Dec 2023",
      description: [
        "Engineered a cross-platform mobile application with Flutter that dynamically renders complex academic data with custom-built responsive UI components and animations.",
        "Developed an intelligent data extraction system using Python with BeautifulSoup and Selenium, implementing multi-threaded scraping with 99.8% accuracy for critical academic information."
      ],
      githubLink: "https://github.com/satyam232/vtop-application"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span className="technologies">{project.technologies}</span>
                  <span className="date">{project.date}</span>
                </div>
              </div>
              
              <ul className="project-description">
                {project.description.map((item, i) => (
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
              
              <div className="project-footer">
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.a>
                {project.liveLink && (
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;