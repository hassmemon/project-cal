const express = require('express');
const Users = require('../../models/users');
const router = express.Router();

// Get all tasks
// router.get('/', (req, res) => {
//     Tasks.getAll().then((tasks) => {
//         res.json(tasks);
//     });
// });

// Get a user
router.get('/:id', (req, res) => {
    Users.getById(req.params.id).then((user) => {
        res.json(user);
    });
});

// Create a user
router.post('/', (req, res) => {
    Users.create(req.body).then((user) => {
        res.json(user);
    });
});

// // Delete a task
// router.delete('/:id', (req, res) => {
//     Tasks.delete(req.params.id).then(() => {
//         res.json({ status: 'ok' });
//     });
// });

// // Update a task
// router.put('/:id', (req, res) => {
//     Tasks.update(req.body).then((task) => {
//         res.json(task);
//     });
// });

module.exports = router;
