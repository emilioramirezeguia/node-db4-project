exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Tortas Ahogadas" },
        { id: 2, name: "Chilaquiles" },
        { id: 3, name: "Quesadillas" },
      ]);
    });
};
