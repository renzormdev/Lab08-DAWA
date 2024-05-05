'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Especialidads', [
      {
        descripcionEsp: 'Cardiología',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcionEsp: 'Dermatología',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcionEsp: 'Pediatría',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más datos según sea necesario
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Especialidads', null, {});
  }
};
