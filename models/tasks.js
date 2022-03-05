const { response } = require('express');
const db = require('../database/db');

const Tasks = {
    getAll: (user_id) => {
        const query = 'SELECT * FROM tasks WHERE user_id = $1';
        return db.query(query, [user_id]).then((response) => {
            return response.rows;
        });
    },
    getById: (id, user_id) => {
        const query = `SELECT * FROM tasks WHERE id = $1 and user_id = $2`;
        return db.query(query, [id, user_id]).then((response) => {
            return response.rows ? response.rows[0] : {};
        });
    },
    create: ({ name, description, priority, dueDate, user_id }) => {
        const query = `INSERT INTO tasks (name, description, priority, due_date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        return db
            .query(query, [name, description, priority, dueDate, user_id])
            .then((response) => {
                return response.rows ? response.rows[0] : {};
            });
    },
    toggleComplete: (id, user_id, status) => {
        const query =
            'Update tasks SET status = $1 WHERE id = $2 and user_id = $3 RETURNING *';
        return db.query(query, [status, id, user_id]).then((response) => {
            return response.rows ? response.rows[0] : {};
        });
    },
    delete: (id, user_id) => {
        const query = `DELETE FROM tasks WHERE id = $1 and user_id = $2`;
        return db.query(query, [id, user_id]);
    },
    update: ({ id, name, description, priority, dueDate, user_id }) => {
        const query = `UPDATE tasks SET name = $2, description = $3, priority = $4, due_date = $5  WHERE id = $1 and user_id = $6 RETURNING *`;
        return db
            .query(query, [id, name, description, priority, dueDate, user_id])
            .then((response) => {
                return response.rows ? response.rows[0] : {};
            });
    },
};

module.exports = Tasks;
