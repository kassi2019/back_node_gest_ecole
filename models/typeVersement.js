'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class TypeVersement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       TypeVersement.belongsTo(models.Utilisateur);
    }
  }
  TypeVersement.init({
      
      libelle: DataTypes.STRING,
     // montant_versement: DataTypes.STRING,
    //   datefin: DataTypes.STRING,
    //   datedebut: DataTypes.STRING,
      utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TypeVersement',
  });
  return TypeVersement;
};