exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { id: 1, step: "Agarra una torta", recipe_id: 1 },
        { id: 2, step: "Ponla en un plato hondo", recipe_id: 1 },
        { id: 3, step: "Ahogala en salsa", recipe_id: 1 },
        { id: 4, step: "Fríe un chingo de tortillas", recipe_id: 2 },
        { id: 5, step: "Ponle salsa verde que pique", recipe_id: 2 },
        { id: 6, step: "Derrite el queso en la tortilla", recipe_id: 3 },
        { id: 7, step: "Agregale jamón y aguacate", recipe_id: 3 },
      ]);
    });
};
