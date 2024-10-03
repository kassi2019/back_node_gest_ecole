const Validator = require('fastest-validator');
var asynclib = require('async');
const db = require("../config/config");
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementSousClasse: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            code: req.body.code,
            classeId: req.body.classeId,
            utilisateurId: req.userData.userId,
            nombreetudiant: req.body.nombreetudiant,
            statut:0
           
          
        }
      
        if (!post.classeId || !post.code || !post.nombreetudiant) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.SousClasse.findOne({ where: { code: post.code } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "libelle existe déja",
                });
            } else {
                models.SousClasse.create(
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

    listeSousClasse: function (req, res) {
        models.SousClasse.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },


    listeSousClasseGroupe: function (req, res) {
        models.SousClasse.findAll({
            attributes: ['classeId'],
            
            group: ['classeId']
        }).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    
    // permet de faire des modification
 
    modificationSousClasse: function (req, res) {
        const id = req.params.id;
        const updateSousClasse = {
            code: req.body.code,
            classeId: req.body.classeId,
            utilisateurId: req.userData.userId,
            nombreetudiant: req.body.nombreetudiant,
            statut:0
        }
        if ( !updateSousClasse.code  || !updateSousClasse.classeId || !updateSousClasse.nombreetudiant) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.SousClasse.update(updateSousClasse, {where: {id:id}}).then(result => {
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
    
     supprimerSousClasse:function (req, res){
    const id = req.params.id;

    models.SousClasse.destroy({where:{id:id}}).then(result => {
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



}