const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  filters: {
    dateRange: { start: Date, end: Date },
    status: String,
    position: String,
    source: String
  },
  fields: [String]
});

module.exports = mongoose.model('Report', reportSchema);
