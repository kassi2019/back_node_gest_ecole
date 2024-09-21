var models = require('../models');
var asynclib = require('async');
const jwtUtils = require('../utils/jwt.utils');
module.exports = {

       enregistreStructure: function (req, res) {
        // Parametre
        var headerAuth = req.headers['authorization'];
        var iduser = jwtUtils.getUserId(headerAuth);
        
        var code = req.body.code;
        var libelle = req.body.libelle;
       

        if (!code || !libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        
        asynclib.waterfall([
           
            function (done) {
                models.Utilisateur.findOne({
                    where: { id: userId }
                    
                }).then(function (userFound) {
                    done(null, userFound);
                    
                }).catch(function (err) {
                    return res.status(500).json({ 'error': 'cannot and user2' });
                })
            },
            function (userFound, done) {
                if (userFound) {
                     return res.status(400).json({ 'error': 'Code existe déja' });
                }
            },
            function (userFound,done) {
                var creerStructure = models.Structure.create({
                    code: code,
                    libelle: libelle
                }).then(function (creerStructure) {
                    done(creerStructure);
                })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'cannot add user' });
                    });
            }
        ], function (creerStructure) {
            if (creerStructure) {
                return res.status(201).json({
                    'code': creerStructure.code,
                    'libelle': creerStructure.libelle
                });
            } else {
                return res.status(500).json({ 'error': 'connot add user' });
            }
        }
            
        );
    },
}