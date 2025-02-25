const express = require("express");
const router = express.Router();

const {
  registerUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/isAdmin");
const { verifyRecaptcha } = require("../middlewares/recaptchaMiddleware");

router.post("/register", registerUser);
router.get("/getallusers", protect, isAdmin, getAllUsers);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/login", verifyRecaptcha, login);

module.exports = router;
