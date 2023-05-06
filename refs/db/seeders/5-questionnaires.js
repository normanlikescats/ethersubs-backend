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
      "questionnaires",
      [
        {
          id: 1,
          test_id: 1,
          question:
            "Which of the following sentences is grammatically incorrect?",
          option_a: "Is this your jacket?",
          option_b: "Whose jacket is this?",
          option_c: "Is this jacker yours?",
          option_d: "Who's jacket is this?",
          option_e: null,
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
    await queryInterface.bulkDelete("questionnaires", null, {});
  },
};
