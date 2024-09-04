// src/components/RecruiterDashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecruiterDashboard.css';
import { FaBriefcase, FaUserFriends, FaChartLine, FaBell, FaCalendarAlt } from 'react-icons/fa';

const RecruiterDashboard = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="recruiter-dashboard-container">
            <div className="recruiter-dashboard">
                <header className="dashboard-header">
                    <h1>Recruiter Dashboard</h1>
                </header>

                <section className="summary-section">
                    <div className="summary-item">
                        <FaBriefcase className="summary-icon" />
                        <h2>50</h2>
                        <p>Active Jobs</p>
                    </div>
                    <div className="summary-item">
                        <FaUserFriends className="summary-icon" />
                        <h2>120</h2>
                        <p>Applicants</p>
                    </div>
                    <div className="summary-item">
                        <FaCalendarAlt className="summary-icon" />
                        <h2>30</h2>
                        <p>Interviews Scheduled</p>
                    </div>
                    <div className="summary-item">
                        <FaChartLine className="summary-icon" />
                        <h2>15</h2>
                        <p>Reports Generated</p>
                    </div>
                    <div className="summary-item">
                        <FaBell className="summary-icon" />
                        <h2>8</h2>
                        <p>Notifications</p>
                    </div>
                </section>

                <section className="button-section">
                    <div className="button-grid">
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/job-creation')}
                        >
                            <FaBriefcase className="button-icon" />
                            Job Creation
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/job-drafts')}
                        >
                            <FaBriefcase className="button-icon" />
                            Job Drafts
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/published-jobs')}
                        >
                            <FaBriefcase className="button-icon" />
                            Published Jobs
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/job-categories')}
                        >
                            <FaBriefcase className="button-icon" />
                            Job Categories Management
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/application-form')}
                        >
                            <FaBriefcase className="button-icon" />
                            Creation of Application Form
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/interview-scheduling')}
                        >
                            <FaBriefcase className="button-icon" />
                            Interview Scheduling
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/recruitment-metrics')}
                        >
                            <FaBriefcase className="button-icon" />
                            Recruitment Metrics
                        </button>
                        <button
                            className="dashboard-button new-style"
                            onClick={() => handleNavigation('/custom-reports')}
                        >
                            <FaBriefcase className="button-icon" />
                            Custom Reports Module
                        </button>
                    </div>
                </section>

                <section className="activities-and-interviews">
                    <section className="activities-section card">
                        <h2>Recent Activities</h2>
                        <ul className="activities-list">
                            <li>Posted a new job for Software Engineer</li>
                            <li>Received 20 new applications for Marketing Manager</li>
                            <li>Scheduled interviews for Data Analyst positions</li>
                            <li>Generated recruitment report for Q3</li>
                        </ul>
                    </section>

                    <section className="upcoming-interviews-section card">
                        <h2>Upcoming Interviews</h2>
                        <ul className="interviews-list">
                            <li>John Doe - Software Engineer - Sep 10, 10:00 AM</li>
                            <li>Jane Smith - Marketing Manager - Sep 12, 2:00 PM</li>
                            <li>Mike Johnson - Data Analyst - Sep 15, 11:00 AM</li>
                        </ul>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default RecruiterDashboard;
