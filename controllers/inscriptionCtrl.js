const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');
const { Op, fn, col, literal } = require('sequelize');
const dateSystem = new Date();


module.exports = {
    listeInscriptionParApprenant: function (req, res) {
        console.log(req.body.ClasseId);
        models.Inscription.findAll({
            include: [
           
                {
            
          model: models.Etudiant,
                    attributes: [],
                    required: true
                },
                {
                    model: models.anneeScolaire,
                    attributes: [],
                    required: true,
                    where: { statut: 1 },
                },
                {
                model: models.Classe,
                    attributes: [],
                    required: true
                }
            ],
            
       attributes: [
           'EtudiantId',
           'ClasseId',
           [fn('CONCAT', col('Etudiant.matricule'), ' ', col('Etudiant.nom'), ' ', col('Etudiant.prenoms')), 'afficherEtudiant'],
           [col('Classe.montantscolarite'), 'montant_scolarite'],
           [fn('SUM', col('montant_verse')), 'montant_paye'],
            ],
    //    where: { ClasseId: req.params.id },
      group: ['EtudiantId','ClasseId'],
    }).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
listeInscriptionParApprenant1: function (req, res) {
        models.Inscription.findAll({
            include: [
        {
          model: models.Classe,
                    attributes: [],
                    required: true
                },
                {
                    model: models.anneeScolaire,
                    attributes: [],
                    required: true,
                    where: { statut: 1 },
                }
            ],
            
       attributes: [
           'ClasseId',
           'anneeScolaireId',
           [fn('CONCAT', col('Classe.code'), ' ', col('Classe.libelle')), 'classe'],
           [col('anneeScolaire.annee'), 'anneescolaire'],
           [col('Classe.montantscolarite'), 'montant_scolarite'],
           [fn('SUM', col('montant_verse')), 'montant_paye'],
        
            ],
      group: ['ClasseId','anneeScolaireId'],
    }).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },

listeInscriptionParClasse: function (req, res) {
        models.Inscription.findAll({
            include: [
        {
          model: models.Classe,
                    attributes: [],
                    required: true
                },
                {
                    model: models.anneeScolaire,
                    attributes: [],
                    required: true,
                    where: { statut: 1 },
                }
            ],
            
       attributes: [
           'ClasseId',
           'anneeScolaireId',
           [fn('CONCAT', col('Classe.code'), ' ', col('Classe.libelle')), 'classe'],
           [col('anneeScolaire.annee'), 'anneescolaire'],
           [col('Classe.montantscolarite'), 'montant_scolarite'],
           [fn('SUM', col('montant_verse')), 'montant_paye'],
        
            ],
      group: ['ClasseId','anneeScolaireId'],
    }).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },


listeInscriptionParClasse: function (req, res) {
        models.Inscription.findAll({
            include: [
       {
          model: models.Classe,
                    attributes: [],
                    required: true
                },
                {
                    model: models.anneeScolaire,
                    attributes: [],
                    required: true,
                    where: { statut: 1 },
                },
              
            ],
            
       attributes: [
           'ClasseId',
           'anneeScolaireId',
           [fn('CONCAT', col('Classe.libelle'), ' - ', col('Classe.code')), 'classe'],
           [col('anneeScolaire.annee'), 'anneescolaire'],
           [fn('SUM', col('montant_scolaire')), 'montant_scolarite'],
           [fn('SUM', col('montant_verse')), 'montant_paye'],
        
            ],
      group: ['ClasseId','anneeScolaireId'],
    }).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },

    // permet de faire des enregistrement
    enregistrementInscription: function (req, res) {
    //    console.log(req.userData.userId);
        const post = {
            montant_versé: req.body.montant_versé,
            type_versement_id: req.body.type_versement_id,
            //date_versement: req.body.date_versement,
            EtudiantId: req.body.EtudiantId,
             ClasseId:req.body.ClasseId
            //utilisateurId:req.userData.userId
        }
      
        if (!post) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
       
                models.Inscription.create(
                    {
                        anneeScolaireId: req.body.anneeScolaireId,
                        ClasseId: req.body.ClasseId,
                        bourssier: req.body.bourssier,
                        transport: req.body.transport,
                        montant_scolaire: req.body.montant_scolaire,
                        date_versement: dateSystem,
                        EtudiantId: req.body.EtudiantId,
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


     listeInscription1 : function (req, res) {
    const query = 'SELECT * FROM Fonction';

    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Un problème est survenu lors de l'enregistrement!"
            });
        }
        res.status(200).json(results);
    });
},
    // permet de faire des modification
 
    modificationInscription: function (req, res) {
        const id = req.params.id;
    
        const updateInscription = {
            anneeScolaireId: req.body.anneeScolaireId,
                        ClasseId: req.body.ClasseId,
                        bourssier: req.body.bourssier,
                        transport: req.body.transport,
                        montant_scolaire: req.body.montant_scolaire,
                        date_versement: req.body.date_versement,
                        EtudiantId: req.body.EtudiantId,
                        type_versement_id: req.body.type_versement_id,
                        montant_verse: req.body.montant_verse,
                        frais_inscription:req.body.frais_inscription,
                        utilisateurId:req.userData.userId
        }
        if (!updateInscription.EtudiantId || !updateInscription.type_versement_id || !updateInscription.montant_verse)  {
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
