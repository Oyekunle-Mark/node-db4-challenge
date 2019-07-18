const db = require('../data/dbConfig');

const getRecipes = () => db('recipes');

const getShoppingList = id =>
  db('ingredients')
    .select('ingredient_name', 'quantity')
    .join('ingredientByDetails')
    .where({ recipe_id: id });

module.exports = {
  getRecipes,
  getShoppingList,
};
