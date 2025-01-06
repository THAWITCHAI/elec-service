const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/electric', async (req, res) => {
    res.send("Ok")
})

app.listen(3000, () => {
    console.log("PORT:3000")
})