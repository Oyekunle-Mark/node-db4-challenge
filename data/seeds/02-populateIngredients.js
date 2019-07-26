exports.seed = knex =>
  knex('ingredients')
    .truncate()
    .then(() =>
      knex('ingredients').insert([
        { ingredient_name: 'Water' },
        { ingredient_name: 'Rice grain' },
        { ingredient_name: 'Beans seed' },
        { ingredient_name: 'Salt' },
        { ingredient_name: 'Sugar' },
        { ingredient_name: 'Vegetable Oil' },
        { ingredient_name: 'Palm Oil' },
        { ingredient_name: 'Yam Tubers' },
        { ingredient_name: 'Yam Flour' },
        { ingredient_name: 'Maggi Cubes' },
      ]),
    );
