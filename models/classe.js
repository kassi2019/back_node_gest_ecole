'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Classe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Classe.belongsTo(models.Utilisateur);
      // Classe.hasMany(models.SousClasse);
      Classe.hasMany(models.Inscription,{ foreignKey: 'ClasseId' });
    }
  }
  Classe.init({
    libelle: DataTypes.STRING,
    code:DataTypes.STRING,
    cycleId: DataTypes.STRING,
    utilisateurId:DataTypes.INTEGER,
    montantscolarite: DataTypes.STRING,
    nombreetudiant: DataTypes.STRING,
    statut: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Classe',
  });
  return Classe;
};