const express = require('express');
const pg = require('pg');

// Controller imports
const tasksController = require('./controllers/tasks');
const usersController = require('./controllers/users');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Controllers
app.use('/api/tasks', tasksController);
app.use('/api/users', usersController);

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});
