import express from "express";
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// express.json() : automatically converts the coming req into json.
app.use(express.json());

app.get("/", async() => {
    console.log("Frontend - hello");
  //fetch Open source books api
  const response = await axios.get(`http://localhost:5001/books`);
  console.log(response.data);
  //call the backend api to fetch books
});

app.listen(PORT, () => {
    console.log(`Frontend is running on Port ${PORT}`);
});