import React, { useState } from 'react';
import './ProfileDashboard.css';

const ProfileDashboard = () => {
  const [skills, setSkills] = useState(['JavaScript']);
  const [projects, setProjects] = useState(['']);

  const addSkill = () => setSkills([...skills, '']);
  const addProject = () => setProjects([...projects, '']);

  return (
    <div className="profile-dashboard-container">
      <div className="sidebar">
        <button className="sidebar-button">Applications</button>
        <button className="sidebar-button">Interviews</button>
      </div>
      <div className="profile-details">
        <h2 className="profile-header">Profile Details</h2>

        <div className="section">
          <h3 className="section-header">Personal Information</h3>
          <div className="detail">
            <label>Name:</label>
            <input type="text" placeholder="John Doe" className="input-field" />
          </div>
          <div className="detail">
            <label>Email:</label>
            <input type="email" placeholder="johndoe@example.com" className="input-field" />
          </div>
          <div className="detail">
            <label>Date of Birth:</label>
            <input type="date" className="input-field" />
          </div>
          <div className="detail">
            <label>Contact Number:</label>
            <input type="tel" placeholder="123-456-7890" className="input-field" />
          </div>
        </div>

        <div className="section">
          <h3 className="section-header">Academic Information</h3>
          <div className="detail">
            <label>College Name:</label>
            <input type="text" placeholder="University XYZ" className="input-field" />
          </div>
          <div className="detail">
            <label>CGPA:</label>
            <input type="text" placeholder="8.5" className="small-input" />
            <label>Semester:</label>
            <input type="text" placeholder="6" className="small-input" />
          </div>
          <div className="detail">
            <label>History of Arrears:</label>
            <input type="text" placeholder="Details" className="input-field" />
          </div>
          <div className="detail">
            <label>Standing Arrears:</label>
            <input type="text" placeholder="Details" className="input-field" />
          </div>
        </div>

        <div className="section">
          <h3 className="section-header">Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className="detail">
              <label>Skill:</label>
              <input type="text" value={skill} placeholder="JavaScript" className="input-field" />
            </div>
          ))}
          <button className="add-button" onClick={addSkill}>+</button>
        </div>

        <div className="section">
          <h3 className="section-header">Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className="detail">
              <label>Project Link:</label>
              <input type="text" value={project} placeholder="Project URL" className="input-field" />
              <label>Description:</label>
              <input type="text" placeholder="Project Description" className="input-field" />
            </div>
          ))}
          <button className="add-button" onClick={addProject}>+</button>
        </div>

        <div className="section">
          <h3 className="section-header">Professional Connections</h3>
          <div className="detail">
            <label>LeetCode Link:</label>
            <input type="text" placeholder="https://leetcode.com/username" className="input-field" />
          </div>
          <div className="detail">
            <label>GitHub Link:</label>
            <input type="text" placeholder="https://github.com/username" className="input-field" />
          </div>
          <div className="detail">
            <label>LinkedIn Link:</label>
            <input type="text" placeholder="https://linkedin.com/in/username" className="input-field" />
          </div>
        </div>

        <button className="update-button">Update Profile Details</button>
      </div>
    </div>
  );
};

export default ProfileDashboard;
