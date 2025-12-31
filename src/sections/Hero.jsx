import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg"; // <-- put your image here

const Hero = () => {
  const texts = [
    "Full Stack Developer",
    
    "Problem Solver",
    "Building Real-World Products"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 800);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="hero">
      <div className="hero-wrapper">
        
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="fade-in">
            Hi, I'm <span className="name">Aarna Chauhan</span>
          </h1>

          <h2 className="typing">
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p className="subtitle fade-in-delay">
          Aspiring Software Engineer with a passion for leadership, problem-solving, and innovation
        </p>

          <h1 className="About-me">About Me</h1>
          <ul className="about-points">
  <li>CSE (3rd year) @ NIT Patna</li>
  <li>Full-Stack Developer (MERN)</li>
  <li>Exploring Machine Learning & AI</li>
  <li>Strong in problem-solving and real-world projects</li>
</ul>

          <div className="hero-buttons fade-in-delay-2">
            <a href="#projects" className="btn primary">Projects</a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn secondary">
              Resume
            </a>

            <a href="https://github.com/Aarnachauhan" target="_blank" rel="noreferrer" className="btn third">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/aarnachauhan/" target="_blank" rel="noreferrer" className="btn forth">
              LinkedIn
            </a>


            <a href="#skills" className="btn fifth" >
             Skills
            </a>

            
            <a href="#experience" className="btn six" >
             Experience 
            </a>

            <a href="#achievements" className="btn seven" >
             Achievements
            </a>


          </div>
        </div>

        {/* RIGHT PHOTO */}
        <div className="hero-photo fade-in-delay-2">
          <div className="photo-glow">
            <img src={profile} alt="Aarna Chauhan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
