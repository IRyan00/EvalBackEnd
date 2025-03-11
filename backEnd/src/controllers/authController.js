const User = require("../models/User");

// bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

// jwt
const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: `Tous les champs doivent être remplis` });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ message: `L'utilisateur a bien été crée: `, user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Erreur lors de la création de l'utilisateur` });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Erreur lors de la récupération des utilisateurs` });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const updated = { name };
    if (password) {
      updated.password = await bcrypt.hash(password, saltRounds);
    }
    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    }).select("-password");
    res
      .status(200)
      .json({
        message: `L'utilisateur a bien été mis à jour`,
        user: updatedUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Erreur lors de la modification de l'utilisateur`,
        error,
      });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: `Utilisateur supprimé avec succès`, user });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Erreur lors de la suppression de l'utilisateur`,
        error,
      });
  }
};

const generateToken = async (_id) => {
  const token = JWT.sign({ _id }, JWT_SECRET, { expiresIn: "30d" });
  return token;
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogin = await User.findOne({ email });

    if (!userLogin) {
      return res.status(404).json({ message: `Cet utilisateur n'existe pas` });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: `Email ou mot de passe incorrect` });
    }

    const token = await generateToken(userLogin._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
    });

    res.status(201).json({ userLogin, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Erreur lors de la connexion`, error: error.message });
  }
};
