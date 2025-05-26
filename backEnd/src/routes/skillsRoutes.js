import express from "express";
const router = express.Router();

// Multer
import multer from "multer";
const upload = multer({ dest: "uploads/" });

import {
  addSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
} from "../controllers/skillsController.js";

import { protect } from "../middlewares/authMiddleware.js";

router.post("/addskill", protect, upload.single("imageFile"), addSkill);
router.get("/getallskills", getAllSkills);
router.put(
  "/updateskill/:id",
  protect,
  upload.single("imageFile"),
  updateSkill
);
router.delete("/deleteskill/:id", protect, deleteSkill);

export default router;
