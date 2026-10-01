import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello, World v2!" });
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "Healthy" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});