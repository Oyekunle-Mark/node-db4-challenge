const db = require('../data/dbConfig');

const getRecipes = () => db('recipes');

const getShoppingList = id =>
  db('ingredients as i')
    .select('ingredient_name', 'quantity')
    .join('ingredientsByDetails as ing', 'ing.ingredient_id', 'i.id')
    .where({ recipe_id: id });

const getInstructions = id =>
  db('instructions as i')
    .select('i.step_number', 'i.instruction')
    .where({ recipe_id: id })
    .orderBy('i.step_number');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
