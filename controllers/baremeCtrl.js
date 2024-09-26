const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementBareme: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            code: req.body.code,
            libelle: req.body.libelle,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.code || !post.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Bareme.findOne({ where: { code: post.code } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "code existe déja",
                });
            } else {
                models.Bareme.create(
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

    listeBareme: function (req, res) {
        models.Bareme.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationBareme: function (req, res) {
        const id = req.params.id;
    
        const updateBareme = {
            code: req.body.code,
            libelle: req.body.libelle,
        }
        if (!updateBareme.code) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Bareme.update(updateBareme, {where: {id:id}}).then(result => {
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
    
     supprimerBareme:function (req, res){
    const id = req.params.id;

    models.Bareme.destroy({where:{id:id}}).then(result => {
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