'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("creators", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        }
      },
      bio: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      twitter: {
        type: Sequelize.STRING,
      },
      substack: {
        type: Sequelize.STRING,
      },
      discord: {
        type: Sequelize.STRING,
      },
      youtube: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      tier_1: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tier_2: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tier_3: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      threshold: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    })
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      creator_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "creators",
          key: "id",
        }
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING,
      },
      content : {
        allowNull:false,
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
    await queryInterface.dropTable("creators");
  }
};
