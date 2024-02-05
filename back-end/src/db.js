const {Pool} = require('pg');

const pool = new Pool({
    user: 'user_geo_peru',
    password: 'RVdS4Si8gU64KfqxPsxv5T4ntSo1PMqY',
    host:'dpg-cn0ge30l5elc73ejjjc0-a.oregon-postgres.render.com',
    port: 5432,
    database: 'geo_peru',
    ssl: true
});

module.exports = {
    pool
}

//YA SI SE PUEDE LO HAGO CON EL .ENV