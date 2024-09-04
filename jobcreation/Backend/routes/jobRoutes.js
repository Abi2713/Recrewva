const express = require('express');
const { createOrUpdateJob, getJobsByStatus, getJobById, deleteJob, saveDraft } = require('../controllers/jobController');

const router = express.Router();


// Route to create or update a job
router.post('/jobs/save', createOrUpdateJob);

// Route to save a job as draft
router.post('/jobs/draft', saveDraft);

// Route to get jobs by status
router.get('/status/:status', getJobsByStatus);

// Route to get a job by ID
router.get('/jobs/:jobId', getJobById);

// Route to delete a job by ID
router.delete('/jobs/:jobId', deleteJob);

module.exports = router;
