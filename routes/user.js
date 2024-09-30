const express = require('express');
const userController = require('../controllers/userctrl');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/liste_utilisateur', checkAuthMiddleware.checkAuth, userController.liste_utilisateur)
router.delete("/supprimerUtilisateur/:id", checkAuthMiddleware.checkAuth, userController.supprimerUtilisateur);
router.put("/modificationUtilisateur/:id", checkAuthMiddleware.checkAuth, userController.modificationUtilisateur);

module.exports = router;