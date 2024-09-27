const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementAssocieStructure: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            montant: req.body.montant,
            libelle: req.body.libelle,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.montant || !post.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.AssocieStructure.findOne({ where: { libelle: post.libelle } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "montant existe déja",
                });
            } else {
                models.AssocieStructure.create(
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

    listeAssocieStructure: function (req, res) {
        models.AssocieStructure.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationAssocieStructure: function (req, res) {
        const id = req.params.id;
    
        const updateAssocieStructure = {
            montant: req.body.montant,
            libelle: req.body.libelle,
        }
        if (!updateAssocieStructure.montant) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.AssocieStructure.update(updateAssocieStructure, {where: {id:id}}).then(result => {
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
    
     supprimerAssocieStructure:function (req, res){
    const id = req.params.id;

    models.AssocieStructure.destroy({where:{id:id}}).then(result => {
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