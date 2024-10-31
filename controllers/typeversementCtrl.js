const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementTypeVersement: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            libelle: req.body.libelle,
           
          
        }
      
        if (!post) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.TypeVersement.findOne({ where: { libelle: post.libelle } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "libelle existe déja",
                });
            } else {
                models.TypeVersement.create(
                    {
            libelle: req.body.libelle,
           // montant_versement: req.body.montant_versement,
            // datedebut: req.body.datedebut,
            // datefin: req.body.datefin,
            utilisateurId:req.userData.userId
                    }
                
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

    listeTypeVersement: function (req, res) {
        models.TypeVersement.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationTypeVersement: function (req, res) {
        const id = req.params.id;
    
        const updateTypeVersement = {
             libelle: req.body.libelle,
           // montant_versement: req.body.montant_versement,
            // datedebut: req.body.datedebut,
            // datefin: req.body.datefin,
            utilisateurId:req.userData.userId
        }
        if (!updateTypeVersement.libelle) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.TypeVersement.update(updateTypeVersement, {where: {id:id}}).then(result => {
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
    
     supprimerTypeVersement:function (req, res){
    const id = req.params.id;

    models.TypeVersement.destroy({where:{id:id}}).then(result => {
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