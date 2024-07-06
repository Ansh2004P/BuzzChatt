import express from "express";
import chats from "./data/data.js";
import connectDB from "./config/connect.js";
import colors from "colors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

connectDB();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("Server started");
  res.send("Server started");
});

app.use("/v1/user", userRoutes);

app.listen(PORT, () =>
  console.log(`Server started at :  http://localhost:${PORT}`.yellow.bold)
);
