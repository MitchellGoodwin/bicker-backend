const express = require('express')
const router = new express.Router()
const Post = require('../models/post')
const auth = require('../middleware/auth')

router.post('/posts', auth, async (req, res) => {
    const post = new Post({
        ...req.body,
        owner: req.user._id
    })

    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router