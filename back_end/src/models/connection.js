const { Pool } = require('pg');
require('dotenv').config();

function connection(host){
    return new Pool({
        host: host,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    });
};

module.exports = { connection };