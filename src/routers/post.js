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

router.patch('/posts/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['text']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    const _id = req.params.id

    try {
        const post = await Post.findOne({ _id, owner: req.user._id})
        
        if (!post) {
            return res.status(400).send()
        }

        updates.forEach(update => {
            post[update] = req.body[update]
        })
        await post.save()

        res.send(post)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/posts', async (req, res) => {
    const posts = await Post.find().sort({createdAt: -1}).populate('owner')
    res.send(posts)
})

module.exports = router