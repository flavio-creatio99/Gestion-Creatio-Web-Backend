const { sequelize } = require('../db/connection');
const { DataTypes } = require('sequelize');

const Project = sequelize.define(
    'Project',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT
        },
        createdDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false,
        tableName: 'project'
    }
);

module.exports = Project;