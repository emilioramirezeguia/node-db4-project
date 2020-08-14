exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Tortilla" },
        { id: 2, name: "Queso" },
        { id: 3, name: "Tomate Rojo" },
        { id: 4, name: "Tomate Verde" },
        { id: 5, name: "Pan" },
      ]);
    });
};
