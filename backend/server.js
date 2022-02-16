// THE PARK BAND - Mobile Application

// Importing
require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const colors = require("colors");
const showRouter = require("./routes/showRoute");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/shows", showRouter);

// Error Handlers
app.use(errorHandler);

// Server
PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`SERVER IS RUNNING ON ${PORT}`.underline.cyan));
