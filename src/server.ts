import express, { Request, Response } from 'express';
import cors from 'cors';
import {PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/electric', async (req: Request, res: Response) => {
    const electric = await prisma.electric.findMany()
    res.json({electric});
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

export = app;
