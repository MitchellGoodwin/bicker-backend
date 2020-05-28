const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const likeRouter = require('./routers/like')

const app = express()

app.use(express.json())

app.use(userRouter)
app.use(postRouter)
app.use(likeRouter)

module.exports = app