'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.INTEGER
      },
      rack: {
        type: Sequelize.STRING
      },
      hostname: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      serial_number: {
        type: Sequelize.STRING
      },
      function: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('equipments');
  }
};