const express = require('express');
const router = express.Router();
const User = require('../models/User');

// REGISTER ROUTE
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    
    try {
    const user = await newUser.save();
    res.json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;