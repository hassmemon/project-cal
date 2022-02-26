const express = require('express');
const pg = require('pg');

// Controller imports
const tasksController = require('./controllers/tasks');

const port = process.env.PORT || 3000;
const app = express();

// Controllers
app.use('/api/tasks', tasksController);

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});
