// src/components/CategoryManagement.js
import React, { useState, useEffect } from 'react';
import './CategoryManagement.css';

import axios from 'axios';

const CategoryManagement = () => {
  const [categoryType, setCategoryType] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get('http://localhost:5000/api/categories');
    setCategories(response.data);
  };

  const addCategory = async () => {
    if (!categoryType || !categoryName) {
      alert('Both fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/categories/add', {
        categoryType,
        categoryName,
      });
      setCategories([...categories, response.data]);
      setCategoryType('');
      setCategoryName('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const editCategory = (category) => {
    setEditingCategory(category);
    setCategoryType(category.categoryType);
    setCategoryName(category.categoryName);
  };

  const updateCategory = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/categories/${editingCategory._id}`, {
        categoryType,
        categoryName,
      });
      setCategories(categories.map((category) => (category._id === editingCategory._id ? response.data : category)));
      setEditingCategory(null);
      setCategoryType('');
      setCategoryName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="category-management">
 
  
  <div className="content-container">
    {/* Column for Category Type and Category Name */}
    <div className="form-column">
      <div className="form-group">
        <label>Category Type</label>
        <select value={categoryType} onChange={(e) => setCategoryType(e.target.value)}>
          <option value="">Select category type</option>
          <option value="Department">Department</option>
          <option value="Location">Location</option>
          <option value="Employment Type">Employment Type</option>
        </select>
      </div>
      <div className="form-group">
        <label>Category Name</label>
        <input
          type="text"
          placeholder="Enter the category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>
      <button className="submit-button" onClick={editingCategory ? updateCategory : addCategory}>
        {editingCategory ? 'Update Category' : 'Add Category'}
      </button>
    </div>
    
    {/* Column for the Table */}
    <div className="table-column">
      <table className="categories-table">
        <thead>
          <tr>
            <th>Category Type</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.categoryType}</td>
              <td>{category.categoryName}</td>
              <td>
                <button onClick={() => editCategory(category)}>Edit</button>
                <button onClick={() => deleteCategory(category._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default CategoryManagement;
