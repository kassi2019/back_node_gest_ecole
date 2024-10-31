'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Inscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Inscription.belongsTo(models.Utilisateur);
    }
  }
  Inscription.init({
    anne_scolaire: DataTypes.STRING,
    classe_id: DataTypes.STRING,
      bourssier: DataTypes.STRING,
      transport: DataTypes.STRING,
      montant_scolaire: DataTypes.STRING,
      date_versement: DataTypes.STRING,
      type_versement_id: DataTypes.STRING,
      montant_verse: DataTypes.STRING,
      etudiant_id: DataTypes.STRING,
      frais_inscription: DataTypes.STRING,
      utilisateurId: DataTypes.INTEGER,
    statut: DataTypes.INTEGER,
      niveau: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Inscription',
  });
  return Inscription;
};