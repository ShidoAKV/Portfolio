import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Assistancerouter } from './routes/route.js';
dotenv.config();
const app=express();


const port=process.env.PORT||3001;


app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/assistance',Assistancerouter);

app.get('/',(req,res)=>{
    res.send(`server running`);
})


app.listen(port,()=>{
    console.log(` server running on the port ${port}`);
})

