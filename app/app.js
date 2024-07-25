import dotenv from "dotenv"
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
// db connect 
dbConnect();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// routes
app.use('/' , userRoutes);

export default app;