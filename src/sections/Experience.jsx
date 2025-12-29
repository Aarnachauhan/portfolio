import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-grid">

        {/* TECHNICAL EXPERIENCE */}
        <div className="experience-card">
          <h2>Technical Experience</h2>
          <p className="experience-subtitle">
            Development • Open Source • Problem Solving
          </p>

          <ul>
            <li>
              Built full-stack applications using <strong>React, Node.js,
              Express, and MongoDB</strong> with focus on clean architecture.
            </li>

            <li>
              Developed a <strong>Hostel Complaint Management System</strong>
              featuring authentication, role-based access, and dashboards.
            </li>

            <li>
              Contributed to <strong>open-source projects</strong> through
              GirlScript Summer of Code (GSSoC), collaborating with mentors
              and maintainers.
            </li>

            <li>
              Worked with REST APIs, JWT authentication, and database modeling
              to build secure backend systems.
            </li>

            <li>
              Actively exploring <strong>Machine Learning & AI</strong> to
              enhance problem-solving and intelligent systems.
            </li>
          </ul>
        </div>

        {/* LEADERSHIP EXPERIENCE */}
        <div className="experience-card">
          <h2>Leadership & Team Experience</h2>
          <p className="experience-subtitle">
            Team Leadership • Collaboration • Ownership
          </p>

          <ul>
            <li>
              Served as a <strong>team leader during the 5th semester</strong>,
              managing planning, execution, and coordination for two projects.
            </li>

            <li>
              Led the development of a <strong>Hostel Complaint Management
              System</strong>, distributing tasks and guiding technical
              decisions.
            </li>

            <li>
              Headed an <strong>IoT-based Light Automation project</strong>,
              coordinating software logic and hardware integration.
            </li>

            <li>
              Took ownership of timelines, resolved blockers, and ensured
              smooth collaboration among team members.
            </li>

            <li>
              Promoted clear communication, accountability, and peer learning
              within the team.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
