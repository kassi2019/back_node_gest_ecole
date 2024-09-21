'use strict';
module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateurs', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Utilisateur.associate = function(models) {
    // associations can be defined here
    // User.hasOne(sequelize.define('Address'));
    // User.hasMany(sequelize.define('Post'));
  };
  return Utilisateur;
};