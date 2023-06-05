"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Barangs", [
      {
        nama: "Kertas HVS Folio 80gram",
        satuan: "RIM",
        harga: "44.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Kertas HVS A4 80gram",
        satuan: "RIM",
        harga: "39.500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Kertas HVS Folio 70gram",
        satuan: "RIM",
        harga: "39.500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Kertas HVS A4 70gram",
        satuan: "RIM",
        harga: "37.500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Kertas Folio Bergaris",
        satuan: "RIM",
        harga: "130.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Kertas Manila Karton BC",
        satuan: "lembar",
        harga: "2.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Blangko Bon Barang",
        satuan: "buah",
        harga: "17.500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Stop Map",
        satuan: "buah",
        harga: "1.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Map Snelhekter",
        satuan: "buah",
        harga: "2.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Map Diamond",
        satuan: "buah",
        harga: "3.500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Odner Folio",
        satuan: "buah",
        harga: "20.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Ballpoint",
        satuan: "lusin",
        harga: "65.000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
