const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementRole: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            code: req.body.code,
            libelle: req.body.libelle,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.code || !post.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Role.findOne({ where: { code: post.code } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "Code existe déja",
                });
            } else {
                models.Role.create(
                    post
                
                ).then(result => {
                    res.status(201).json({
                        message: "Enregistrement effectue avec success",
                    });
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message: "Un probleme est survenu lors de l'enregistrement!",
                    });
                });
            }
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!",
            });
        });
        

    },
    // permet d'afficher la liste

    liste_Role: function (req, res) {
        models.Role.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modification_Role: function (req, res) {
        const id = req.params.id;
    
        const updateRole = {
            code: req.body.code,
            libelle: req.body.libelle,
        }
        if (!updateRole.code || !updateRole.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Role.update(updateRole, {where: {id:id}}).then(result => {
                    res.status(201).json({
                        message: "modification effectue avec success",
                    });
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message: "Un probleme est survenu lors de la modification!",
                    });
                });
         
      
    },

    // permet de faire la suppression
    
     supprimerRole:function (req, res){
    const id = req.params.id;

    models.Role.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Suppression effectuer avec success"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
    },
     
    // permet d afficher un element
     
      afficherUneSeulRole:function(req, res){
    const id = req.params.id;

    models.Role.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Role not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Un probleme est survenu"
        })
    });
    },
      
      
    // permet d afficher les element de utilisateur connecter
      
      afficherRoleUtilisateurConnecter:function(req, res){
    const id = req.userData.userId;
    models.Role.findAll({where: {utilisateurId:id}}).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Role not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Un probleme est survenu"
        })
    });
    } ,

    /// permet d afficher la liste des module
    liste_Module: function (req, res) {
        models.moduleApp.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'affichage!"
            });
        });
    },
}