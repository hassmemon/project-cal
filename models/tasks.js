const db = require('../database/db');

const Tasks = {
    getAll: () => {
        const query = 'SELECT * FROM tasks';
        return db.query(query).then((response) => {
            return response.rows;
        });
    },
    getById: (id) => {
        const query = `SELECT * FROM tasks WHERE id = ${id}`;
        return db.query(query).then((response) => {
            return response.rows ? response.rows[0] : {};
        });
    },
    create: ({ name, description, priority, due_date, user_id }) => {
        const query = `INSERT INTO tasks (name, description, priority, due_date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        return db
            .query(query, [name, description, priority, due_date, user_id])
            .then((response) => {
                return response.rows ? response.rows[0] : {};
            });
    },
    delete: (id) => {
        const query = `DELETE FROM tasks WHERE id = $1`;
        return db.query(query, [id]);
    },
    update: ({ id, name, description, priority, due_date, user_id }) => {
        const query = `UPDATE tasks SET name = $2, description = $3, priority = $4, due_date = $5, user_id = $6 WHERE id = $1 RETURNING *`;
        return db
            .query(query, [id, name, description, priority, due_date, user_id])
            .then((response) => {
                return response.rows ? response.rows[0] : {};
            });
    },
};

module.exports = Tasks;
