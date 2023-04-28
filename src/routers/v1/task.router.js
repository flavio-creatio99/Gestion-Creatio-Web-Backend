const { Router } = require('express');
const router = Router();

const { findAll, findById, createTask, updateTask, deleteTask } = require('../../controller/task.controller');
const { taskFindByIdValidator, taskCreateValidator, taskUpdateValidator, taskDeleteValidator } = require('../../midlewares/task.validator');

router
    .get('/',findAll)
    .get('/:id', taskFindByIdValidator, findById)
    .post('/', taskCreateValidator, createTask)
    .patch('/:id', taskUpdateValidator, updateTask)
    .delete('/:id', taskDeleteValidator, deleteTask);

module.exports = router;