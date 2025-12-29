import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Install react-icons

const Projects = () => {
  const projectData = [
    {
      title: "Hostel Complaint Management",
      desc: "A full-stack system for students and admins with Ml complaint classification.",
      tech: ["React", "Node.js", "MongoDB", "AI/NLP"],
      link: "https://github.com/Aarnachauhan/Software-engineering-project"
    },
    {
      title: "Food Delivery Web App",
      desc: "Complete ordering platform with Stripe payments and admin dashboard.",
      tech: ["React", "Node.js", "Stripe", "MongoDB , JWT"],
      link: "https://github.com/Aarnachauhan/mern-food-delivery"
    },
    {
      title: "DINE-O-SAUR Game",
      desc: "A fun browser-based game with dynamic difficulty and animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Aarnachauhan/DINE-O-SAUR"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="title-underline"></div>
        <p className="projects-subtitle">
          Real-world applications built with the MERN stack and modern logic.
        </p>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="card-footer">
                <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Coming Soon Card */}
        <div className="project-card coming-soon">
          <div className="card-content">
            <h3>More Coming Soon 🚀</h3>
            <p>Working on scalable backend architectures and Machine Learning integrations.</p>
            <div className="tech-stack">
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
