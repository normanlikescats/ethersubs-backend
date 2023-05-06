"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "class_subjects",
      [
        {
          id: 1,
          name: "01ENG",
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          id: 2,
          name: "02ENG",
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          id: 3,
          name: "03ENG",
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          id: 4,
          name: "04ENG",
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          id: 5,
          name: "05ENG",
          updated_at: new Date(),
          created_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("class_subjects", null, {});
  },
};
