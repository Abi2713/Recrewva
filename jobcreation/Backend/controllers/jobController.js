const Job = require('../models/Job');

// Create or Update Job
const createOrUpdateJob = async (req, res) => {
  try {
    const { jobId, ...jobData } = req.body;
    const job = (jobId.jobId)
      ? await Job.findByIdAndUpdate(jobId.jobId, { ...jobData, status: 'published' }, { new: true })
      : new Job({ ...jobData, status: 'published' });
    console.log("INSIDE PUB", job)

    if (!jobId.jobId) await job.save();

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating or updating job' });
  }
};

// Save Job as Draft
const saveDraft = async (req, res) => {
  console.log("SAVE DRAFT", req.body)
  try {
    const { jobId, ...jobData } = req.body;
    const job = (jobId.jobId)
      ? await Job.findByIdAndUpdate(jobId.jobId, { ...jobData, status: 'draft' }, { new: true })
      : new Job({ ...jobData, status: 'draft' });
      console.log("SAVE DRAFT-2", job, jobId)

    if (!jobId.jobId) await job.save();

    res.status(200).json(job);
    console.log("SAVE DRAFT-3", job)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving job as draft' });
  }
};

// Get Jobs by Status
const getJobsByStatus = async (req, res) => {
  const { status } = req.params;
  console.log(req.params)
  try {
    const jobs = await Job.find({ status });
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching jobs by status' });
  }
};

// Get Job by ID
const getJobById = async (req, res) => {
  console.log("INSIDE 1")
  try {
    const job = await Job.findById(req.params.jobId);
    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching job' });
  }
};

// Delete Job by ID
const deleteJob = async (req, res) => {
  console.log("INSIDE 2")
  try {
    await Job.findByIdAndDelete(req.params.jobId);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting job' });
  }
};

module.exports = { createOrUpdateJob, saveDraft, getJobsByStatus, getJobById, deleteJob };
