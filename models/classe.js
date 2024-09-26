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
        Classe.belongsTo(models.Cycle);
    }
  }
  Classe.init({
    libelle: DataTypes.STRING,
    cycleId: DataTypes.STRING,
    utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classe',
  });
  return Classe;
};