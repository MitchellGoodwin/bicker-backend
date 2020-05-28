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

router.delete('/likes/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const like = await Like.findOne({ _id, user: req.user._id})
        
        if (!like) {
            return res.status(400).send()
        }

        await like.remove()
        res.send(like)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router