const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementCycle: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            libelle: req.body.libelle,
            code: req.body.code,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.libelle || !post.code) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Cycle.findOne({ where: { libelle: post.libelle } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "libelle existe déja",
                });
            } else {
                models.Cycle.create(
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

    listeCycle: function (req, res) {
        models.Cycle.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationCycle: function (req, res) {
        const id = req.params.id;
    
        const updateCycle = {
            libelle: req.body.libelle,
            code: req.body.code,
        }
        if (!updateCycle.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Cycle.update(updateCycle, {where: {id:id}}).then(result => {
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
    
     supprimerCycle:function (req, res){
    const id = req.params.id;

    models.Cycle.destroy({where:{id:id}}).then(result => {
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