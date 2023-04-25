const Task = require('../models/task.model');
const Employed = require('../models/employed.model');

const associations = () => {
  // Generate associations between task and employed
  Task.hasOne(Employed, {
    as: 'manager',
    foreignKey: 'employedId',
  });

  Employed.belongsTo(Task, {
    as: 'task',
    foreignKey: 'employedId',
  });
};

module.exports = { associations };
