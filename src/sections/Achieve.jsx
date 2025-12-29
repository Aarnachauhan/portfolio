import React from "react";
import "./Achieve.css";
import { FaCode, FaTrophy, FaLightbulb, FaTerminal } from "react-icons/fa";

const Achieve = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <h2 className="achievements-title">Achievements</h2>
        <div className="title-underline"></div>
        <p className="achievements-subtitle">
          Milestones in competitive programming and national-level innovation.
        </p>
      </div>

      <div className="achievements-grid">
        {/* Achievement 1: Problem Solving */}
        <div className="achievement-card">
          <div className="card-content">
            <div className="achievement-icon-box tech-glow">
              <FaTerminal />
            </div>
            <h3>Problem Solving & CP</h3>
            <span className="achievement-badge blue">technical</span>
            <ul>
              <li>Solved <strong>450+ DSA problems</strong> across various platforms.</li>
              <li>Achieved a <strong>1300 rating on CodeChef</strong>.</li>
              <li>Demonstrated strong algorithmic thinking and optimized logic.</li>
            </ul>
          </div>
        </div>

        {/* Achievement 2: SIH */}
        <div className="achievement-card">
          <div className="card-content">
            <div className="achievement-icon-box gold-glow">
              <FaTrophy />
            </div>
            <h3>Smart India Hackathon</h3>
            <span className="achievement-badge gold">College Shortlist</span>
            <ul>
              <li><strong>Shortlisted twice</strong> among 20+ competitive college teams.</li>
              <li><strong>Expert Pitching:</strong> Presented complex solutions to industry judges with clarity.</li>
  <li><strong>Strategy:</strong> Designed comprehensive roadmaps for real-world problem statements.</li>
  
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achieve;