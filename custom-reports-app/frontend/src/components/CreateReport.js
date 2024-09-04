import React, { useState } from 'react';
import axios from '../utils/api';
import { useNavigate } from 'react-router-dom';
import styles from './CreateReport.module.css'; // Assuming you use CSS modules

const CreateReport = () => {
  const [name, setName] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [status, setStatus] = useState('');
  const [position, setPosition] = useState('');
  const [source, setSource] = useState('');
  const [fields, setFields] = useState([]);
  const navigate = useNavigate();

  const statusOptions = ['New', 'In Progress', 'Hired', 'Rejected'];
  const positionOptions = ['Position 1', 'Position 2', 'Position 3'];
  const sourceOptions = ['Job Board', 'Referral'];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/reports', {
      name,
      fields,
      filters: { dateRange, status, position, source }
    })
    .then(() => navigate('/'))
    .catch(error => console.error('Error creating report:', error));
  };

  return (
    <div className={styles.createReport}>
      <h1 className={styles.title}>Create Report</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <label>
            Report Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter report name" 
              required 
            />
          </label>
        </div>
        
        <div className={styles.formSection}>
          <label>
            Date Range:
            <input 
              type="date" 
              value={dateRange.start} 
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))} 
              required 
            />
            to
            <input 
              type="date" 
              value={dateRange.end} 
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))} 
              required 
            />
          </label>
        </div>
        
        <div className={styles.formSection}>
          <label>
            Status:
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        
        <div className={styles.formSection}>
          <label>
            Position:
            <select 
              value={position} 
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Select position</option>
              {positionOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        
        <div className={styles.formSection}>
          <label>
            Source:
            <select 
              value={source} 
              onChange={(e) => setSource(e.target.value)}
            >
              <option value="">Select source</option>
              {sourceOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.formSection}>
          <label>
            Fields to Include:
            <div className={styles.fieldsCheckboxes}>
              <label>
                <input 
                  type="checkbox" 
                  value="Applicant Name" 
                  checked={fields.includes('Applicant Name')} 
                  onChange={(e) => setFields(prev => e.target.checked ? [...prev, e.target.value] : prev.filter(field => field !== e.target.value))}
                />
                Applicant Name
              </label>
              <label>
                <input 
                  type="checkbox" 
                  value="Date Applied" 
                  checked={fields.includes('Date Applied')} 
                  onChange={(e) => setFields(prev => e.target.checked ? [...prev, e.target.value] : prev.filter(field => field !== e.target.value))}
                />
                Date Applied
              </label>
              <label>
                <input 
                  type="checkbox" 
                  value="Status" 
                  checked={fields.includes('Status')} 
                  onChange={(e) => setFields(prev => e.target.checked ? [...prev, e.target.value] : prev.filter(field => field !== e.target.value))}
                />
                Status
              </label>
              <label>
                <input 
                  type="checkbox" 
                  value="Source" 
                  checked={fields.includes('Source')} 
                  onChange={(e) => setFields(prev => e.target.checked ? [...prev, e.target.value] : prev.filter(field => field !== e.target.value))}
                />
                Source
              </label>
            </div>
          </label>
        </div>
        
        <button type="submit" className={styles.submitButton}>Generate Report</button>
      </form>
    </div>
  );
};

export default CreateReport;
