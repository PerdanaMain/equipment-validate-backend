"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("jobs", [
      {
        id: 1,
        job_name: "engineer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        job_name: "internship",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jobs", null, {});
  },
};
