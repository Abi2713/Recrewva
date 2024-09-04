import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JobTableComponent from './JobTableComponent';

const PublishedJobs = () => {
    const [publishedJobs, setPublishedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPublishedJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs/status/published');
                setPublishedJobs(response.data);
            } catch (err) {
                console.error('Error fetching published jobs:', err);
                setError('Failed to load published jobs');
            } finally {
                setLoading(false);
            }
        };

        fetchPublishedJobs();
    }, []);

    const handleView = (id) => {
        navigate(`/view-job/${id}`);
    };

    const handleEdit = (id) => {
        console.log(id);
        navigate(`/edit-job/publish/${id}`);
    };

    const handleUnpublish = async (id) => {
        console.log("publish id", id, publishedJobs)
        if (window.confirm('Are you sure you want to unpublish this job?')) {
            try {
                await axios.delete(`http://localhost:5000/api/jobs/jobs/${id}`);
                setPublishedJobs(publishedJobs.filter(job => job._id !== id)); // Remove job from state
            } catch (err) {
                console.error('Error unpublishing job:', err);
                setError('Failed to unpublish job');
            }
        }
    };

    return (
        <div className="published-jobs container">
            <h2>Published Jobs</h2>
            {loading ? (
                <p>Loading published jobs...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : publishedJobs.length > 0 ? (
                <JobTableComponent
                    jobs={publishedJobs}
                    onView={handleView}
                    onEdit={handleEdit}
                    onUnpublish={handleUnpublish}
                />
            ) : (
                <p>No published jobs available</p>
            )}
        </div>
    );
};

export default PublishedJobs;
