const Task = require('../models/task.model');
const Employed = require('../models/employed.model');
const Project = require('../models/project.model');

const associations = () => {
  // Generate associations between task and employed
  Employed.hasMany(Task, {
    as: 'task',
    foreignKey: {
      name: 'employedId',
      allowNull: false,
    },
  });

  Task.belongsTo(Employed, {
    as: 'employed',
    foreignKey: 'employedId',
  });

  // Generate associations between employed and project
  Employed.hasMany(Project, {
    as: 'project',
    foreignKey: {
      name: 'employedId',
      allowNull: false
    },
  });

  Project.belongsTo(Employed, {
    as: 'employed',
    foreignKey: 'employedId'
  });
};

module.exports = { associations };
