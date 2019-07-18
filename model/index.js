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

const getRecipeByIngredient = id =>
  db('ingredientsByDetails as i')
    .select('recipe_name')
    .join('ingredients as ing', 'ing.id', 'i.ingredient_id')
    .join('recipes as r', 'r.id', 'i.recipe_id')
    .where({ ['ing.id']: id });

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipeByIngredient,
};
