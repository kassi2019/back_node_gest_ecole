const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementClasse: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            libelle: req.body.libelle,
            code: req.body.code,
            cycleId: req.body.cycleId,
            utilisateurId: req.userData.userId,
            montantscolarite: req.body.montantscolarite,
            nombreetudiant: req.body.nombreetudiant,
            statut:0
          
        }
      
        if (!post.libelle || !post.cycleId || !post.code) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Classe.findOne({ where: { code: post.code } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "libelle existe déja",
                });
            } else {
                models.Classe.create(
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

    listeClasse: function (req, res) {
        models.Classe.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationClasse: function (req, res) {
        const id = req.params.id;
        const updateClasse = {
            libelle: req.body.libelle,
            code: req.body.code,
            cycleId: req.body.cycleId,
            montantscolarite: req.body.montantscolarite,
            nombreetudiant: req.body.nombreetudiant,
            statut:0
        }
        if (!updateClasse.libelle || !updateClasse.code  || !updateClasse.cycleId || !updateClasse.montantscolarite) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Classe.update(updateClasse, {where: {id:id}}).then(result => {
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
    
     supprimerClasse:function (req, res){
    const id = req.params.id;

    models.Classe.destroy({where:{id:id}}).then(result => {
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