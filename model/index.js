const db = require('../data/dbConfig');

const getRecipes = () => db('recipes');

const getShoppingList = id =>
  db('ingredients as i')
    .select('ingredient_name', 'quantity')
    .join('ingredientsByDetails as ing', 'ing.ingredient_id', 'i.id')
    .where({ recipe_id: id });

module.exports = {
  getRecipes,
  getShoppingList,
};
