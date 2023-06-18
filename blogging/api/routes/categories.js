const express = require("express");
const router = express.Router();
const Category = require('../models/category');

//create category
router.post('/category', async(req, res)=>{
    try {
        const newCat =  new Category(req.body);
        const savedCat = await newCat.save();
        res.status(200).send(savedCat);
    }
    catch(e) {
        res.status(500).send(e);
    }
})


// get category
router.get('/category', async(req, res) => {
    try {
        cat = await Category.find();
        res.status(200).send(cat);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;