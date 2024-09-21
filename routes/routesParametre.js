const express = require('express');
const structureController = require('../controllers/structureCtrl');
const roleController = require('../controllers/roleCtrl');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.post('/enregistrementStructure', checkAuthMiddleware.checkAuth, structureController.enregistrementStructure);
router.get('/liste_structure', checkAuthMiddleware.checkAuth, structureController.liste_structure);
//router.get('/liste_structure', structureController.liste_structure);
router.put("/modification_structure/:id", checkAuthMiddleware.checkAuth, structureController.modification_structure);
router.delete("/supprimerStructure/:id", checkAuthMiddleware.checkAuth, structureController.supprimerStructure);
router.get('/afficherUneSeulStructure/:id', checkAuthMiddleware.checkAuth, structureController.afficherUneSeulStructure);
router.get('/afficherStructureUtilisateurConnecter',checkAuthMiddleware.checkAuth,structureController.afficherStructureUtilisateurConnecter)
// router.post('/login', userController.login)


/// route gestion des roles

router.post('/enregistrementRole', checkAuthMiddleware.checkAuth, roleController.enregistrementRole);
router.get('/liste_Role', checkAuthMiddleware.checkAuth, roleController.liste_Role);
router.put("/modification_Role/:id", checkAuthMiddleware.checkAuth, roleController.modification_Role);
router.delete("/supprimerRole/:id", checkAuthMiddleware.checkAuth, roleController.supprimerRole);



// route gestion des module
router.get('/liste_Module', checkAuthMiddleware.checkAuth, roleController.liste_Module);

module.exports = router;