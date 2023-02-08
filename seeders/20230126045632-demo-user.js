"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          job_id: 3,
          first_name: "Super",
          last_name: "Admin",
          phone: "Admin",
          gender: "Admin",
          email: "admin",
          password: await bcrypt.hash("admin", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          job_id: 2,
          first_name: "Firman",
          last_name: "Perdana",
          phone: "0812588912",
          gender: "Laki - Laki",
          email: "firman.fp123@gmail.com",
          password: await bcrypt.hash("123456", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          job_id: 2,
          first_name: "Cyntia Prisya",
          last_name: "Andhyni",
          phone: "0812588912",
          gender: "Perempuan",
          email: "20082010160@student.upnjatim.ac.id",
          password: await bcrypt.hash("123456", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          job_id: 2,
          first_name: "Dimas Mirza",
          last_name: "Alifansa",
          phone: "0812588912",
          gender: "Laki - Laki",
          email: "dimas0758@gmail.com",
          password: await bcrypt.hash("123456", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
