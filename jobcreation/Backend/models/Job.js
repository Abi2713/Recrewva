const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true, minlength: 50 },
  department: { type: String, required: true },
  jobLocation: { type: String, required: true },
  employmentType: { type: String, required: true },
  salaryRange: { type: String, required: true },
  applicationDeadline: { type: Date, required: true },
  requiredQualifications: { type: String, required: true },
  preferredQualifications: { type: String },
  responsibilities: { type: String, required: true },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
