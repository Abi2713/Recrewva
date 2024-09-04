// src/components/FormCreation.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateNewForm.css';

const FormCreation = () => {
  // Dummy data for fields; replace with actual data as needed
  const fields = [
    { id: 1, fieldName: 'Field 1', fieldType: 'Textbox' },
    { id: 2, fieldName: 'Field 2', fieldType: 'Dropdown' },
  ];

  const navigate = useNavigate();

  const handleAddFieldClick = () => {
    navigate('/add-field'); // Navigate to the "Add Field" page
  };

  return (
    <div className="form-creation">
      <h1>Form Creation</h1>
      <div className="form-inputs">
        <label>
          Form Name:
          <input type="text" placeholder="Enter the form name" />
        </label>
        <label>
          Associated Job:
          <select>
            <option>Select a job</option>
            {/* Add job options here */}
          </select>
        </label>
      </div>
      <div className="form-fields-section">
        <h2>Form Fields Section</h2>
        <table className="form-fields-table">
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Field Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fields.map(field => (
              <tr key={field.id}>
                <td>{field.fieldName}</td>
                <td>{field.fieldType}</td>
                <td>
                  <button className="edit-field-button">Edit</button>
                  <button className="delete-field-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-field-button" onClick={handleAddFieldClick}>
          Add Field
        </button>
      </div>
      <button className="save-form-button">Save Form</button>
    </div>
  );
};

export default FormCreation;
