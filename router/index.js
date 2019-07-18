const router = require('express').Router();

const handlers = require('./handlers');

router.get('/', handlers.getRecipes);
router.get('/:id/shoppingList', handlers.getShoppingList);

module.exports = router;
