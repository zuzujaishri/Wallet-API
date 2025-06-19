import express from 'express';
import dotenv from 'dotenv';
import { initDB  } from "../config/db.js";
import rateLimiter from '../middleware/rateLimiter.js';
import TransactionRoute from '../routes/TransactionsRoute.js';
dotenv.config();
// import { neon } from "@neondatabase/serverless";
const PORT=process.env.PORT || 5001;

const app = express();


console.log("my port:", process.env.PORT);

// import connectDB from './config/db.js';

app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware

app.get("/", (req, res) => {
    res.send("Welcome to the Expense Tracker API");
});



app.use("/api/transactions", TransactionRoute);

initDB().then(() => {
app.listen(PORT,()=>{
    console.log("Server is up and running on port", PORT);
 });
});
 