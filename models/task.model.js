const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Task = sequelize.define(
    "Task",
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT
        },
        createdDate: {
            type: DataTypes.DATEONLY
        }

    },
    {
        timestamps: false,
        tableName: 'task'
    }
);

module.exports = Task;