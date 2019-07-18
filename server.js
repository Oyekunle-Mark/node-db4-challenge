const express = require('express');
const logger = require('morgan');

const server = express();
const recipeRouter = require('./router/recipe');
const ingredientRouter = require('./router/ingredient');
const { badUrl } = require('./middleware');

server.use(express.json());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Of this API I have I give unto thee!',
  }),
);

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);
server.use(badUrl);

module.exports = server;
