const Validator = require('fastest-validator');
var asynclib = require('async');
const bcryptjs = require('bcryptjs');
const models = require('../models');


module.exports = {
    // permet d'afficher la liste

    listePersonnel: function (req, res) {
        models.Personnel.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'enregistrement!"
            });
        });
    },
    // permet de faire des modification
 
    modificationPersonnel: function (req, res) {
        bcryptjs.genSalt(10, function (err, salt) {
            bcryptjs.hash(req.body.password, salt, function (err, hash) {
const id = req.params.id;
    const user = {
                        name: req.body.name,
                        matricule: req.body.matricule,
                        prenoms: req.body.prenoms,
                        email:req.body.email,
                        password: hash,
                        role_id: req.body.role_id,
                        // statut: req.body.statut
                    }
        const perso = {
                        name: req.body.name,
                        matricule: req.body.matricule,
                        prenoms: req.body.prenoms,
                        date_naissance: req.body.date_naissance,
                        lieu_naissance: req.body.lieu_naissance,
                        fonction_id: req.body.fonction_id,
                       // emploi_id: req.body.emploi_id,
                        salaire: req.body.salaire,
                        email:req.body.email,
                        date_entre: req.body.date_entre,
                        nationalite: req.body.nationalite,
                        civilite: req.body.civilite,
                        lieu_habitation: req.body.lieu_habitation,
                        statut: req.body.statut
                        // utilisateurId:req.userData.userId
                }
                
                if (!req.body.role_id) {
                    if (!perso.name || !perso.matricule || !perso.prenoms) {
            return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        }
                models.Personnel.update(perso, {where: {id:id}}).then(result => {
                    res.status(201).json({
                        message: "modification effectue avec success",
                    });
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message: "Un probleme est survenu lors de la modification!",
                    });
                }); 
                    
                    // models.Utilisateur.create(user).then(result => {
                    //     res.status(201).json({
                    //         message: "Utilisateur crée avec sucess",
                    //     });
                    // }).catch(error => {
                    //     console.log(error);
                    //     res.status(500).json({
                    //         message: "un problème est survenu lors de l'enregistrement52!",
                    //     });
                    // });
                   
                } else {
                   models.Utilisateur.create(user);
                 }

            })

        })
        
        
         
      
    },




    creerNouveauUtilisateur : function (req, res){
    
    //Sign up
    models.Utilisateur.findOne({ where: { matricule: req.body.matricule } }).then(result => {
        // console.log(result);
         if(result){
            res.status(409).json({
                message: "Email existe déja!",
            });
         } else {
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash){
                    const user = {
                        name: req.body.name,
                        matricule: req.body.matricule,
                        prenoms: req.body.prenoms,
                        email:req.body.email,
                        password: hash,
                        role_id: req.body.role_id,
                        
                    }
                        models.Utilisateur.create(user).then(result => {
                        res.status(201).json({
                            message: "Utilisateur crée avec sucess",
                        });
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json({
                            message: "un problème est survenu lors de l'enregistrement!",
                        });
                    });
                   
                  
                });
            });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "un problème est survenu lors de l'enregistrement!",
        });
 });
},
    // permet de faire la suppression
    
     supprimerPersonnel:function (req, res){
    const id = req.params.id;

    models.Personnel.destroy({where:{id:id}}).then(result => {
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
     
      afficherUneSeulPersonnel:function(req, res){
    const id = req.params.id;

    models.Personnel.findByPk(id).then(result => {
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
    models.Personnel.findAll({where: {utilisateurId:id}}).then(result => {
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
