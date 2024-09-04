// src/components/JobCategoriesManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobCategoriesManagement.css'

const JobCategoriesManagement = () => {
  const [categoryType, setCategoryType] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
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
      console.error('Error adding category:', error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const editCategory = (category) => {
    setEditingCategory(category);
    setCategoryType(category.categoryType);
    setCategoryName(category.categoryName);
  };

  const handleUpdateCategory = async () => {
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
      console.error('Error updating category:', error);
    }
  };

  return (
    <div>
      <h2>Job Categories Management</h2>
      <div>
        <label>Category Type</label>
        <select value={categoryType} onChange={(e) => setCategoryType(e.target.value)}>
          <option value="">Select category type</option>
          <option value="Department">Department</option>
          <option value="Location">Location</option>
          <option value="Employment Type">Employment Type</option>
        </select>
        <label>Category Name</label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button onClick={editingCategory ? handleUpdateCategory : addCategory}>
          {editingCategory ? 'Update Category' : 'Add Category'}
        </button>
      </div>
      <table>
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
  );
};

export default JobCategoriesManagement;
