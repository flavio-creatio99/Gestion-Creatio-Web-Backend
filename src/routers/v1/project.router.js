const { Router } = require('express');
const router = Router();

const { findAll, findById, createProject, updateProject, deleteProject } = require('../../controller/project.controller');
const { projectFindByIdValidator, projectCreateValidator, projectUpdateValidator, projectDeleteValidator } = require('../../midlewares/project.validator');

router
    .get('/',findAll)
    .get('/:id', projectFindByIdValidator, findById)
    .post('/', projectCreateValidator, createProject)
    .patch('/:id', projectUpdateValidator, updateProject)
    .delete('/:id', projectDeleteValidator, deleteProject);

module.exports = router;