// imports
var bcrypt = require('bcrypt');
var jwtutils = require('../utils/jwt.utils');
var models = require('../models');
var asynclib = require('async');

// 
const EMAIL_REGEX=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const PASSWORD_REGEX =/^(?=.*\d).{ 4, 8}$/;
// route
module.exports = {
    register: function (req, res) {
        // Parametre
        var email = req.body.email;
        var nomutilisateur = req.body.nomutilisateur;
        var password = req.body.password;

        if (!email || !nomutilisateur || !password) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
        // if (nomutilisateur.length >= 13 || nomutilisateur.length <= 4) {
        //     return res.status(400).json({ 'error': 'le nom est compris en 5 et 12 ' });
        // }

        // verification si c est un eamil
        if (!EMAIL_REGEX.test(email)) {
            return res.status(400).json({ 'error': 'email est invalide' });
        }

        // verification des caractere du mot de passe
        // if (!PASSWORD_REGEX.test(password)) {
        // return res.status(400).json({ 'error': 'mot de passe est invalide il doit etre  compris en 4 et 8' });
        // }

        asynclib.waterfall([
            function (done) {
                models.Utilisateur.findOne({
                    attributes: ['email'],
                    where: { email: email }
                }).then(function (userFound) {
                    done(null, userFound);
                }).catch(function (err) {
                    return res.status(500).json({ 'error': 'cannot and user' });
                })
            },
            function (userFound, done) {
                if (!userFound) {
                    bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                        done(null, userFound, bcryptedPassword);
                    });
                } else {
                     return res.status(400).json({ 'error': 'utilisateur existe déja' });
                }
            },
            function (userFound,bcryptedPassword,done) {
                var nouveauUser = models.Utilisateur.create({
                    email: email,
                    nomutilisateur: nomutilisateur,
                    password: bcryptedPassword
                }).then(function (nouveauUser) {
                    done(nouveauUser);
                })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'cannot add user' });
                    });
            }
        ], function (nouveauUser) {
            if (nouveauUser) {
                return res.status(201).json({
                    'userId': nouveauUser.id
                });
            } else {
                return res.status(500).json({ 'error': 'connot add user' });
            }
        }
            
        );
    },

     login:function (req,res) {
         // Parametre
        var email = req.body.email;
        var password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ 'error': 'missing parameters' });
         }
         // models.Utilisateur.findOne({
         models.Utilisateur.findOne({
            where: { email: email }
        }).then(function (userFound) {
            if (userFound) {
                bcrypt.compare(password, userFound.password, function (errBycrypt, resBycrypt) {
                    if (resBycrypt) {
                        return res.status(200).json({
                            'userId': userFound.id,
                            'token': jwtutils.generateTokenForUser(userFound)
                        });
                    } else {
                        return res.status(403).json({ 'error': 'invalid password' });
                   }
               })
            } else {
                return res.status(400).json({ 'error': 'ce email n existe pas' });
            }
        }).catch(function (err) {
            return res.status(500).json({ 'error': 'missing parameters' });
        });
    },
     
     getUtilisateurProfile: function (req, res) {
         var headerAuth = req.headers['authorization'];
         var userId = jwtutils.getUserId(headerAuth);
         if (userId < 0) {
             return res.status(400).json({ 'error': 'wrong token' });

             models.Utilisateur.findOne({
                 attributes: ['id', 'email', 'nomutilisateur'],
                 where : { id:userId}
             }).then(function (user) {
                 if (user) {
                     res.status(201).json(user);
                 } else {
                     res.status(404).json({ 'error': 'utilisateur not found' });
                 }
             }).catch(function (err) {
                 res.status(500).json({ 'error': 'cannot fetch user' });
             })
         }
     }
}