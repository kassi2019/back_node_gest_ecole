'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Budget.belongsTo(models.Utilisateur);
    }
  }
  Budget.init({
    economiqueId: DataTypes.STRING,
    montant: DataTypes.STRING,
    utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};