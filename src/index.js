const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const tastRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(tastRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})