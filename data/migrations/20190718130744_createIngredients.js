exports.up = knex =>
  knex.schema.createTable('ingredients', table => {
    table.increments();
    table
      .string('ingredient_name', 50)
      .notNullable()
      .unique();
  });

exports.down = knex => knex.schema.dropTableIfExists('ingredients');
