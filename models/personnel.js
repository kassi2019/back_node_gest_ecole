'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Personnel extends Model {
  class Personnel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   Personnel.hasMany(models.Structure);
    //   Personnel.hasMany(models.anneeScolaire);
Personnel.belongsTo(models.Utilisateur);
    }
  }
  Personnel.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    matricule: DataTypes.STRING,
    prenoms: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    lieu_naissance: DataTypes.STRING,
    fonction_id: DataTypes.STRING,
    salaire: DataTypes.STRING,
    salaire: DataTypes.STRING,
    date_entre: DataTypes.DATE,
    nationalite: DataTypes.STRING,
    lieu_habitation: DataTypes.STRING,
    civilite: DataTypes.STRING,
    statut: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personnel',
  });
  return Personnel;
};