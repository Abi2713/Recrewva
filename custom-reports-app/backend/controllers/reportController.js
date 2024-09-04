const Report = require('../models/Report');
const { exportToPDF, exportToExcel } = require('../utils/exportUtils'); // Import utility functions

// Existing functions...

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.json({ message: 'Report deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// New function to handle exporting reports
exports.exportReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { format } = req.query;

    // Fetch the report data
    const report = await Report.findById(id);
    if (!report) return res.status(404).json({ message: 'Report not found' });

    // Export the report in the requested format
    let fileContent;
    let contentType;
    let fileName;

    switch (format) {
      case 'pdf':
        fileContent = await exportToPDF(report);
        contentType = 'application/pdf';
        fileName = 'report.pdf';
        break;
      case 'excel':
        fileContent = await exportToExcel(report);
        contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        fileName = 'report.xlsx';
        break;
      default:
        return res.status(400).json({ message: 'Unsupported format' });
    }

    // Send the file content as a response
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', contentType);
    res.send(fileContent);

  } catch (error) {
    console.error('Error exporting report:', error);
    res.status(500).json({ message: 'Error exporting report' });
  }
};
