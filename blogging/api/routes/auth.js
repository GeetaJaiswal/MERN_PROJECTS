const express = require("express");
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// regsiter

router.post('/register', async(req, res) => {
    try {
        user = req.body;
        findUser = await User.find({email:user.email});
        if (findUser.length==0)
        {
            var salt = await bcrypt.genSalt(10);
            var pass = await bcrypt.hash(user.password, salt);
            const newUser =  new User({
                username: user.username,
                email: user.email,
                password: pass, 
                profilePic: '',
            })
            saved = await newUser.save();
            res.status(202).send("User Registered");
        }
        else
        {
            res.status(500).send('Already registered')
        }
    }
    catch(e) {
        res.status(500).send(e);
    }
})


// login
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
            passMatch = await bcrypt.compare(req.body.password, user.password);
            if(passMatch) {
                res.status(202).send(user);
            }
            else {
                res.status(500).send("Invalid Credentials");
            }
        }
        else {
            res.status(500).send("Invalid Credentials");
        }
    }
    catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;