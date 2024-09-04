// src/components/AddField.jsx

import React, { useState } from 'react';
import './AddField.css';

const AddField = () => {
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('Textbox');
  const [fieldOptions, setFieldOptions] = useState('');

  const handleAddField = () => {
    // Logic to add the field goes here
    alert(`Field Added: ${fieldName} (${fieldType})`);
  };

  return (
    <div className="add-field">
      <h1>Add New Field</h1>
      <label>
        Field Name:
        <input 
          type="text" 
          placeholder="Enter field name" 
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </label>
      <label>
        Field Type:
        <select 
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
        >
          <option value="Textbox">Textbox</option>
          <option value="Dropdown">Dropdown</option>
          <option value="Checkbox">Checkbox</option>
          <option value="Radio Button">Radio Button</option>
          <option value="Date Picker">Date Picker</option>
        </select>
      </label>
      {(fieldType === 'Dropdown' || fieldType === 'Checkbox' || fieldType === 'Radio Button') && (
        <label>
          Field Options:
          <input 
            type="text" 
            placeholder="Enter options separated by commas"
            value={fieldOptions}
            onChange={(e) => setFieldOptions(e.target.value)}
          />
        </label>
      )}
      <button className="save-field-button" onClick={handleAddField}>
        Add Field
      </button>
    </div>
  );
};

export default AddField;
