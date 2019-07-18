const router = require('express').Router();

const handlers = require('./handlers');

router.get('/', handlers.getRecipes);

module.exports = router;
