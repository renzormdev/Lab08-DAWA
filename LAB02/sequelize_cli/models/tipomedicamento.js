'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMedicamento extends Model {
    
    static associate(models) {
      
    }
  }
  TipoMedicamento.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoMedicamento',
  });
  return TipoMedicamento;
};