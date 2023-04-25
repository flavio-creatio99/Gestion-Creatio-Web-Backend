require('dotenv').config();

const config = {
    production: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: 'postgres',
    },
    test: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: 'sample_db',
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: 'postgres',
    },
    development: {
        username: process.env.PGUSER_DEV,
        password: process.env.PGPASSWORD_DEV,
        database: process.env.PGDATABASE_DEV,
        host: process.env.PGHOST_DEV,
        port: process.env.PGPORT_DEV,
        dialect: 'postgres',
    },
};


const consts = Object.freeze({
    PRODUCTION: 'production',
    DEVELOP: 'development'
})

module.exports = { config, consts };