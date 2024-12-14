import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDb from "./config/connection.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:5173", // Allow this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

dotenv.config({
  path: "./.env",
});

// API routes
app.use("/api/auth", authRoutes );
app.use("/api/user", userRoutes );


// Start server
const PORT = process.env.PORT;
app.listen(PORT, connectDb(), () =>
  console.log(`Server running on port ${PORT}`)
);