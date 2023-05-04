const { v4: uuid } = require('uuid');
const Project = require('../models/project.model');
const Employed = require('../models/employed.model');

//buscar a todos
const findAll = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.status(200).send(projects);
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

    const projectFounded = await Project.findByPk(id);

    if (!projectFounded) {
      res.status(400).send({ message: 'Project not found' });
    } else {
      res.status(200).send(projectFounded);
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//crear
const createProject = async (req, res) => {
  const { name, employedId } = req.body;

  try {

    const employedFounded = await Employed.findByPk(employedId);

    if (!employedFounded) {
      res.status(404).send({ message: "Id's employed not founded" });
    }

    const id = uuid();
    const projectCreated = await Project.create({
      id, 
      name,
      employedId
    });

    if (!projectCreated.id) {
      res.status(400).send({ message: 'Project not created' });
    } else {
      res.status(200).send(projectCreated);
    }
  } catch (error) {
    res
      .status(error?.error || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//actualizar
const updateProject = async (req, res) => {
  try {
    const id = req.params.id;

    const projectFounded = await Project.findByPk(id);

    if (!projectFounded) {
      res.status(400).send({ message: 'Project not found' });
      return;
    }

    const projectMerged = {
      ...projectFounded,
      ...req.body,
    };

    const { name, createdDate, employedID } = projectMerged;

    const projectUpdated = await Project.update(
      {
        name: name,
        createdDate: createdDate,
        employedID: employedID,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (projectUpdated > 0) {
      res.status(200).send({ message: 'Project updated successfully' });
    } else {
      res.status(400).send({ message: 'Project not updated' });
    }
  } catch (error) {
    res
      .status(error?.error || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

//eliminar
const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;

    const projectDeleted = await Project.destroy({
      where: { id: id },
    });

    if (projectDeleted > 0) {
      res.status(200).send({ message: 'Project deleted' });
    } else {
      res.status(400).send({ message: 'Project not deleted or not found' });
    }
  } catch (error) {
    res
      .status(error?.error || 500)
      .send({ message: error?.message || 'Internal server error' });
  }
};

module.exports = {
  findAll,
  findById,
  updateProject,
  createProject,
  deleteProject,
};
