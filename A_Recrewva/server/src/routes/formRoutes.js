// src/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/create', formController.createForm);
router.get('/', formController.getAllForms);
router.get('/:id', formController.getFormById);
router.put('/:id', formController.updateForm);
router.delete('/:id', formController.deleteForm);

module.exports = router;
