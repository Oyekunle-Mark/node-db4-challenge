const express = require('express');
const logger = require('morgan');

const server = express();
const router = require('./router');

server.use(express.json());
server.use(logger('dev'));

server.use('/api/recipes', router);

module.exports = server;
