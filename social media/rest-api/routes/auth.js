const router = require('express').Router();
const User = require('../models/User');
const bcrypt  = require('bcryptjs');

router.get('/', (req,res)=>{
    res.send('welcome auth');
})


//REGISTER
router.post('/register', async(req,res) =>  {
    try {
            const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password,10),
        });

        try {
            const user = await newUser.save();
            res.status(200).json(user);
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
    catch(e) {
        console.log(e);
        res.status(500).json(e);
    }

})



//LOGIN
router.post('/login', async(req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found");

        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).json("wrong credentials");

        res.status(200).json(user);
    }
    catch(e) {
        console.log(e);
        res.status(500).json(e);
    }
})



module.exports = router;