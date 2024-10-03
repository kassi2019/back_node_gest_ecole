const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    supprimerAffectation:function (req, res){
    const id = req.params.id;

    models.Affectation.destroy({where:{id:id}}).then(result => {
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
     modificationAffectation: function (req, res) {
        const id = req.params.id;
    
        const updateBareme = {
            utilisateur_id: req.body.utilisateur_id,
            code_module: req.body.code_module,
            utilisateurId:req.userData.userId
        }
        if (!updateBareme.utilisateur_id || !updateBareme.code_module) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Affectation.update(updateBareme, {where: {id:id}}).then(result => {
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
 listeAffecter: function (req, res) {
        models.Affectation.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
     enregistrementAffectation: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
             utilisateur_id: req.body.utilisateur_id,
            code_module: req.body.code_module,
            utilisateurId:req.userData.userId
          
        }
                models.Affectation.create(
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
          //  }
      
        

    },
    // permet de faire des enregistrement
  
    // permet d'afficher la liste




}