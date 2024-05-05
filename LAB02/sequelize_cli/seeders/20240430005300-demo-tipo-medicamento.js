'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoMedicamentos', [
      {
        descripcion: 'Analgésicos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Antibióticos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Antihistamínicos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más datos según sea necesario
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoMedicamentos', null, {});
  }
};
