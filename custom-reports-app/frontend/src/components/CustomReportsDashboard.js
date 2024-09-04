import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import { Link } from 'react-router-dom';

const CustomReportsDashboard = () => {
  const [reports, setReports] = useState([]);
  const [showExportMenu, setShowExportMenu] = useState(null); // Manage dropdown visibility per row

  useEffect(() => {
    axios.get('/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/reports/${id}`)
      .then(() => setReports(reports.filter(report => report._id !== id)))
      .catch(error => console.error('Error deleting report:', error));
  };

  const handleExport = (id, format) => {
    axios.get(`/reports/${id}/export?format=${format}`, {
      responseType: 'blob' // Set response type to blob for file downloads
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `report.${format}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(error => console.error('Error exporting report:', error));
  };

  const toggleExportMenu = (id) => {
    setShowExportMenu(prev => (prev === id ? null : id)); // Toggle dropdown for specific row
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Custom Reports</h1>
        <Link to="/create-report" className="create-report-btn">Create New Report</Link>
      </header>
      <div className="reports-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date Created</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report._id}>
                <td>{report.name}</td>
                <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                <td>{report.createdBy}</td>
                <td>
                  <div className="actions-container">
                    <button className="action-btn" onClick={() => window.location.href = `/report/${report._id}`}>View</button>
                    <button className="action-btn" onClick={() => window.location.href = `/report/${report._id}/edit`}>Edit</button>
                    <button className="action-btn" onClick={() => handleDelete(report._id)}>Delete</button>
                    <div className="export-container">
                      <button onClick={() => toggleExportMenu(report._id)} className="export-btn">Export</button>
                      {showExportMenu === report._id && (
                        <div className="export-menu">
                          <button onClick={() => handleExport(report._id, 'pdf')}>Export as PDF</button>
                          <button onClick={() => handleExport(report._id, 'excel')}>Export as Excel</button>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .dashboard {
          padding: 20px;
        }
        header {
          position: relative;
          margin-bottom: 40px; /* Increase space between header and table */
        }
        .create-report-btn {
          position: absolute;
          top: 10px;
          right: 20px;
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
        }
        .create-report-btn:hover {
          background-color: #0056b3;
        }
        .reports-container {
          margin-top: 40px; /* Add space if needed */
        }
        .reports-table {
          width: 100%;
          border-collapse: collapse;
        }
        .reports-table th, .reports-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .reports-table th {
          background-color: #f4f4f4;
        }
        .actions-container {
          display: flex;
          gap: 8px;
        }
        .action-btn {
          background: #007bff;
          border: none;
          color: white;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 4px;
        }
        .action-btn:hover {
          background-color: #0056b3;
        }
        .export-container {
          position: relative;
          display: inline-block;
        }
        .export-menu {
          display: block;
          position: absolute;
          background: blue;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        .export-menu button {
          display: block;
          background: none;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          width: 100%;
        }
        .export-menu button:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default CustomReportsDashboard;
