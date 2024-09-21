// import
var express = require('express');
var utilisateurCtrl = require('./routes/utilisateurCtrl');
var structureCtrl = require('./routes/structureCtrl');

// router
exports.router = (function () {
    var apiRouter = express.Router();

    apiRouter.route('/users/register/').post(utilisateurCtrl.register);
    apiRouter.route('/users/login/').post(utilisateurCtrl.login);
    apiRouter.route('/users/seulUser/').get(utilisateurCtrl.getUtilisateurProfile);


    // route structure
    
apiRouter.route('/enregistreStructure/').post(structureCtrl.enregistreStructure);



return apiRouter;
})();
