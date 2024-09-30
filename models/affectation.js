const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Affectation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //Affectation.belongsTo(models.Utilisateur);
    }
  }
  Affectation.init({
    utilisateur_id: DataTypes.INTEGER,
    code_module: DataTypes.INTEGER,
    utilisateurId:DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Affectation',
  });
  return Affectation;
};