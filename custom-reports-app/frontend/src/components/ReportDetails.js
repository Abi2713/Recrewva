import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

const ReportDetails = () => {
  const [report, setReport] = useState(null);
  const [showExportOptions, setShowExportOptions] = useState(false); // State to toggle export options
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/reports/${id}`)
      .then((response) => setReport(response.data))
      .catch((error) => console.error('Error fetching report details:', error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`/reports/${id}`)
      .then(() => navigate('/')) // Navigate to the dashboard after deletion
      .catch((error) => console.error('Error deleting report:', error));
  };

  const handleExport = (format) => {
    axios
      .get(`/reports/${id}/export`, { params: { format }, responseType: 'blob' })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report.${format}`;
        a.click();
        window.URL.revokeObjectURL(url); // Clean up URL object
      })
      .catch((error) => console.error('Error exporting report:', error));
  };

  if (!report) return <div>Loading...</div>;

  const hasData = Array.isArray(report.data) && report.data.length > 0;

  return (
    <div className="report-details">
      <h1>Report Details</h1>
      <div className="report-info">
        <p>
          <strong>Report Name:</strong> {report.name}
        </p>
        <p>
          <strong>Date Created:</strong> {new Date(report.createdAt).toLocaleDateString()}
        </p>
        <p>
          <strong>Created By:</strong> {report.createdBy}
        </p>
      </div>

      {hasData ? (
        <table className="report-data-table">
          <thead>
            <tr>
              {Object.keys(report.data[0] || {}).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {report.data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No data available</div>
      )}

      <div className="actions">
        {/* Edit Report Button */}
        <button onClick={() => navigate(`/report/${id}/edit`)} className="button edit-button">
          Edit Report
        </button>

        {/* Delete Report Button */}
        <button className="button delete-button" onClick={handleDelete}>
          Delete Report
        </button>

        {/* Export Button */}
        <button className="button export-button" onClick={() => setShowExportOptions(!showExportOptions)}>
          Export
        </button>

        {/* Conditional Export Options Below the Export Button */}
        {showExportOptions && (
          <div className="export-options">
            <button className="button export-option-button" onClick={() => handleExport('pdf')}>
              Export as PDF
            </button>
            <button className="button export-option-button" onClick={() => handleExport('excel')}>
              Export as Excel
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .report-details {
          padding: 20px;
        }

        .report-info {
          margin-bottom: 20px;
        }

        .report-info p {
          margin: 0 0 10px;
        }

        .report-data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .report-data-table th,
        .report-data-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .report-data-table th {
          background-color: #f2f2f2;
        }

        .actions {
          margin-top: 20px;
        }

        .button {
          padding: 8px 15px;
          margin-right: 10px;
          color: #fff;
          background-color: #007bff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
        }

        .delete-button {
          background-color: #dc3545;
        }

        .export-button {
          background-color: #28a745;
        }

        .button:hover {
          opacity: 0.8;
        }

        .export-options {
          margin-top: 10px;
        }

        .export-option-button {
          margin-top: 5px;
          margin-right: 0;
          background-color: #28a745;
        }
      `}</style>
    </div>
  );
};

export default ReportDetails;
