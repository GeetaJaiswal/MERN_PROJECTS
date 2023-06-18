const express = require("express");
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// update user
router.put('/users/:id', async(req, res) => {
    try {
        if(req.body.userId == req.params.id) {
            var salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).send("User updated");
        }
        else {
            res.status(401).send("You can update only your account");
        }
    }
    catch(e) {
        res.status(500).send(e);
    }
})

// delete user
router.delete('/users/:id', async(req, res) => {
    try {
        if(req.body.userId == req.params.id) {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).send("User has been deleted");
        }
        else {
            res.status(401).send("You can delete only your account");
        }
    }
    catch(e) {
        res.status(500).send(e);
    }
})


// get user
router.get('/users/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;