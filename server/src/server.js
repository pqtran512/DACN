import express from "express";
import initRoutes from './routes';
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();

let app = express();
// config app
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

initRoutes(app);

connectDB();

let port = process.env.PORT || 6969; //Port === undefined => port = 6969
app.listen(port, () => {
    //callback
    console.log("Server is runing on the port : " + port)
})