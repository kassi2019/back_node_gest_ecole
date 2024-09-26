const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementEtablissement: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            libelle: req.body.libelle,
            boite_postal: req.body.boite_postal,
            fondateur: req.body.fondateur,
            numero_agrement: req.body.numero_agrement,
            utilisateurId:req.userData.userId
          
        }
      
        if (!post.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Etablissement.findOne({ where: { libelle: post.libelle } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "libelle existe déja",
                });
            } else {
                models.Etablissement.create(
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

    listeEtablissement: function (req, res) {
        models.Etablissement.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationEtablissement: function (req, res) {
        const id = req.params.id;
    
        const updateEtablissement = {
            libelle: req.body.libelle,
            boite_postal: req.body.boite_postal,
            fondateur: req.body.fondateur,
            numero_agrement: req.body.numero_agrement,
        }
        if (!updateEtablissement.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Etablissement.update(updateEtablissement, {where: {id:id}}).then(result => {
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
    
     supprimerEtablissement:function (req, res){
    const id = req.params.id;

    models.Etablissement.destroy({where:{id:id}}).then(result => {
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