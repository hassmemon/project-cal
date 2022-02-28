const express = require('express');
const pg = require('pg');
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const db = require('./database/db');

// Middleware imports
const errorHandler = require('./middleware/error_handler');
const logger = require('./middleware/logger');

// Controller imports
const tasksController = require('./controllers/tasks');
const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(logger);
    require('dotenv').config();
}

app.use(
    expressSession({
        store: new pgSession({
            pool: db, // Connects to our postgres db
            createTableIfMissing: true, // Creates a session table in your database (go look at it!)
        }),
        secret: process.env.SESSION_SECRET, // Needs a secret key to keep session data secure
        resave: false,
        saveUninitialized: false,
    })
);

app.use(express.json());

app.use(express.static('static'));

// Controllers
app.use('/api/tasks', tasksController);
app.use('/api/users', usersController);
app.use('/api/sessions', sessionsController);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});
