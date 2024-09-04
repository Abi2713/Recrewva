import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditReport = () => {
  const [name, setName] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [status, setStatus] = useState('');
  const [position, setPosition] = useState('');
  const [source, setSource] = useState('');
  const [fields, setFields] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  // Example options for dropdowns
  const statusOptions = ['New', 'In Progress', 'Hired', 'Rejected'];
  const positionOptions = ['Position 1', 'Position 2', 'Position 3'];
  const sourceOptions = ['Job Board', 'Referral'];

  useEffect(() => {
    axios.get(`/reports/${id}`)
      .then(response => {
        const { name, filters, fields } = response.data;
        setName(name);
        setDateRange(filters.dateRange);
        setStatus(filters.status || '');
        setPosition(filters.position || '');
        setSource(filters.source || '');
        setFields(fields);
      })
      .catch(error => console.error('Error fetching report details:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/reports/${id}`, {
      name,
      fields,
      filters: { dateRange, status, position, source }
    })
    .then(() => navigate('/'))
    .catch(error => console.error('Error updating report:', error));
  };

  return (
    <div className="edit-report">
      <h1>Edit Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
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

        <div className="form-section">
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

        <div className="form-section">
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

        <div className="form-section">
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

        <div className="form-section">
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

        <div className="form-section">
          <label>
            Fields to Include:
            <div className="fields-checkboxes">
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

        <button type="submit">Save Changes</button>
      </form>

      <style jsx>{`
        .edit-report {
          padding: 30px;
        }

        .form-section {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 10px;
        }

        input[type="text"],
        input[type="date"],
        select {
          width: 15%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .fields-checkboxes label {
          display: block;
        }

        .fields-checkboxes input {
          margin-right: 5px;
        }

        button {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default EditReport;
