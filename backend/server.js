const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const User = require('./models/User');

app.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const newUser = new User({ name, email, phone, password });
    await newUser.save();
    res.status(201).send("Registration successful!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while saving user details.");
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
