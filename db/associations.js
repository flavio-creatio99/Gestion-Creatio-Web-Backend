const Task = require('../models/task.model');
const Employed = require('../models/employed.model');

const associations = () => {
  // Generate associations between task and employed
  Employed.hasOne(Task, {
    as: 'task',
    foreignKey: 'employedId',
  });

  Task.belongsTo(Employed, {
    as: 'manager',
    foreignKey: 'employedId',
  });
};

module.exports = { associations };
