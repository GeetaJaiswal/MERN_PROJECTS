const express = require("express");
const router = express.Router();
const Post = require('../models/post');

//create Post
router.post('/post', async(req, res)=>{
    try {
        const newPost =  new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).send(savedPost);
    }
    catch(e) {
        res.status(500).send(e);
    }
})


// update post
router.put('/post/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post) {
            if(post.username == req.body.username) {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {new:true});
                res.status(200).send(updatedPost);
            }
            else {
                res.status(401).send("You can update only your post");
            }
        }
        else {
            res.status(404).send("Post not found");
        }
    }
    catch(e) {
        res.status(500).send(e);
    }
})

// delete user
router.delete('/post/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post) {
            if(post.username == req.body.username) {
                await post.delete();
                res.status(200).send("Post has been deleted");
            }
            else {
                res.status(401).send("You can delete only your post");
            }
        }
        else {
            res.status(404).send("Post not found");
        }
        
    }
    catch(e) {
        res.status(500).send(e);
    }
})


// get post
router.get('/post/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

// get all post
router.get('/', async(req, res) => {
    try {
        let posts;
        const username = req.query.user;
        const categories = req.query.cat;
        if(username){
            posts = await Post.find({username});
        }
        else if(categories){
            posts = await Post.find({categories: { $in: [categories]}});
        }
        else {
            posts = await Post.find();
        }
        res.status(200).send(posts);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;