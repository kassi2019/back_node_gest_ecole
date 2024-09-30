const express = require('express');
const userController = require('../controllers/userctrl');
const affectationController = require('../controllers/affectationCtrl');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/liste_utilisateur', checkAuthMiddleware.checkAuth, userController.liste_utilisateur)
router.delete("/supprimerUtilisateur/:id", checkAuthMiddleware.checkAuth, userController.supprimerUtilisateur);
router.put("/modificationUtilisateur/:id", checkAuthMiddleware.checkAuth, userController.modificationUtilisateur);
router.post("/enregistrementAffectation", checkAuthMiddleware.checkAuth, affectationController.enregistrementAffectation);
router.get("/listeAffecter", checkAuthMiddleware.checkAuth, affectationController.listeAffecter);

module.exports = router;