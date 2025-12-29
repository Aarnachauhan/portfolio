import React from "react";
import "./Skills.css";
import { FaCode, FaServer, FaDatabase, FaTools, FaTerminal } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["MongoDB", "Mongoose", "SQL Basics"],
    },
    {
      title: "Tools & Dev",
      icon: <FaTools />,
      skills: ["Git & GitHub", "Postman", "VS Code", "Stripe"],
    },
    {
      title: "Core CS",
      icon: <FaTerminal />,
      skills: ["Data Structure & Algorithms", "Object Oriented Programming", "Database Management System", "Operating System", "Computer Network"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="title-underline"></div>
        <p className="skills-subtitle">
          A roadmap of the technologies and concepts I use to bring ideas to life.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="card-content">
              <div className="skill-icon-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;