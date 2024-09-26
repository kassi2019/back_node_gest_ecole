const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class anneeScolaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       anneeScolaire.belongsTo(models.Utilisateur);
    }
  }
  anneeScolaire.init({
    annee: DataTypes.STRING,
    statut: DataTypes.STRING,
    utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'anneeScolaire',
  });
  return anneeScolaire;
};