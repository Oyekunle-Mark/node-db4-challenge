exports.seed = knex =>
  knex('recipes')
    .truncate()
    .then(() =>
      knex('recipes').insert([
        { recipe_name: 'Rice' },
        { recipe_name: 'Beans' },
        { recipe_name: 'Yam' },
        { recipe_name: 'Gbegiri' },
        { recipe_name: 'Amala' },
      ]),
    );
