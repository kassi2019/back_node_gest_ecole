const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');
const { Op, fn, col, literal } = require('sequelize');



module.exports = {
    

listeInscription78: function (req, res) {
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

//     listeInscriptions: function (req, res) {
//     try {
//         const result =  models.Inscription.findAll({
//             attributes: [
//                 [fn('DISTINCT', fn('CONCAT', col('Classes.code'), ' ', col('Classes.libelle'))), 'classe'],
//                 'classe_id',
//                 [fn('SUM', col('Classes.montantscolarite')), 'montant_scolarite'],
//                 [fn('SUM', col('Inscriptions.montant_verse')), 'montant_paye'],
//                 [literal(`(SELECT SUM(cl1.montantscolarite) FROM classes cl1 WHERE cl1.id=Inscriptions.classe_id) - (SELECT SUM(c1.montant_verse) FROM inscriptions c1 WHERE c1.classe_id=Inscriptions.classe_id AND c1.anne_scolaire=Inscriptions.anne_scolaire)`), 'reste_paye']
//             ],
//             include: [
//                 {
//                     model: models.Classe,
//                     attributes: [] // On ne veut pas d'attributs supplémentaires de Classes ici
//                 },
//                 {
//                     model: models.anneeScolaire,
//                     where: { statut: 1 },
//                     attributes: [] // On ne veut pas d'attributs supplémentaires d'AnneesScolaires ici
//                 }
//             ],
//             group: ['classe_id'], // On doit grouper par classe_id pour les agrégations
//         });

//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "Un problème est survenu lors de la récupération des inscriptions!"
//         });
//     }
// },
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
