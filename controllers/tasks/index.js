const express = require('express');
const Tasks = require('../../models/tasks');
const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
    Tasks.getAll().then((tasks) => {
        res.json(tasks);
    });
});

// Get a single task
router.get('/:id', (req, res) => {});

// Create a task
router.post('/', (req, res) => {});

// Delete a task
router.delete('/:id', (req, res) => {});

module.exports = router;
