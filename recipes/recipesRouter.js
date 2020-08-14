const express = require("express");

const recipesDB = require("./recipesModel");

const router = express.Router();

router.get("/", (req, res) => {
  recipesDB
    .getRecipes()
    .then((recipes) => {
      res.status(200).json({ recipes });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const recipeID = req.params.id;

  recipesDB
    .getShoppingList(recipeID)
    .then((ingredients) => {
      res.status(200).json({ ingredients });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id/instructions", (req, res) => {
  const recipeID = req.params.id;

  recipesDB
    .getInstructions(recipeID)
    .then((instructions) => {
      res.status(200).json({ instructions });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
