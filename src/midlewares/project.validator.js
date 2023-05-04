const { body, param } = require('express-validator');
const { validatorHandler } = require('../shared/validator.handler');

const projectFindByIdValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const projectCreateValidator = [
  body('name').escape().notEmpty().withMessage('Please input your name'),
  body('employedId').escape().notEmpty(),
  // Usamos nuestro manejador de errores por si no se cumple la validación devolvera los errores
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const projectUpdateValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  body('name').optional().escape(),
  body('createdDate').optional().isDate(),
  // Usamos nuestro manejador de errores por si no se cumple la validación devolvera los errores
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const projectDeleteValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

module.exports = {
 projectCreateValidator,
 projectDeleteValidator,
 projectFindByIdValidator,
 projectUpdateValidator
};
