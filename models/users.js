const db = require('../database/db');

const Users = {
    getById: (id) => {
        const query = 'SELECT * FROM users WHERE id = $1';
        return db.query(query, [id]).then((response) => {
            return response.rows && response.rows.length > 0
                ? response.rows[0]
                : null;
        });
    },
    getByEmail: (email) => {
        const query = 'SELECT * FROM users WHERE email = $1';
        return db.query(query, [email]).then((response) => {
            return response.rows && response.rows.length > 0
                ? response.rows[0]
                : null;
        });
    },
    create: ({ name, email, password, admin = false }) => {
        const query =
            'INSERT INTO users (name, email, password, admin) VALUES($1, $2, $3, $4) RETURNING *';
        return db
            .query(query, [name, email, password, admin])
            .then((response) => {
                return response.rows && response.rows.length > 0
                    ? response.rows[0]
                    : null;
            });
    },
};

module.exports = Users;
