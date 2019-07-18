exports.up = knex =>
  knex.schema.createTable('ingredientsByDetails', table => {
    table.increments();
    table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .float('quantity', 1)
      .unsigned()
      .notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('ingredientsByDetails');
