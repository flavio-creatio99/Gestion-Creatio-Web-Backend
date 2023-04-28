const { v4: uuid } = require('uuid');
const Employed = require('../models/employed.model');

//buscar a todos
const findAll = async (req, res) => {
  try {
    const employed = await Employed.findAll();

    res.status(200).send(employed);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//buscar por id
const findById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({ message: 'Id not founded' });
    }

    const employedFounded = await Employed.findByPk(id);

    if (!employedFounded) {
      res.status(400).send({ message: 'Employed not found' });
    } else {
      res.status(200).send(employedFounded);
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//crear
const createEmployed = async (req, res) => {
  const { name, surname, email, password, isManager, phone } = req.body;

  try {
    const id = uuid();
    const employedCreated = await Employed.create({
      id,
      name,
      surname,
      email,
      password,
      isManager,
      phone,
    });

    if (!employedCreated.id) {
      res.status(400).send({ message: 'Employed not created' });
    } else {
      res.status(200).send(employedCreated);
    }
  } catch (error) {
    res
      .statu(error?.error || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//actualizar
const updateEmployed = async (req, res) => {
  try {
    const id = req.params.id;

    const employedFounded = await Employed.findByPk(id);

    if (!employedFounded) {
      res.status(400).send({ message: 'Employed not found' });
      return;
    }

    const employedMerged = {
      ...employedFounded,
      ...req.body,
    };

    const { name, surname, email, password, isManager, phone } = employedMerged;

    const employedUpdated = await Employed.update(
      {
        name: name,
        surname: surname,
        email: email,
        password: password,
        isManager: isManager,
        phone: phone,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (employedUpdated > 0) {
      res.status(200).send({ message: 'Employed updated successfully' });
    } else {
      res.status(400).send({ message: 'Employed not updated' });
    }
  } catch (error) {
    res
      .statu(error?.error || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//eliminar
const deleteEmployed = async (req, res) => {
  try {
    const id = req.params.id;

    const employedDeleted = await employedFounded.destroy({
      where: { id: id },
    });

    if (employedDeleted > 0) {
      res.status(200).send({ message: 'Employed deleted' });
    } else {
      res.status(400).send({ message: 'Employed not deleted or not found' });
    }
  } catch (error) {
    res
      .statu(error?.error || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

module.exports = {
  findAll,
  findById,
  updateEmployed,
  createEmployed,
  deleteEmployed,
};
