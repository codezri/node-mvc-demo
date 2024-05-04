const express = require('express');
const authController = require('../controllers/auth');
const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.get('/register', authController.registerView);
router.get('/login', authController.loginView);
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);

module.exports = router;
