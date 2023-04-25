const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Task = sequelize.define(
    "Task",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        expiresDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        }, 
        isFinished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: false,
        tableName: 'task'
    }
);

module.exports = Task;