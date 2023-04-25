const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Employed = sequelize.define(
  "Employed",
  {
    uuid: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    surname: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: "employed",
  }
);

module.exports = Employed;
