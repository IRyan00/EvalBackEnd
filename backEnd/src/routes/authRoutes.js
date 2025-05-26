import express from "express";
const router = express.Router();

import {
  registerUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { verifyRecaptcha } from "../middlewares/recaptchaMiddleware.js";

router.post("/register", registerUser);
router.get("/getallusers", protect, isAdmin, getAllUsers);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/login", verifyRecaptcha, login);

export default router;
