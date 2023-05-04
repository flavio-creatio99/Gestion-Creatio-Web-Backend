const { body, param } = require('express-validator');
const { validatorHandler } = require('../shared/validator.handler');

const employedFindByIdValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const employedCreateValidator = [
  body('name').escape().notEmpty().withMessage('Please input your name'),
  body('surname').escape().notEmpty().withMessage('Please input your surname'),
  body('email')
    .notEmpty()
    .escape()
    .trim()
    .withMessage('This field cannot have spaces')
    .isEmail()
    .withMessage('Please input your email')
    .custom((value) => {
      if (!value.includes('@creatio-control.com')) {
        throw new Error('The e-mail address should be "@creatio-control.com".');
      }
    }),
  body('password')
    .notEmpty()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
    })
    .withMessage(
      'The password must have a minimum of 6 characters, a minimum of one uppercase letter and a minimum of one symbol.'
    ),
  body('isManager').isBoolean(),
  body('phone')
    .notEmpty()
    .withMessage('Please input your phone')
    .isNumeric()
    .isMobilePhone('es-ES'),
  // Usamos nuestro manejador de errores por si no se cumple la validación devolvera los errores
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const employedUpdateValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  body('name').optional().escape(),
  body('surname').optional().escape(),
  body('password')
    .optional()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
    })
    .withMessage(
      'The password must have a minimum of 6 characters, a minimum of one uppercase letter and a minimum of one symbol.'
    ),
  body('isManager').optional().isBoolean(),
  body('phone').optional().escape().isNumeric().isMobilePhone('es-ES'),
  // Usamos nuestro manejador de errores por si no se cumple la validación devolvera los errores
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const employedDeleteValidator = [
  param('id').exists().withMessage('The id parameter is required'),
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

module.exports = {
  employedFindByIdValidator,
  employedCreateValidator,
  employedUpdateValidator,
  employedDeleteValidator,
};
