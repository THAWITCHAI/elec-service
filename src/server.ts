import express, { NextFunction, Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 4000;
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Define a route
app.get("/electric", (req: Request, res: Response, next: NextFunction) => {
  try {
    if(req.headers.API_KEY){
      next()
    }else{
      res.json({message:'No Key'})
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export = app