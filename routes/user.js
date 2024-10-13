const express = require('express');
const { signup, login } = require('../controllers/userController');
const { check } = require('express-validator');
const router = express.Router();

router.post('/signup', [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], signup);

router.post('/login', login);

module.exports = router;
