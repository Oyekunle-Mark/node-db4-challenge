exports.seed = knex =>
  knex('instructions')
    .truncate()
    .then(() =>
      knex('instructions').insert([
        { step_number: 1, instruction: 'Boil the water', recipe_id: 1 },
        { step_number: 2, instruction: 'Apply the rice grain', recipe_id: 1 },
        { step_number: 3, instruction: 'Add salt', recipe_id: 1 },
        { step_number: 1, instruction: 'Boil water', recipe_id: 5 },
        { step_number: 2, instruction: 'Add yam flour', recipe_id: 5 },
        {
          step_number: 3,
          instruction: 'Turn yam flour until it becomes a fine mixture',
          recipe_id: 5,
        },
        { step_number: 4, instruction: 'Heat for ten minutes', recipe_id: 5 },
        {
          step_number: 5,
          instruction: 'Mix again and serve hot',
          recipe_id: 5,
        },
      ]),
    );
