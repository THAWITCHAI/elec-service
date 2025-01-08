const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    try {
        res.status(200).json({
            name: 'Thawitchai',
            email: 'Thawitchai@gmail.com'
        })
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
})

app.listen(3000, () => {
    console.log('Listen Port 4000')
})

module.exports = app