const express = require('express');
const { registerUser, loginUser } = require('../controller/userController');
const router = express.Router();

// Define the sign-up route
router.post('/signup', registerUser);

console.log('SignUp');

router.post('/Login', loginUser);

console.log('userRouter loaded');

module.exports = router;
