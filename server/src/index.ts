import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";
import connectDB from "./db";

dotenv.config();

const PORT = process.env.PORT ?? 5001;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    allowedHeaders: ["Content-Type", "Autorization"],
    methods: ["GET", "POST", "PUT","DELETE"],
  })
);
app.use(express.json());
connectDB();
app.use("/api", router);

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
