const express = require('express');
const Tasks = require('../../models/tasks');
const isLoggedIn = require('../../middleware/is_logged_in');
const router = express.Router();

// Get all tasks
router.get('/', isLoggedIn, (req, res) => {
    Tasks.getAll(req.session.userId).then((tasks) => {
        res.json(tasks);
    });
});

// Get a single task
router.get('/:id', isLoggedIn, (req, res) => {
    Tasks.getById(req.params.id, req.session.userId).then((task) => {
        res.json(task);
    });
});

// Create a task
router.post('/', isLoggedIn, (req, res) => {
    const newTask = req.body;
    newTask.user_id = req.session.userId;
    Tasks.create(newTask)
        .then((task) => {
            if (!task) {
                return res.status(500).json({
                    message: 'Error when creating task... Please try again',
                });
            }
            res.json(task);
        })
        .catch((error) => {
            next(error);
        });
});

// Delete a task
router.delete('/:id', isLoggedIn, (req, res) => {
    Tasks.delete(req.params.id, req.session.userId).then(() => {
        res.json({ status: 'ok' });
    });
});

// Update a task
router.put('/:id', isLoggedIn, (req, res) => {
    const updateTask = req.body;
    updateTask.user_id = req.session.userId;
    Tasks.update(updateTask).then((task) => {
        res.json(task);
    });
});

module.exports = router;
