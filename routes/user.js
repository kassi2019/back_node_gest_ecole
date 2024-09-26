const express = require('express');
const userController = require('../controllers/userctrl');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/liste_utilisateur',checkAuthMiddleware.checkAuth, userController.liste_utilisateur)
module.exports = router;