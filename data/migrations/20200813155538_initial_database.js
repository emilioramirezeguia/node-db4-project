exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("instructions", (table) => {
      table.increments("id");
      table.string("step").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("restrict")
        .onUpdate("cascade");
    })
    .createTable("ingredients", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("recipe_ingredients", (table) => {
      table.increments("id");
      table.float("quantity").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("restrict")
        .onUpdate("cascade");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("restrict")
        .onUpdate("cascade");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
