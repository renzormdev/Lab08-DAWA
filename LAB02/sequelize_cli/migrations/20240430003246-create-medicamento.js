'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcionMed: {
        type: Sequelize.STRING
      },
      fechaFabricacion: {
        type: Sequelize.DATE
      },
      fechaVencimiento: {
        type: Sequelize.DATE
      },
      Presentacion: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      precioVentaUni: {
        type: Sequelize.FLOAT
      },
      precioVentaPres: {
        type: Sequelize.FLOAT
      },
      CodTipoMed: {
        type: Sequelize.INTEGER
      },
      Marca: {
        type: Sequelize.STRING
      },
      CodEspec: {
        type: Sequelize.INTEGER
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

    // Agregar claves foráneas
    await queryInterface.addConstraint('Medicamentos', {
      fields: ['CodTipoMed'],
      type: 'foreign key',
      name: 'fk_CodTipoMed',
      references: {
        table: 'TipoMedicamentos',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('Medicamentos', {
      fields: ['CodEspec'],
      type: 'foreign key',
      name: 'fk_CodEspec',
      references: {
        table: 'Especialidades',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicamentos');
  }
};
