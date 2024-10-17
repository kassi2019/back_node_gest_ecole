const Validator = require('fastest-validator');
var asynclib = require('async');
const models = require('../models');


module.exports = {
    
    // permet de faire des enregistrement
    enregistrementEtudiant: function (req, res) {
    //    console.log(req.userData.userId);
    const post = {
    civilite: req.body.civilite,
    matricule: req.body.matricule,
    nom: req.body.nom,
    prenoms: req.body.prenoms,
    date_naissance: req.body.date_naissance,
    lieu_naissance: req.body.lieu_naissance,
    lieu_habitation: req.body.lieu_habitation,
    nationalite: req.body.nationalite,
    telephone_etudiant: req.body.telephone_etudiant,
    etablissement_id: req.body.etablissement_id,
    autre_etablissement: req.body.autre_etablissement,
        nom_prenom_pere: req.body.nom_prenom_pere,
    nom_prenom_mere:req.body.nom_prenom_mere,
        profession_pere: req.body.profession_pere,
        telephone_bureau_pere: req.body.telephone_bureau_pere,
        telephone_domicile_pere: req.body.telephone_domicile_pere,
        telephone_mobile_pere:req.body.telephone_mobile_pere,
    telephone_domicile_mere: req.body.telephone_domicile_mere,
    telephone_mobile_mere: req.body.telephone_mobile_mere,
        email_mere: req.body.email_mere,
        adresse_postal_pere:req.body.adresse_postal_pere,
        adresse_postal_mere:req.body.adresse_postal_mere,
adresse_postal_tuteur:req.body.adresse_postal_tuteur,
        email_pere: req.body.email_pere,
         profession_mere: req.body.profession_mere,
    telephone_bureau_mere: req.body.telephone_bureau_mere,
        lieu_habitation_mere: req.body.lieu_habitation_mere,
    lieu_habitation_tuteur: req.body.lieu_habitation_tuteur,
    nom_prenom_tuteur: req.body.nom_prenom_tuteur,
    telephone_bureau_tuteur: req.body.telephone_bureau_tuteur,
    telephone_domicile_tuteur: req.body.telephone_domicile_tuteur,
    telephone_mobile_tuteur: req.body.telephone_mobile_tuteur,
        email_tuteur: req.body.email_tuteur,
    profession_tuteur: req.body.profession_tuteur,
        }
      
        if (!post.matricule || !post.civilite || !post.nom || !post.prenoms) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
        models.Etudiant.findOne({ where: { matricule: post.matricule } }).then(result => {
            if (result) {
                res.status(409).json({
                    message: "Code existe déja",
                });
            } else {
                models.Etudiant.create(
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

    listeEtudiant: function (req, res) {
        models.Etudiant.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationEtudiant: function (req, res) {
        const id = req.params.id;
    
        const updateRole = {
    civilite: req.body.civilite,
    matricule: req.body.matricule,
    nom: req.body.nom,
    prenoms: req.body.prenoms,
    date_naissance: req.body.date_naissance,
    lieu_naissance: req.body.lieu_naissance,
    lieu_habitation: req.body.lieu_habitation,
    nationalite: req.body.nationalite,
    telephone_etudiant: req.body.telephone_etudiant,
    etablissement_id: req.body.etablissement_id,
    autre_etablissement: req.body.autre_etablissement,
    nom_prenom_pere: req.body.nom_prenom_pere,
    profession_pere: req.body.profession_pere,
    telephone_domicile_mere: req.body.telephone_domicile_mere,
    telephone_mobile_mere: req.body.telephone_mobile_mere,
    email_mere: req.body.email_mere,
    lieu_habitation_mere: req.body.lieu_habitation_mere,
    nom_prenom_tuteur: req.body.nom_prenom_tuteur,
    telephone_bureau_tuteur: req.body.telephone_bureau_tuteur,
    telephone_domicile_tuteur: req.body.telephone_domicile_tuteur,
    telephone_mobile_tuteur: req.body.telephone_mobile_tuteur,
    email_tuteur: req.body.email_tuteur,
        }
        if (!updateRole.matricule || !updateRole.nom || !updateRole.prenoms) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Etudiant.update(updateRole, {where: {id:id}}).then(result => {
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
    
     supprimerEtudiant:function (req, res){
    const id = req.params.id;

    models.Etudiant.destroy({where:{id:id}}).then(result => {
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
     
    // permet d afficher un element
     
      afficherUneSeulEtudiant:function(req, res){
    const id = req.params.id;

    models.Etudiant.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Role not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Un probleme est survenu"
        })
    });
    },
      
      
    // permet d afficher les element de utilisateur connecter
      
      afficherRoleUtilisateurConnecter:function(req, res){
    const id = req.userData.userId;
    models.Etudiant.findAll({where: {utilisateurId:id}}).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Role not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Un probleme est survenu"
        })
    });
    } ,

}
