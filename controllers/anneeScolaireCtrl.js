const Validator = require('fastest-validator');
var asynclib = require('async');
const { Op } = require('sequelize');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
enregistrementAnneeScolaire: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            annee: req.body.annee,
            statut: req.body.statut,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.annee) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.anneeScolaire.findOne({ where: { annee: post.annee } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "annee existe déja",
                });
            } else {
                models.anneeScolaire.create(
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

    listeAnneeScolaire: function (req, res) {
        models.anneeScolaire.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationAnneeScolaire: function (req, res) {
        const id = req.params.id;
    
        const updateanneeScolaire = {
            annee: req.body.annee,
            statut: req.body.statut,
        }
        if (!updateanneeScolaire.annee) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.anneeScolaire.update(updateanneeScolaire, {where: {id:id}}).then(result => {
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
    
     supprimerAnneeScolaire:function (req, res){
    const id = req.params.id;

    models.anneeScolaire.destroy({where:{id:id}}).then(result => {
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



     
     
     
    basculeAnnee: function (req, res) {
        // const id = req.params.id;
        // const project = models.anneeScolaire.findAll({ where: { id: id } });
        // console.log(project.id);

        const id = req.params.id;
        const updateanneeScolaire = {
            
            statut: 1,
        }
        const updateanneeScolaire1 = {
           
            statut: 0,
        }
        
                models.anneeScolaire.update(updateanneeScolaire, {where: {id:id}}).then(result => {
                    res.status(201).json({
                        message: "modification effectue avec success",
                    });
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message: "Un probleme est survenu lors de la modification!",
                    });
                });
         models.anneeScolaire.update(updateanneeScolaire1, {where: {id:{
                    [Op.ne]: id
                }}})
         
      
    },
}