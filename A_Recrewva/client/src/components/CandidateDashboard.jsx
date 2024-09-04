// CandidateDashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CandidateDashboard.css'; // Import the updated CSS

const CandidateDashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="header-logo-section">
          <img src="/hexware.png" alt="Hexaware Logo" className="hexaware-logo" />
          <h1 className="header-title">Recrewva</h1>
          <div className="header-buttons">
            <button className="header-button" onClick={() => navigate('/interview-schedule')}>Interview Scheduled</button>
            <button className="header-button" onClick={handleProfileClick}>Profile</button>
            <button className="header-button" onClick={() => navigate('/applied-jobs')}>Applied Jobs</button>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="left-section">
          <h2>Topic Filters</h2>
          <div className="filters">
            <div className="filter-box">Location</div>
            <div className="filter-box">Job Type</div>
            <div className="filter-box">Experience Level</div>
            <div className="filter-box">Salary Range</div>
          </div>
        </div>
        <div className="middle-section">
          <div className="search-container">
            <input className="search-input" type="text" placeholder="Search for jobs..." />
            <button className="search-button">Search</button>
            <h2 className="search-title">Search Jobs</h2>
          </div>
          <div className="search-results">
            {/* Example Job Posts */}
            <div className="job-post">
              <h3>UI/UX Designer</h3>
              <p><strong>Company:</strong> Google</p>
              <p><strong>Location:</strong> California</p>
              <div className="job-tags">
                <span className="tag">Remote</span>
                <span className="tag">Full-time</span>
                <span className="tag">0-1 years</span>
              </div>
              <p><strong>Salary:</strong> $80,000/year</p>
            </div>
            <div className="job-post">
              <h3>Frontend Developer</h3>
              <p><strong>Company:</strong> Facebook</p>
              <p><strong>Location:</strong> New York</p>
              <div className="job-tags">
                <span className="tag">On-site</span>
                <span className="tag">Full-time</span>
                <span className="tag">2-4 years</span>
              </div>
              <p><strong>Salary:</strong> $120,000/year</p>
            </div>
            <div className="job-post">
              <h3>Backend Developer</h3>
              <p><strong>Company:</strong> Amazon</p>
              <p><strong>Location:</strong> Seattle</p>
              <div className="job-tags">
                <span className="tag">Remote</span>
                <span className="tag">Full-time</span>
                <span className="tag">3-5 years</span>
              </div>
              <p><strong>Salary:</strong> $110,000/year</p>
            </div>
            <div className="job-post">
              <h3>Product Manager</h3>
              <p><strong>Company:</strong> Microsoft</p>
              <p><strong>Location:</strong> Redmond</p>
              <div className="job-tags">
                <span className="tag">On-site</span>
                <span className="tag">Full-time</span>
                <span className="tag">5+ years</span>
              </div>
              <p><strong>Salary:</strong> $150,000/year</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <h2>Job Description</h2>
          <div className="job-description">
            <h3>UI/UX Designer</h3>
            <p><strong>Company:</strong> Google</p>
            <p><strong>Location:</strong> California</p>
            <p><strong>Job Type:</strong> Full-time</p>
            <p><strong>Experience:</strong> 0-1 years</p>
            <p><strong>Description:</strong> Design innovative UI/UX solutions for Google's new products and features.</p>
            <p><strong>Salary:</strong> $80,000/year</p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
