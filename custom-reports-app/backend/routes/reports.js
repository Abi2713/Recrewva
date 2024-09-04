const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Existing routes
router.get('/', reportController.getReports);
router.post('/', reportController.createReport);
router.get('/:id', reportController.getReportById);
router.put('/:id', reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

// New export route
router.get('/:id/export', reportController.exportReport);

module.exports = router;
