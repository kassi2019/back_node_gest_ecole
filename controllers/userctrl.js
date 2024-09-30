const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
 signUp : function (req, res){
    
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
                        date_naissance: req.body.date_naissance,
                        lieu_naissance: req.body.lieu_naissance,
                        fonction_id: req.body.fonction_id,
                        emploi_id: req.body.emploi_id,
                        salaire: req.body.salaire,
                        email:req.body.email,
                        password: hash,
                        role_id: req.body.role_id,
                        date_entre: req.body.date_entre
                    }
                
                    models.Utilisateur.create(user).then(result => {
                        res.status(201).json({
                            message: "Utilisateur crée avec sucess",
                        });
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json({
                            message: "un problème est survenu lors de l'enregistrement52!",
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

    
     modificationUtilisateur: function (req, res) {
        const id = req.params.id;
    
        const updateUtilisateur = {
                        name: req.body.name,
                        matricule: req.body.matricule,
                        prenoms: req.body.prenoms,
                        date_naissance: req.body.date_naissance,
                        lieu_naissance: req.body.lieu_naissance,
                        fonction_id: req.body.fonction_id,
                        emploi_id: req.body.emploi_id,
                        salaire: req.body.salaire,
                        email:req.body.email,
                        role_id: req.body.role_id,
                        date_entre: req.body.date_entre
        }
        // if (!updateUtilisateur.libelle) {
        //     return res.status(400).json({ 'error': 'Veuillez rensegne les champs' });
        // }
                models.Utilisateur.update(updateUtilisateur, {where: {id:id}}).then(result => {
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
    
     supprimerUtilisateur:function (req, res){
    const id = req.params.id;

    models.Utilisateur.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Suppression effectuer avec success"
        });
    }).catch(error => {
        res.status(200).json({
            message: "un problème est survenu lors de l'enregistrement!",
            error: error
        });
    });
    },
    logout: function (req, res) {
     res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
    },
    
 login : function(req, res){
    models.Utilisateur.findOne({where:{matricule: req.body.matricule}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Ce matricule n'existe pas !",
            });
        }else{
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        matricule: user.matricule,
                        userId: user.id
                    }, process.env.JWT_KEY, function(err, token){
                        res.status(200).json({
                            message: "Connexion effectué avec success!",
                            token: token,
                            nameuser: user.name,
                            userid:user.id
                        });
                    });
                }else{
                    res.status(401).json({
                        message: "un problème est survenu lors de la connection!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "un problème est survenu lors de la connection!",
        });
    });
    },
 
 
 
 /// permet d afficher la liste des module
    liste_utilisateur: function (req, res) {
        models.Utilisateur.findAll().then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: "Un probleme est survenu lors de l'affichage!"
            });
        });
    },
}

// module.exports = {
//     signUp: signUp,
//     login: login
// } 