"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          first_name: "Johnny",
          last_name: "Bravo",
          email: "johnnybravo@test.com",
          password: "Test1234567",
          status: true,
          photo_url:
            "https://www.giantbomb.com/a/uploads/scale_small/3/34651/3393937-johnny_bravo.png",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          first_name: "Minion",
          last_name: "Kevin",
          email: "minionkevin@test.com",
          password: "Test1234567",
          status: false,
          photo_url:
            "https://static.wikia.nocookie.net/despicableme/images/1/1d/Kevin_minions.png/revision/latest?cb=20170703052012",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
