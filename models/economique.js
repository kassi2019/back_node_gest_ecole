const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Economique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Economique.belongsTo(models.Utilisateur);
    }
  }
  Economique.init({
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Economique',
  });
  return Economique;
};