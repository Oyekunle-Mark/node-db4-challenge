exports.up = knex =>
  knex.schema.createTable('instructions', table => {
    table.increments();
    table
      .integer('step_number')
      .unsigned()
      .notNullable();
    table
      .text('instruction')
      .notNullable();
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists('instructions');
