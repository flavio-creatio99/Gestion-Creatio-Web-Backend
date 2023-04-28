const { validationResult } = require('express-validator');

const validatorHandler = (req, res, next) => {
  try {
    // Lanza la excepcion ya que se ha producido un error, con la validación
    validationResult(req).throw();
    return next();
  } catch (error) {
    // Enviar un array con los mensajes de errores
    res.status(403).send({ message: error.array() });
  }
};

module.exports = { validatorHandler };
