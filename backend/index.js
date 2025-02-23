import express from 'express'
import dotenv from 'dotenv'
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors'
dotenv.config()
const app = express();

app.use(cors())


app.use(express.json())

app.use("/ai",aiRoutes)

app.listen(8000,()=>{
    console.log("Server is running");
})

