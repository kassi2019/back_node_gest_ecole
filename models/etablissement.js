'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Etablissement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Etablissement.belongsTo(models.Utilisateur);
    }
  }
  Etablissement.init({
      libelle: DataTypes.STRING,
      boite_postal: DataTypes.STRING,
      fondateur: DataTypes.STRING,
      numero_agrement: DataTypes.STRING,
      utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Etablissement',
  });
  return Etablissement;
};