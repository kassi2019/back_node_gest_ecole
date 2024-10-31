const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementInscription: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            montant_versé: req.body.montant_versé,
            type_versement_id: req.body.type_versement_id,
            date_versement: req.body.date_versement,
             etudiant_id:req.body.etudiant_id,
            //utilisateurId:req.userData.userId
        }
      
        if (!post) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
       
                models.Inscription.create(
                    {
                        anne_scolaire: req.body.anne_scolaire,
                        classe_id: req.body.classe_id,
                        bourssier: req.body.bourssier,
                        transport: req.body.transport,
                        montant_scolaire: req.body.montant_scolaire,
                        date_versement: req.body.date_versement,
                        etudiant_id: req.body.etudiant_id,
                        type_versement_id: req.body.type_versement_id,
                        montant_verse: req.body.montant_verse,
                        frais_inscription:req.body.frais_inscription,
                        utilisateurId: req.userData.userId,
                        statut: req.body.statut,
                        niveau:req.body.niveau
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
           // }
      
       
        

    },
    // permet d'afficher la liste

    listeInscription: function (req, res) {
        models.Inscription.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationInscription: function (req, res) {
        const id = req.params.id;
    
        const updateInscription = {
            anne_scolaire: req.body.anne_scolaire,
                        classe_id: req.body.classe_id,
                        bourssier: req.body.bourssier,
                        transport: req.body.transport,
                        montant_scolaire: req.body.montant_scolaire,
                        date_versement: req.body.date_versement,
                        etudiant_id: req.body.etudiant_id,
                        type_versement_id: req.body.type_versement_id,
                        montant_verse: req.body.montant_verse,
                        frais_inscription:req.body.frais_inscription,
                        utilisateurId:req.userData.userId
        }
        if (!updateInscription.etudiant_id || !updateInscription.type_versement_id || !updateInscription.montant_verse)  {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Inscription.update(updateInscription, {where: {id:id}}).then(result => {
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
    
     supprimerInscription:function (req, res){
    const id = req.params.id;

    models.Inscription.destroy({where:{id:id}}).then(result => {
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