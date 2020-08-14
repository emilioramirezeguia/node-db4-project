const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db.select("*").from("recipes");
}

function getShoppingList(recipeID) {
  return db("recipe_ingredients as ri")
    .join("recipes", "ri.recipe_id", "recipes.id")
    .join("ingredients", "ri.ingredient_id", "ingredients.id")
    .select(
      "ri.id",
      "recipes.name as recipe",
      "ingredients.name as ingredient",
      "ri.quantity"
    )
    .where({ "ri.recipe_id": recipeID });
}

function getInstructions(recipeID) {
  return db("instructions")
    .join("recipes", "instructions.recipe_id", "recipes.id")
    .select("instructions.id", "recipes.name as recipe", "instructions.step")
    .where({ "instructions.recipe_id": recipeID });
}
