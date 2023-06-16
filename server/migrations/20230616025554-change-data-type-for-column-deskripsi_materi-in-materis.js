'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Materis', 'deskripsi_materi', {
      type: Sequelize.TEXT,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Materis', 'deskripsi_materi', {
      type: Sequelize.TEXT,
      allowNull: true
    })
  }
};
