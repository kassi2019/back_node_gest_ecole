const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
 signUp : function (req, res){
    console.log(models.Utilisateur);
    //Sign up
    models.Utilisateur.findOne({ where: { email: req.body.email } }).then(result => {
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
                        email:req.body.email,
                        password: hash
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

    logout: function (req, res) {
     res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
    },
    
 login : function(req, res){
    models.Utilisateur.findOne({where:{email: req.body.email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Ce email n'existe pas !",
            });
        }else{
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
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
}
}

// module.exports = {
//     signUp: signUp,
//     login: login
// } 