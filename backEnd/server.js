// Dotenv
import "dotenv/config";

// Express
import express from "express";
const app = express();

// Cors
import cors from "cors";
app.use(cors());

// Helmet
import helmet from "helmet";
app.use(helmet());

// Morgan logging
import morgan from "./src/middlewares/morganMiddleware.js";
app.use(morgan);

// Cookies
import cookieParser from "cookie-parser";
app.use(cookieParser());

// Port
const PORT = process.env.PORT || 3000;

// DB
import connectDB from "./src/config/db.js";

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import skillsRoutes from "./src/routes/skillsRoutes.js";

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillsRoutes);

// Server
app.listen(PORT, () => {
  connectDB();
  console.log(`Le server tourne sur : http://localhost:${PORT}`);
});
