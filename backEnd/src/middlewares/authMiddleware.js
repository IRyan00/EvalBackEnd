const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Récupérer le token du header
      token = req.headers.authorization.split(" ")[1];

      // Vérifier le token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Ajouter les données utilisateur à la requête
      req.user = await User.findById(decoded._id);

      next();
    } catch (error) {
      console.error("Erreur d'authentification:", error);
      res.status(401);
      throw new Error("Non autorisé, token invalide");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Non autorisé, pas de token");
  }
});

module.exports = { protect };
