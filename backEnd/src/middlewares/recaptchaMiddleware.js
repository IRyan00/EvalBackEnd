const axios = require("axios");
const asyncHandler = require("express-async-handler");

const verifyRecaptcha = asyncHandler(async (req, res, next) => {
  try {
    const { recaptchaToken } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ message: "Le token reCAPTCHA est requis" });
    }

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "Validation reCAPTCHA échouée" });
    }

    next();
  } catch (error) {
    console.error("Erreur reCAPTCHA:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la vérification du reCAPTCHA" });
  }
});

module.exports = { verifyRecaptcha };
