'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Utilisateur extends Model {
  class Utilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Utilisateur.hasMany(models.Structure);
      Utilisateur.hasMany(models.anneeScolaire);
Utilisateur.hasMany(models.Personnel);
    }
  }
  Utilisateur.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.STRING,
    matricule: DataTypes.STRING,
    prenoms: DataTypes.STRING,
    //date_naissance: DataTypes.DATE,
    //lieu_naissance: DataTypes.STRING,
    //fonction_id: DataTypes.STRING,
    matricule: DataTypes.STRING,
    //emploi_id: DataTypes.STRING,
    //salaire: DataTypes.STRING,
   // date_entre: DataTypes.DATE,
    // statut: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Utilisateur',
  });
  return Utilisateur;
};