const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Get all forms
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new form
router.post('/', async (req, res) => {
    const form = new Form({
        formName: req.body.formName,
        associatedJob: req.body.associatedJob,
        fields: req.body.fields
    });

    try {
        const newForm = await form.save();
        res.status(201).json(newForm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a form by ID
router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form == null) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.json(form);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a form
router.patch('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form == null) {
            return res.status(404).json({ message: 'Form not found' });
        }

        if (req.body.formName != null) {
            form.formName = req.body.formName;
        }
        if (req.body.associatedJob != null) {
            form.associatedJob = req.body.associatedJob;
        }
        if (req.body.fields != null) {
            form.fields = req.body.fields;
        }

        const updatedForm = await form.save();
        res.json(updatedForm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a form
router.delete('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (form == null) {
            return res.status(404).json({ message: 'Form not found' });
        }

        await form.remove();
        res.json({ message: 'Form deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
