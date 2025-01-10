import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
const app = express();
const PORT = 4000;
import { PrismaClient } from '@prisma/client'
import bcypt_password from "../Modules/bcypt_password";
import sign_token from "../Modules/generate_token";

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
app.get("/user", (req: Request, res: Response, next: NextFunction) => {
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
}, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany()
    res.json(user);
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
}, async (req: Request, res: Response) => {
  try {
    const data: {
      "fname": string,
      "lname": string,
      "email": string,
      "password": string
    } = req.body

    const hash = await bcypt_password.hash_password(data.password)
    console.log(hash)

    const user = await prisma.user.create(
      {
        data: Object.assign(data, { password: hash })
      }
    )

    const token_data = await sign_token(
      {
        fname: user.fname,
        email: user.email,
        lname: user.lname,
        id: user.id,
      }
    )

    res.status(200).json({token_data})
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