const express = require('express')
const router = new express.Router()
const Like = require('../models/like')
const auth = require('../middleware/auth')

router.post('/likes', auth, async (req, res) => {
    const like = new Like({
        user: req.user._id,
        post: req.body.post_id
    })
    try {
        await like.save()
        res.status(201).send(like)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router