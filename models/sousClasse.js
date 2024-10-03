'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class SousClasse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        SousClasse.belongsTo(models.Utilisateur);
       // SousClasse.belongsTo(models.Classe, { foreignKey: 'id' });
    }
  }
  SousClasse.init({
    code: DataTypes.STRING,
    nombreetudiant: DataTypes.STRING,
    classeId: DataTypes.STRING,
      utilisateurId: DataTypes.INTEGER,
     statut: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SousClasse',
  });
  return SousClasse;
};