const express = require('express')
const cors = require('cors')
const getData = require('../myFuc/config') // นำเข้าโมดูลฟังก์ชัน getData
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Route
app.get('/electric', async (req, res) => {
    try {
        // ดึงข้อมูลจากฐานข้อมูล
        const electric = await getData()
        res.json({ data: electric }) // ส่งข้อมูลกลับในรูปแบบ JSON
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ error: 'Internal Server Error' }) // จัดการข้อผิดพลาด
    }
})

// Start Server
app.listen(3000, () => {
    console.log("Server is running on PORT: 3000")
})
