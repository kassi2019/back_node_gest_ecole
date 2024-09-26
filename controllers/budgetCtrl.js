const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementBudget: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            economiqueId: req.body.economiqueId,
            montant: req.body.montant,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.economiqueId || !post.montant) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Budget.findOne({ where: { economiqueId: post.economiqueId } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "economiqueId existe déja",
                });
            } else {
                models.Budget.create(
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

    listeBudget: function (req, res) {
        models.Budget.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationBudget: function (req, res) {
        const id = req.params.id;
    
        const updateBudget = {
            economiqueId: req.body.economiqueId,
            montant: req.body.montant,
        }
        if (!updateBudget.economiqueId) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Budget.update(updateBudget, {where: {id:id}}).then(result => {
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
    
     supprimerBudget:function (req, res){
    const id = req.params.id;

    models.Budget.destroy({where:{id:id}}).then(result => {
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