import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">

          {/* Brand / Location */}
          <div className="footer-section">
            <h3>Aarna Chauhan</h3>
            <h2>Student</h2>
            <p>Full-Stack Developer focused on building clean and user-friendly applications.</p>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Noida, India</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-section">
            <h4>Contact Details</h4>

            <div className="contact-item">
              <FaEnvelope />
              <span>chauhanaarna6@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>aarnac.ug23.cs@nitp.ac.in</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/Aarnachauhan" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aarnachauhan/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Aarna Chauhan. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
