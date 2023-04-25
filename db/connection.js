const { Sequelize } = require("sequelize");

const { config, consts } = require("../config/configdb");
const { associations } = require('./associations');

const NODE_ENV = process.env.NODE_ENV;
let enviroment = null;

if (NODE_ENV === consts.PRODUCTION) {
  enviroment = config.production;
} else {
  enviroment = config.development;
}

const DBNAME = enviroment.database;
const DBUSER = enviroment.username;
const DBPASSWORD = enviroment.password;
const DBPORT = enviroment.port;
const DBHOST = enviroment.host;

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  dialect: "postgres",
  port: Number(DBPORT),
  host: DBHOST,
  logging: false,
});


async function connection() {
  try {
    await sequelize.authenticate();
    associations();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connection, sequelize };
