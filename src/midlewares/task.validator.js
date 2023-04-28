const { body, param } = require('express-validator');
const { validatorHandler } = require('../shared/validator.handler');

const taskFindByIdValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const taskCreateValidator = [
  body('name').escape().notEmpty().withMessage('Please input a name task'),
  body('description')
    .escape()
    .notEmpty()
    .withMessage('Please input a description task'),
  body('expiresDate').optional().isDate(),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const taskUpdateValidator = [
  body('name').escape().notEmpty().withMessage('Please input a name task'),
  body('description').optional().escape(),
  body('expiresDate').optional().isDate(),
  body('isFinished').optional().isBoolean(),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const taskDeleteValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

module.exports = {
  taskFindByIdValidator,
  taskCreateValidator,
  taskUpdateValidator,
  taskDeleteValidator,
};
