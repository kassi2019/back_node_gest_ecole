const Validator = require('fastest-validator');
var asynclib = require('async');
const { Op } = require('sequelize');
const models = require('../models');


module.exports = {
    supprimerAffectationClasse:function (req, res){
    const id = req.params.id;

    models.AffectationClasse.destroy({where:{id:id}}).then(result => {
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
     modificationAffectationClasse: function (req, res) {
        const id = req.params.id;
    
        const updateBareme = {
            classeId: req.body.classeId,
             sousclassesId: req.body.sousclassesId,
            personnelid: req.body.personnelid,
            utilisateurId:req.userData.userId
        }
        if (!updateBareme.classeId || !updateBareme.personnelid) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.AffectationClasse.update(updateBareme, {where: {id:id}}).then(result => {
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
 listeAffectationClasse: function (req, res) {
        models.AffectationClasse.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
 listeAffectationClasseGroupe: function (req, res) {
        models.AffectationClasse.findAll({
            attributes: ['personnelid'],
            group: ['personnelid']  
        }).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    enregistrementAffectationClasse: function (req, res) {
        if (req.body.sousclassesId != 0) {
              const post = {
             classeId: req.body.classeId,
            sousclassesId: req.body.sousclassesId,
            personnelid:req.body.personnelid,
            utilisateurId:req.userData.userId
          
        }
                models.AffectationClasse.create(
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
       
            
            const id=req.body.sousclassesId
        const updateSousClasse = {
            
            statut:1
        }
    
            models.SousClasse.update(updateSousClasse, {where: {id:{
                    [Op.eq]: id
                }}})
            
                
        
        } else {
             const post = {
             classeId: req.body.classeId,
            sousclassesId: req.body.sousclassesId,
            personnelid:req.body.personnelid,
            utilisateurId:req.userData.userId
          
        }
                models.AffectationClasse.create(
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
            const id=req.body.classeId
        const updateClasse = {
                     statut:1
        }
    
            models.Classe.update(updateClasse, {where: {id:{
                    [Op.eq]: id
                }}})
            
              
      
         }

       

    },
    // permet de faire des enregistrement
  
    // permet d'afficher la liste





     AffectationClasse: function (req, res) {
            const id=req.body.classeId
        const updateClasse = {
                     statut:1
        }
    
            models.Classe.update(updateClasse, {where: {id:{
                    [Op.eq]: id
                }}})

    },
}