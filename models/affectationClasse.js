const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class AffectationClasse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //AffectationClasse.belongsTo(models.Utilisateur);
    }
  }
  AffectationClasse.init({
    classeId: DataTypes.INTEGER,
    sousclassesId: DataTypes.INTEGER,
    personnelid: DataTypes.INTEGER,
    utilisateurId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'AffectationClasse',
  });
  return AffectationClasse;
};