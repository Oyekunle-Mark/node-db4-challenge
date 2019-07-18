const express = require('express');
const logger = require('morgan');

const server = express();
const recipeRouter = require('./router/recipe');
const ingredientRouter = require('./router/ingredient');

server.use(express.json());
server.use(logger('dev'));

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

module.exports = server;
