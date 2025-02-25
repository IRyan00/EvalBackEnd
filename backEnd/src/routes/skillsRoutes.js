const express = require("express");
const router = express.Router();

// Multer
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  addSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillsController");

const { protect } = require("../middlewares/authMiddleware");

router.post("/addskill", protect, upload.single("imageFile"), addSkill);
router.get("/getallskills", getAllSkills);
router.put(
  "/updateskill/:id",
  protect,
  upload.single("imageFile"),
  updateSkill
);
router.delete("/deleteskill/:id", protect, deleteSkill);

module.exports = router;
