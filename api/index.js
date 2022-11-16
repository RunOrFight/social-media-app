const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {}, () => {
  console.log("Connected to MongoDB");
});

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("Server is running");
});
