const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.get('/electric', async (req, res) => {
    const electric = await prisma.electric.findMany()
    if (electric.length == 0) {
        res.json({ message: "No data" })
    } else {
        res.json(electric)
    }
})

app.listen(3000, () => {
    console.log("PORT:3000")
})