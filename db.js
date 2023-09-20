const {Client} = require('pg');

const client = new Client({
    host: 'postgres',
    port: 5432,
    database: 'my-database',
    user: 'postgres',
    password: 'postgres'
});

module.exports = client;
