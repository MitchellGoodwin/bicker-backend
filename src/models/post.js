const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

postSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'post'
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post