import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//cors : this application can be accessbile by other domain/anyone.
app.use(cors());
// express.json() : automatically converts the coming req into json.
app.use(express.json());

//fetch the open source book api from .env file
const API_URL = process.env.BOOK_API_URL;


app.get("/books", async(req,res) => {
  //fetch Open source books api
 // const result = await axios.get(API_URL)
 res.json('Backend - helo');
});

app.listen(PORT, () => {
    console.log(`Backend Server is running on Port ${PORT}`);
});