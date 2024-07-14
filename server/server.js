import express from "express";
import chats from "./data/data.js";
import connectDB from "./config/connect.js";
import colors from "colors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import chatRoutes from "./routes/chatRoutes.js";

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
app.use("/v1/chats", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server started at :  http://localhost:${PORT}`.yellow.bold)
);
