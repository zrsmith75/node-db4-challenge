exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      // foreign key recipe
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      // foreign key ingredients
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("ingredient_quantity").notNullable();
    });
};

exports.down = function(knex) {};
