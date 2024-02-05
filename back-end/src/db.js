const {Pool} = require('pg');
const {db} = require('./config.js')

const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    ssl: true
});

module.exports = {
    pool
}

//YA SI SE PUEDE LO HAGO CON EL .ENV