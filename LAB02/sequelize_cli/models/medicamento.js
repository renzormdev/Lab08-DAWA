'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicamento extends Model {
    static associate(models) {
      Medicamento.belongsTo(models.TipoMedicamento, { foreignKey: 'CodTipoMed' });

      Medicamento.belongsTo(models.Especialidad, { foreignKey: 'CodEspec' });
    }
  }
  Medicamento.init({
    descripcionMed: DataTypes.STRING,
    fechaFabricacion: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    Presentacion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precioVentaUni: DataTypes.FLOAT,
    precioVentaPres: DataTypes.FLOAT,
    CodTipoMed: DataTypes.INTEGER,
    Marca: DataTypes.STRING,
    CodEspec: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medicamento',
  });
  return Medicamento;
};
