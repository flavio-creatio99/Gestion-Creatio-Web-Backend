const { Router } = require('express');

//Routes
const taskRouter = require('./task.router');
const employedRouter = require('./employed.router');


const initRouters = (app) => {
    // Router Handler
    const RouterController = Router();
    // Add Routes 
    RouterController.use('/task',taskRouter);
    RouterController.use('/employed',employedRouter);
    // Define route master with version
    app.use('/api/v1', RouterController)
};

module.exports = { initRouters };