const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
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
      
       
        // models.Affectation.findOne({ where: { code_module: post.code_module } }).then(result => {
        //     if (result) {
        //         res.status(409).json({
        //             message: "code existe déja",
        //         });
        //     } else {
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