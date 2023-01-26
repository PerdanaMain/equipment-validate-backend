"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "equipments",
      [
        {
          location: "surabaya",
          floor: 3,
          rack: "A.01.01",
          hostname: "C-SBRKO-01",
          capacity: 4,
          brand: "Huawei",
          type: "H-124",
          serial_number: "A012579151",
          category: "Router",
          group: "Router",
          status: "On",
          created_by: 1,
          updated_by: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("equipments", null, {});
  },
};
