const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../../models/users');
const isLoggedIn = require('../../middleware/is_logged_in');
const userValidator = require('./user_validator');
const router = express.Router();

// Get a user
//Make sure only the loggin user can see him or herself
router.get('/', isLoggedIn, (req, res) => {
    Users.getById(req.session.userId).then((user) => {
        res.json(user);
    });
});

// Create a user
router.post('/', userValidator, (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(
        newUser.password.toString(),
        bcrypt.genSaltSync()
    );
    Users.create(newUser)
        .then((user) => {
            if (!user) {
                return res.status(500).json({
                    message: 'Error when creating user... Please try again',
                });
            }
            req.session.userId = user.id;
            req.session.email = user.email;
            res.json(user);
        })
        .catch((error) => {
            if (error.code == '23505') {
                return res.status(500).json({
                    message: 'Error 20: cannot create user. Please try again',
                });
            } else {
                return res.status(500).json({
                    message: `Error: ${error.code}`,
                });
            }
        });
});

module.exports = router;
