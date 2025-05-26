import axios from "axios";
import asyncHandler from "express-async-handler";

export const verifyRecaptcha = asyncHandler(async (req, res, next) => {
  try {
    const { recaptchaToken } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ message: "reCAPTCHA token required" });
    }

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "reCAPTCHA validation failed" });
    }

    next();
  } catch (error) {
    console.error("reCAPTCHA error:", error);
    res.status(500).json({ message: "Error checking reCAPTCHA" });
  }
});
