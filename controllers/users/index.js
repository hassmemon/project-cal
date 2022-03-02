const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../../models/users');
const isLoggedIn = require('../../middleware/is_logged_in');
const router = express.Router();

// Get all tasks
// router.get('/', (req, res) => {
//     Tasks.getAll().then((tasks) => {
//         res.json(tasks);
//     });
// });

// Get a user
//Make sure only the loggin user can see him or herself
router.get('/', isLoggedIn, (req, res) => {
    Users.getById(req.session.userId).then((user) => {
        res.json(user);
    });
});

// Create a user
router.post('/', (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password.toString(), bcrypt.genSaltSync());
    Users.create(newUser).then((user) => {
        if (!user) {
            return res.status(500).json({
                message: "Error when creating user... Please try again"
            });
        }
        req.session.userId = user.id;
        req.session.email = user.email;
        res.json(user);
    }).catch((error)=>{
        next(error);
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
