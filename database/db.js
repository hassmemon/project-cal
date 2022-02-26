const pg = require('pg');

const db = new pg.Pool({
    database: 'project_cal',
});

module.exports = db;
