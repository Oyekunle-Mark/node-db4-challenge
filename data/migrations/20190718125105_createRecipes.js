exports.up = knex =>
  knex.schema.createTable('recipes', table => {
    table.increments();
    table
      .string('recipe_name', 50)
      .notNullable()
      .unique();
  });

exports.down = knex => knex.schema.dropTableIfExists('recipes');
