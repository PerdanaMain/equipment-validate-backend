"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("actions", [
      {
        id: 1,
        user_id: 1,
        equipment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        user_id: 1,
        equipment_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        user_id: 2,
        equipment_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        user_id: 2,
        equipment_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("actions", null, {});
  },
};
