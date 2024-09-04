import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './JobCreationForm.css';


function JobCreationForm() {
  const jobId = useParams();
  console.log('jobId:', jobId);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    department: '',
    jobLocation: '',
    employmentType: '',
    salaryRange: '',
    applicationDeadline: '',
    requiredQualifications: '',
    preferredQualifications: '',
    responsibilities: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const departments = ['HR', 'IT', 'Marketing', 'Sales'];
  const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
   
  useEffect(() => {
    const fetchJobDetails = async () => {
      console.log("INSODE AUTo",jobId.location, jobId)
      if (jobId.jobId){
      try {
        let response
        if(jobId.loc=="draft"){
           response = await axios.get(`http://localhost:5000/api/jobs/status/draft`);
        }
        else if(jobId.loc=="publish"){
           response = await axios.get(`http://localhost:5000/api/jobs/status/published`);
        }
        //response = await axios.get(`http://localhost:5000/api/jobs/status/draft`);
        console.log("hiiii",response)
        let pref_id = response.data.filter(jobs => jobs._id === jobId.jobId)
        console.log('Fetched Job Details:', response.data, pref_id, jobId); // Ensure this logs the expected job data
        setFormData(pref_id[0]);
      } catch (err) {
        console.error('Error fetching job details:', err);
      }
    }
    };
    
    fetchJobDetails();
   
  }, [jobId]);
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const validationErrors = {};
    let isValid = true;

    if (!formData.jobTitle) {
      validationErrors.jobTitle = 'Job Title is required';
      isValid = false;
    }
    if (!formData.jobDescription || formData.jobDescription.length < 50) {
      validationErrors.jobDescription = 'Job Description is required and must be at least 50 characters';
      isValid = false;
    }
    if (!formData.department) {
      validationErrors.department = 'Department is required';
      isValid = false;
    }
    if (!formData.jobLocation) {
      validationErrors.jobLocation = 'Job Location is required';
      isValid = false;
    }
    if (!formData.employmentType) {
      validationErrors.employmentType = 'Employment Type is required';
      isValid = false;
    }
    if (!formData.salaryRange || isNaN(formData.salaryRange)) {
      validationErrors.salaryRange = 'Salary Range is required and must be numeric';
      isValid = false;
    }
    if (!formData.applicationDeadline || new Date(formData.applicationDeadline) <= new Date()) {
      validationErrors.applicationDeadline = 'Application Deadline is required and must be a future date';
      isValid = false;
    }
    if (!formData.requiredQualifications) {
      validationErrors.requiredQualifications = 'Required Qualifications are required';
      isValid = false;
    }
    if (!formData.preferredQualifications) {
      validationErrors.preferredQualifications = 'preferredQualifications are required';
      isValid = false;
    }
    if (!formData.responsibilities) {
      validationErrors.responsibilities = 'Responsibilities are required';
      isValid = false;
    }
    

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (true) {
      try {
        const endpoint = jobId ? `/api/jobs/jobs/save` : `/api/jobs/jobs/save`;
        console.log("THE PUB JOBID", jobId)
        // const response = await axios.post(`http://localhost:5000${endpoint}`, { ...formData, jobId });
        const response = await fetch(`http://localhost:5000${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, jobId })
      });
      if (response.ok){
        setSuccessMessage('Job posting has been successfully created or published!');
        navigate('/publishedjobs');
      }
       
      } catch (error) {
        console.error(error);
        setErrors({ general: 'Failed to create or publish job' });
      }
    }
  };

  const handleSaveDraft = async () => {
    if (true) {
      try {
        const response = await fetch('http://localhost:5000/api/jobs/jobs/draft', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, jobId })
      });
      // const response = await axios.post(`http://localhost:5000/jobs/draft`, { ...formData, jobId });
      if (response.ok){
        setSuccessMessage('Job posting has been saved as draft!');
        navigate('/drafts');
      }
          //await axios.post('http://localhost:5000/api/jobs/draft');
          //setSuccessMessage('Job posting has been saved as draft!');
          //navigate('/jobdrafts');
      } catch (error) {
        console.error(error);
        setErrors({ general: 'Failed to save job as draft' });
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Create or Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter the job title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}
        </label>
        <label>
          Job Description:
          <textarea
            name="jobDescription"
            placeholder="Enter the job description"
            value={formData.jobDescription}
            onChange={handleChange}
          />
          {errors.jobDescription && <p className="error">{errors.jobDescription}</p>}
        </label>
        <label>
          Department:
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {errors.department && <p className="error">{errors.department}</p>}
        </label>
        <label>
          Job Location:
          <input
            type="text"
            name="jobLocation"
            placeholder="Enter the job location"
            value={formData.jobLocation}
            onChange={handleChange}
          />
          {errors.jobLocation && <p className="error">{errors.jobLocation}</p>}
        </label>
        <label>
          Employment Type:
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
          >
            <option value="">Select employment type</option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.employmentType && <p className="error">{errors.employmentType}</p>}
        </label>
        <label>
          Salary Range:
          <input
            type="text"
            name="salaryRange"
            placeholder="Enter the salary range"
            value={formData.salaryRange}
            onChange={handleChange}
          />
          {errors.salaryRange && <p className="error">{errors.salaryRange}</p>}
        </label>
        <label>
          Application Deadline:
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline.split('T')[0]}
            onChange={handleChange}
          />
          {errors.applicationDeadline && <p className="error">{errors.applicationDeadline}</p>}
        </label>
        <label>
          Required Qualifications:
          <textarea
            name="requiredQualifications"
            placeholder="Enter the required qualifications"
            value={formData.requiredQualifications}
            onChange={handleChange}
          />
          {errors.requiredQualifications && <p className="error">{errors.requiredQualifications}</p>}
        </label>
        <label>
          Preferred Qualifications:
          <textarea
            name="preferredQualifications"
            placeholder="Enter the preferred qualifications"
            value={formData.preferredQualifications}
            onChange={handleChange}
          />
        </label>
        <label>
          Responsibilities:
          <textarea
            name="responsibilities"
            placeholder="Enter the job responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
          />
          {errors.responsibilities && <p className="error">{errors.responsibilities}</p>}
        </label>
        <div className="form-actions">
          <button type="submit" className="submit-button" onClick={handleSubmit}>Publish Job</button>
          <button type="button" className="draft-button" onClick={handleSaveDraft}>Save as Draft</button>
        </div>
        {errors.general && <p className="error">{errors.general}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
}

export default JobCreationForm;
