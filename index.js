const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workout");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workout", workoutRoutes);

app.get("/", (req, res) => {
  res.json("test");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server work on port ", process.env.PORT);
      console.log("content db");
    });
  })
  .catch((error) => {
    console.log(error);
  });
