const { sequelize } = require('../db/connection');
const { DataTypes } = require('sequelize');

const Employed = sequelize.define(
  'Employed',
  {
    id: {
      type: DataTypes.UUID,
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
    isManager: {
      type: DataTypes.BOOLEAN,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: 'employed',
  }
);

module.exports = Employed;
