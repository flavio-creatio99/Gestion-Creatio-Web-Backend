const { body, param } = require('express-validator');
const { validatorHandler } = require('../shared/validator.handler');

const employedCreateValidator = [
  body('name').escape().notEmpty().withMessage('Please input your name'),
  body('surname').escape().notEmpty().withMessage('Please input your surname'),
  body('email')
    .notEmpty()
    .escape()
    .trim()
    .withMessage('This field cannot have spaces')
    .isEmail()
    .withMessage('This field needs to be an email')
    .withMessage('Please input your email')
    .custom(({ req: request }) =>
      request.body.email.includes('@creatio-control.com')
    )
    .withMessage('The e-mail address should be "@creatio-control.com".'),
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
    .isMobilePhone({
      //options identifica la localización del telefono en el país el cual pertenece
      options: ['es-ES'],
    }),
  // Usamos nuestro manejador de errores por si no se cumple la validación devolvera los errores
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

const employedUpdateValidator = [
  param('id').exists(),
  body('name')
    .optional()
    .escape()
    .notEmpty()
    .withMessage('Please input your name'),
  body('surname')
    .optional()
    .escape()
    .notEmpty()
    .withMessage('Please input your surname'),
  body('password')
    .optional()
    .notEmpty()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
    })
    .withMessage(
      'The password must have a minimum of 6 characters, a minimum of one uppercase letter and a minimum of one symbol.'
    ),
  body('isManager').optional().isBoolean(),
  body('phone')
    .optional()
    .notEmpty()
    .withMessage('Please input your phone')
    .isNumeric()
    .isMobilePhone({
      //options identifica la localización del telefono en el país el cual pertenece
      options: ['es-ES'],
    }),
  // Usamos nuestro manejador de errores por si no se cumple la validación devolvera los errores
  (req, res, next) => {
    validatorHandler(req, res, next);
  },
];

module.exports = { employedCreateValidator, employedUpdateValidator };
