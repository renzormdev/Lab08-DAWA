'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicamentos', [
      {
        descripcionMed: 'Paracetamol',
        fechaFabricacion: new Date(),
        fechaVencimiento: new Date(),
        Presentacion: 'Tabletas',
        stock: 100,
        precioVentaUni: 10.50,
        precioVentaPres: 20.00,
        CodTipoMed: 1, // ID correspondiente al tipo de medicamento Analgésicos
        Marca: 'Genérico',
        CodEspec: 1, // ID correspondiente a la especialidad Cardiología
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcionMed: 'Amoxicilina',
        fechaFabricacion: new Date(),
        fechaVencimiento: new Date(),
        Presentacion: 'Cápsulas',
        stock: 50,
        precioVentaUni: 15.75,
        precioVentaPres: 30.00,
        CodTipoMed: 2, // ID correspondiente al tipo de medicamento Antibióticos
        Marca: 'Genérico',
        CodEspec: 2, // ID correspondiente a la especialidad Dermatología
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más datos según sea necesario
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicamentos', null, {});
  }
};
