import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
const app = express();
const PORT = 3000;
import { PrismaClient } from '@prisma/client'
import bcypt_password from "../Modules/bcypt_password";

const prisma = new PrismaClient()


app.use(express.json())
app.use(cors())

// Define a route
app.get("/electric", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { api_key } = req.headers
    console.log(req.headers)
    if (api_key === '1234') {
      next()
    } else {
      res.json({ message: 'No Key' })
    }
  } catch (error) {
    console.log(error)
  }
}, async (req: Request, res: Response) => {
  try {
    const electric = await prisma.electric.findMany()
    res.json(electric);
  } catch (error) {
    console.log(error)
    res.status(200).json({
      message: 'Error'
    })
  }
});

app.post('/register', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { api_key } = req.headers
    if (api_key === '1234') {
      next()
    } else {
      res.json({ message: 'No Key' })
    }
  } catch (error) {
    console.log(error)
  }
}, async(req: Request, res: Response) => {
  try {
    const data: {
      "fname": string,
      "lname": string,
      "email": string,
      "password": string
    } = req.body

    const hash = await bcypt_password.hash_password(data.password)

    // const user = await prisma.

    res.status(200).json(Object.assign(data,{password:hash}))
  } catch (error) {
    console.log(error)
    res.json({ message: 'Error' })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export = app