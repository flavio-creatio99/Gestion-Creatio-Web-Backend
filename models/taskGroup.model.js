const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const TaskGroup = sequelize.define(
    'TaskGroup',
    {

    },
    {
        timestamps: false,
        tableName: 'task_group'
    }
)

module.exports = TaskGroup;