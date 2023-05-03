const { Router } = require('express');
const router = Router();

const { findAll, findById, createEmployed, updateEmployed, deleteEmployed } = require('../../controller/employed.controller');
const { employedFindByIdValidator, employedCreateValidator, employedUpdateValidator, employedDeleteValidator } = require('../../midlewares/employed.validator');

router
    .get('/',findAll)
    .get('/:id', employedFindByIdValidator, findById)
    .post('/', employedCreateValidator, createEmployed)
    .patch('/:id', employedUpdateValidator, updateEmployed)
    .delete('/:id', employedDeleteValidator, deleteEmployed);

module.exports = router;