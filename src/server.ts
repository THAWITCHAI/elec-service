import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 4000;
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// Define a route
app.get("/electric", async (req: Request, res: Response) => {
  try {
    // const electric = await prisma.electric.findMany()
    res.json({name:'Thawitchai'});
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