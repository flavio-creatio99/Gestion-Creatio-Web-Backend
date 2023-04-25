const Task = require('../models/task.model');

const findAll = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).send(tasks);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req;

    if (!id) {
      res.status(400).send({ message: 'Id not founded' });
    }

    const taskFounded = await Task.findByPk(id);

    if (!taskFounded) {
      res.status(404).send({ message: 'Task not found' });
    } else {
      res.status(200).send(taskFounded);
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

const createTask = async (req, res) => {
  try {
    const {
      body: { name, description, employedId },
    } = req;
    const taskCreated = await Task.create({ name, description, employedId });

    if (name === '' || description === '' || employedId === '') {
      res.status(400).send({ message: 'Invalid fields in body' });
    }

    if (!taskCreated.id) {
      res.status(400).send({ message: 'Task not created' });
    } else {
      res.status(200).send(taskCreated);
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id, body: name, description, expiresDate, isFinished } = req;

    if (
      !id ||
      name === '' ||
      !name ||
      description === '' ||
      !description ||
      !expiresDate ||
      !isFinished
    ) {
      res.status(400).send({ message: 'Invalid fields in body' });
    }

    const taskFounded = await Task.findByPk(id);

    if (!taskFounded) {
      res.status(400).send({ message: 'Task not founded' });
    } else {
      const changes = { name, description, expiresDate, isFinished };

      const taskUpdated = await Task.update(
        { ...taskFounded, ...changes },
        {
          where: { id: id },
        }
      );

      if (taskUpdated > 0) {
        res.status(200).send({ message: 'Task update sucessfully' });
      } else {
        res.status(400).send({ message: 'Task not updated' });
      }
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req;

    if (!id) {
      res.status(400).send({ message: 'Id not founded' });
    }

    const taskDeleted = await Task.destroy({
      where: { id: id },
    });

    if (taskDeleted > 0) {
      res.status(200).send({ message: 'Task delete sucessfully' });
    } else {
      res.status(400).send({ message: 'Task not deleted' });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

module.exports = { findAll, findById, create: createTask, update: updateTask, deleteById: deleteTask };
