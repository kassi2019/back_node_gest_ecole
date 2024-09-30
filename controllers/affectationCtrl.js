const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementAffectation: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            utilisateur_id: req.body.utilisateur_id,
            code_module: req.body.code_module,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.code_module || !post.utilisateur_id) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.AssociesStructure.then(result => {
           
                models.AssociesStructure.create(
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
            
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!",
            });
        });
        

    },
    // permet d'afficher la liste




}