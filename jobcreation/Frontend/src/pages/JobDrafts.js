import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JobTableComponent from './JobTableComponent';

const JobDrafts = () => {
    const [drafts, setDrafts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/jobs/status/draft`);
                console.log(response)
                setDrafts(response.data);
            } catch (err) {
                console.error('Error fetching drafts:', err);
                setError('Failed to load drafts');
            } finally {
                setLoading(false);
            }
        };

        fetchDrafts();
    }, []);

    const handleEdit = (id) => {
        //navigate(`/create-job?jobId=${id}`);
        navigate(`/edit-job/draft/${id}`)
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this draft?')) {
            try {
                await axios.delete(`http://localhost:5000/api/jobs/jobs/${id}`);
                setDrafts(drafts.filter(draft => draft._id !== id)); // Remove draft from state
            } catch (err) {
                console.error('Error deleting draft:', err);
                setError('Failed to delete draft');
            }
        }
    };

    return (
        <div className="job-drafts container">
            <h2>Job Drafts</h2>
            {loading ? (
                <p>Loading drafts...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : drafts.length > 0 ? (
                <JobTableComponent
                    jobs={drafts}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ) : (
                <p>No drafts available</p>
            )}
        </div>
    );
};

export default JobDrafts;
