'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tests",
      [
        {
          id: 1,
          users_class_subject_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          users_class_subject_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("tests", null, {});
  }
};
