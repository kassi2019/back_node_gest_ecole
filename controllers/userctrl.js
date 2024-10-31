const models = require('../models');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer')
// const transporter = require('../config/email');
const jwt = require('jsonwebtoken');
const Mailgen = require('mailgen');



module.exports = {
    affichageUtilisateur: function (req, res) {
        const { userEmail } = req.body;
        let config = {
            service: 'gmail',
            auth: {
                
                 user: "fkassi92@gmail.com",
                pass: "ndmh pibw ecar tupv",
            }
        }
        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Mailgen",
                link:'https://mailgen.js/'
            }
})
        let response = {
            body: {
                name:"kassi",
                intro: "Your bill has arrived",
                table: {
                    data: [
                        {
                            item: "Nodemailer Stack Book",
                            description: "A Backend application",
                            price: "$10.9947",
                        }
                    ]
                },
                outro:"looking forward to do more business"
    }
        }
        
        let mail = MailGenerator.generate(response)
        let message = {
            from: "fkassi92@gmail.com",
            to: userEmail,
            subject: "place Order",
            html:mail
        }
        transporter.sendMail(message).then(() => {
             return res.status(201).json({
            msg: "you should receive an email",
            info: info.messageId,
            preview:nodemailer.getTestMessageUrl(info)
        })
        }).catch(error => {
    return res.status(500).json({error})
})
   // res.status(201).json("Signup successfully...!")
},
     creationUtilisateur : function (req, res) {
    let testAccount =  nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
    });
    let message = {
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Successfully Register with us", // plain text body
    html: "<b>Successfully Register with us</b>", // html body
    };
    
    transporter.sendMail(message).then((info) => {    
        return res.status(201).json({
            msg: "you should receive an email",
            info: info.messageId,
            preview:nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
    return res.status(500).json({error})
})

   // res.status(201).json("Signup successfully...!")
},
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
                    const user1 = {
                        name: req.body.name,
                        matricule: req.body.matricule,
                        prenoms: req.body.prenoms,
                        email:req.body.email,
                        password: hash,
                        role_id: req.body.role_id,
                        statut: req.body.statut
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
                        // utilisateurId:req.userData.userId
                    }
                    if (!user1.role_id) {
                        models.Personnel.create(perso).then(result => {
                        res.status(201).json({
                            message: "Enregistrement effectuer avec success",
                        });
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json({
                            message: "un problème est survenu lors de l'enregistrement52!",
                        });
                    });
                    } else {
                        
                        models.Utilisateur.create(user1).then(result => {
                        res.status(201).json({
                            message: "Utilisateur crée avec sucess",
                        });
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json({
                            message: "un problème est survenu lors de l'enregistrement52!",
                        });
                    });
                     models.Personnel.create(perso);

//  const { userEmail } = user1.email;
        let config = {
            service: 'gmail',
            auth: {
                
                 user: "fkassi92@gmail.com",
                pass: "ndmh pibw ecar tupv",
            }
        }
        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Mailgen",
                link:'https://mailgen.js/'
            }
})
        let response = {
            body: {
                name:"kassi",
                intro: "Your bill has arrived",
                table: {
                    data: [
                        {
                            item: "Nodemailer Stack Book",
                            description: "A Backend application",
                            price: "$10.9947",
                        }
                    ]
                },
                outro:"looking forward to do more business"
    }
        }
        
        let mail = MailGenerator.generate(response)
        let message = {
            from: "fkassi92@gmail.com",
            to: user1.email,
            subject: "place Order",
            html:mail
        }
        transporter.sendMail(message).then(() => {
             return res.status(201).json({
            msg: "you should receive an email",
            info: info.messageId,
            preview:nodemailer.getTestMessageUrl(info)
        })
        }).catch(error => {
    return res.status(500).json({error})
})
                    }

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

    
    
//  enregistrementEtudiant : function (req, res){
    
//     //Sign up
//     models.Utilisateur.findOne({ where: { matricule: req.body.matricule } }).then(result => {
//         // console.log(result);
//          if(result){
//             res.status(409).json({
//                 message: "Email existe déja!",
//             });
//          } else {
//             bcryptjs.genSalt(10, function(err, salt){
//                 bcryptjs.hash(req.body.password, salt, function(err, hash){
//                     const user = {
//                         name: req.body.name,
//                         matricule: req.body.matricule,
//                         prenoms: req.body.prenoms,
//                         email:req.body.email,
//                         password: hash,
//                         role_id: req.body.role_id,
//                         statut: req.body.statut
//                     }
                
//                  $valeur=models.Utilisateur.create(user).then(result => {
//                         res.status(201).json({
//                             message: "Utilisateur crée avec sucess",
//                         });
//                  }
//                  ).catch(error => {
//                         console.log(error);
//                         res.status(500).json({
//                             message: "un problème est survenu lors de l'enregistrement52!",
//                         });
//                     });
//                 });
//             });
//         }
//     }).catch(error => {
//         console.log(error);
//         res.status(500).json({
//             message: "un problème est survenu lors de l'enregistrement!",
//         });
//  });
// },
    
     modificationUtilisateur: function (req, res) {
        const id = req.params.id;
    
        const updateUtilisateur = {
                        name: req.body.name,
                        matricule: req.body.matricule,
                        prenoms: req.body.prenoms,
                        // date_naissance: req.body.date_naissance,
                        // lieu_naissance: req.body.lieu_naissance,
                        // fonction_id: req.body.fonction_id,
                       // emploi_id: req.body.emploi_id,
                        // salaire: req.body.salaire,
                        email:req.body.email,
                        role_id: req.body.role_id,
            // date_entre: req.body.date_entre,
            //             statut: req.body.statut
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
                            prenomsuser: user.prenoms,
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
//     // creationUtilisateur,
//     affichageUtilisateur
// } 