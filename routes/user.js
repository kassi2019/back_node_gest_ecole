const express = require('express');
const userController = require('../controllers/userctrl');

const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login)
router.post('/logout', userController.logout)
module.exports = router;