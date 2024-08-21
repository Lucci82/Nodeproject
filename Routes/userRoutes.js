// const express = require('express')
// const router = express.Router()

// router.post('/Register')


// module.exports = router

const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Assuming you have a User model

const router = express.Router();

// POST /register - Register a new user
router.post('/register',
  // Validate and sanitize input
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      user = new User({
        username,
        email,
        password: hashedPassword
      });

      await user.save();

      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ msg: 'Server error', error: err.message });
    }
  }
);

module.exports = router;
