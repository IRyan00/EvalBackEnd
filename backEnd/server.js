// Dotenv
require("dotenv").config();

// Express
const express = require("express");
const app = express();

// Cors
const cors = require("cors");
app.use(cors());

// Helmet
const helmet = require("helmet");
app.use(helmet());

// Morgan logging
const morgan = require("./src/middlewares/morganMiddleware");
app.use(morgan);

// Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Port
const PORT = process.env.PORT || 3000;

// DB
const connectDB = require("./src/config/db");

// Routes
const authRoutes = require("./src/routes/authRoutes");
const skillsRoutes = require("./src/routes/skillsRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillsRoutes);

// Server
app.listen(PORT, () => {
  connectDB();
  console.log(`Le server tourne sur : http://localhost:${PORT}`);
});
