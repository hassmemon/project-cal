const express = require('express');
const Tasks = require('../../models/tasks');
const isLoggedIn = require('../../middleware/is_logged_in');
const router = express.Router();

// Get all tasks
router.get('/', isLoggedIn, (req, res) => {
    Tasks.getAll().then((tasks) => {
        res.json(tasks);
    });
});

// Get a single task
router.get('/:id', isLoggedIn, (req, res) => {
    Tasks.getById(req.params.id).then((task) => {
        res.json(task);
    });
});

// Create a task
router.post('/', isLoggedIn, (req, res) => {
    Tasks.create(req.body).then((task) => {
        res.json(task);
    });
});

// Delete a task
router.delete('/:id', isLoggedIn, (req, res) => {
    Tasks.delete(req.params.id).then(() => {
        res.json({ status: 'ok' });
    });
});

// Update a task
router.put('/:id', isLoggedIn, (req, res) => {
    Tasks.update(req.body).then((task) => {
        res.json(task);
    });
});

module.exports = router;
