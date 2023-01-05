'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permohonan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Permohonan.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    necessity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permohonan',
  });
  return Permohonan;
};