'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  equipments.init({
    user_id: DataTypes.INTEGER,
    location: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    rack: DataTypes.STRING,
    hostname: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    function: DataTypes.STRING,
    category: DataTypes.STRING,
    group: DataTypes.STRING,
    status: DataTypes.STRING,
    remark: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'equipments',
  });
  return equipments;
};