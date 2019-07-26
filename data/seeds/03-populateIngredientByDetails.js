exports.seed = knex =>
  knex('ingredientsByDetails')
    .truncate()
    .then(() =>
      knex('ingredientsByDetails').insert([
        { ingredient_id: 1, recipe_id: 1, quantity: 23 },
        { ingredient_id: 2, recipe_id: 1, quantity: 4 },
        { ingredient_id: 5, recipe_id: 3, quantity: 8 },
        { ingredient_id: 3, recipe_id: 3, quantity: 2 },
        { ingredient_id: 4, recipe_id: 3, quantity: 1 },
      ]),
    );
