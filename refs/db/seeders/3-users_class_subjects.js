"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users_class_subjects",
      [
        {
          id: 1,
          user_id: 1,
          class_subject_id: 1,
        },
        { id: 2, user_id: 2, class_subject_id: 1 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users_class_subjects", null, {});
  },
};
