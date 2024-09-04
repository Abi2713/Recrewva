// src/components/ApplicationFormsManagement.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ApplicationFormsManagement.css';

const ApplicationFormsManagement = () => {
  // Dummy data for demonstration
  const forms = [
    { id: 1, formName: 'Form A', associatedJob: 'Job 1' },
    { id: 2, formName: 'Form B', associatedJob: 'Job 2' },
  ];

  return (
    <div className="application-forms-management">
      <h1>Application Forms Management</h1>
      <table className="form-list-table">
        <thead>
          <tr>
            <th>Form Name</th>
            <th>Associated Job</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map(form => (
            <tr key={form.id}>
              <td>{form.formName}</td>
              <td>{form.associatedJob}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create-new-form">
        <button className="create-form-button">Create New Form</button>
      </Link>
    </div>
  );
};

export default ApplicationFormsManagement;
