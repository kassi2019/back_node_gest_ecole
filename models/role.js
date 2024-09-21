'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsTo(models.Utilisateur);
    }
  }
  Role.init({
    code: DataTypes.STRING,
    libelle: DataTypes.STRING,
    utilisateurId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};