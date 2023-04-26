const { check } = require('express-validator');
const { validatorHandler } = require('../shared/validator.handler');

const taskCreateValidator = [
  check('name').escape().notEmpty().withMessage('Please input a name task'),
  check('description')
    .escape()
    .notEmpty()
    .withMessage('Please input a description task'),
  check('expiresDate').optional().isDate(),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const taskUpdateValidator = [
  check('name').escape().notEmpty().withMessage('Please input a name task'),
  check('description').optional().escape(),
  check('expiresDate').optional().isDate(),
  check('isFinished').optional().isBoolean(),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

module.exports = { taskCreateValidator, taskUpdateValidator };
