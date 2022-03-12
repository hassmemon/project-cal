const express = require('express');
const Tasks = require('../../models/tasks');
const isLoggedIn = require('../../middleware/is_logged_in');
const taskValidator = require('./task_validator');
const statusValidator = require('./status_validator');
const router = express.Router();

// Get all tasks
router.get('/', isLoggedIn, (req, res) => {
    let status = false;
    if (req.query.status) {
        status = true;
    }
    Tasks.getAll(req.session.userId, status).then((tasks) => {
        res.json(tasks);
    });
});

// Get a single task
router.get('/:id', isLoggedIn, (req, res) => {
    Tasks.getById(req.params.id, req.session.userId).then((task) => {
        res.json(task);
    });
});

// Toggle complete
router.patch('/:id', isLoggedIn, statusValidator, (req, res) => {
    Tasks.toggleComplete(
        req.params.id,
        req.session.userId,
        req.body.status
    ).then((task) => {
        res.json(task);
    });
});

// Create a task
router.post('/', isLoggedIn, taskValidator, (req, res) => {
    const newTask = req.body;
    if (newTask.dueDate === '') {
        newTask.dueDate = null;
    }
    newTask.user_id = req.session.userId;
    Tasks.create(newTask).then((task) => {
        if (!task) {
            return res.status(500).json({
                message: 'Error when creating task... Please try again',
            });
        }
        res.json(task);
    });
});

// Delete a task
router.delete('/:id', isLoggedIn, (req, res) => {
    Tasks.delete(req.params.id, req.session.userId).then(() => {
        res.json({ status: 'ok' });
    });
});

// Update a task
router.put('/:id', isLoggedIn, taskValidator, (req, res) => {
    const updateTask = req.body;
    if (updateTask.dueDate === '') {
        updateTask.dueDate = null;
    }
    updateTask['id'] = req.params.id;
    updateTask.user_id = req.session.userId;
    Tasks.update(updateTask).then((task) => {
        res.json(task);
    });
});

module.exports = router;
