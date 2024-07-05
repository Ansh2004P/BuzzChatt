import express from "express";
import chats from "./data/data.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("Server started");
  res.send("Server started");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req);
  // res.send(req.params.id);

  const id = req.params.id;
  const singleChat = chats.find((chat) => chat?._id === id);
  res.send(singleChat);
});

app.listen(PORT, () =>
  console.log(`Server started at :  http://localhost:${PORT}`)
);
