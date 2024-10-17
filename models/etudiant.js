'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Etudiant extends Model {
  class Etudiant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   Etudiant.hasMany(models.Structure);
    //   Etudiant.hasMany(models.anneeScolaire);
Etudiant.belongsTo(models.Utilisateur);
    }
  }
    Etudiant.init({
    civilite: DataTypes.STRING,
    matricule: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenoms: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    lieu_naissance: DataTypes.STRING,
    lieu_habitation: DataTypes.STRING,
    nationalite: DataTypes.STRING,
    telephone_etudiant: DataTypes.STRING,
    etablissement_id: DataTypes.STRING,
    autre_etablissement: DataTypes.STRING,
    nom_prenom_pere: DataTypes.STRING,
    nom_prenom_mere:DataTypes.STRING,
    profession_pere: DataTypes.STRING,
telephone_bureau_pere: DataTypes.STRING,
telephone_domicile_pere: DataTypes.STRING,
        telephone_mobile_pere:DataTypes.STRING,
    telephone_domicile_mere: DataTypes.STRING,
    telephone_mobile_mere: DataTypes.STRING,
        email_mere: DataTypes.STRING,
        adresse_postal_pere:DataTypes.STRING,
        adresse_postal_mere:DataTypes.STRING,
adresse_postal_tuteur:DataTypes.STRING,
        email_pere: DataTypes.STRING,
         profession_mere: DataTypes.STRING,
    telephone_bureau_mere: DataTypes.STRING,
        lieu_habitation_mere: DataTypes.STRING,
    lieu_habitation_tuteur: DataTypes.STRING,
    nom_prenom_tuteur: DataTypes.STRING,
    telephone_bureau_tuteur: DataTypes.STRING,
    telephone_domicile_tuteur: DataTypes.STRING,
    telephone_mobile_tuteur: DataTypes.STRING,
        email_tuteur: DataTypes.STRING,
    profession_tuteur: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Etudiant',
  });
  return Etudiant;
};