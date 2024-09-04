// JobTableComponent.js

import React from 'react';
import './JobTableComponent.css';

const JobTableComponent = ({ jobs, onEdit, onDelete, onView, onUnpublish }) => {
    console.log("JOBS", jobs, onView, onDelete)
    return (
        <table>
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job => (
                    <tr key={job.id}>
                        <td>{job.jobTitle}</td>
                        <td>{job.department}</td>
                        <td>{job.applicationDeadline.split('T')[0]}</td>
                        <td>
                            {onView && <button onClick={() => onView(job.id)}>View</button>}
                            <button onClick={() => onEdit(job._id)}>Edit</button>
                            {onUnpublish && <button onClick={() => onUnpublish(job._id)}>Unpublish</button>} 
                            {onDelete && <button onClick={() => onDelete(job._id)}>Delete</button> }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default JobTableComponent;
