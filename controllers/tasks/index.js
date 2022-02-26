const express = require('express');

const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {});

// Get a single task
router.get('/:id', (req, res) => {});

// Create a task
router.post('/', (req, res) => {});

// Delete a task
router.delete('/:id', (req, res) => {});

module.exports = router;
