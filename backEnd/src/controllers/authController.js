import User from "../models/User.js";

// bcrypt
import bcrypt from "bcrypt";
const saltRounds = 10;

// jwt
import JWT from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: `All fields must be completed` });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ message: `The user has been created: `, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `User creation error` });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: `Error retrieving users` });
  }
};

export const updateUser = async (req, res) => {
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
    res.status(200).json({
      message: `The user has been updated`,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: `User modification error`,
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: `User successfully deleted`, user });
  } catch (error) {
    res.status(500).json({
      message: `Error deleting user`,
      error,
    });
  }
};

const generateToken = async (_id) => {
  const token = JWT.sign({ _id }, JWT_SECRET, { expiresIn: "30d" });
  return token;
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogin = await User.findOne({ email });

    if (!userLogin) {
      return res.status(404).json({ message: `This user does not exist` });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      return res.status(401).json({ message: `Incorrect email or password` });
    }

    const token = await generateToken(userLogin._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
    });

    res.status(201).json({ userLogin, token });
  } catch (error) {
    res.status(500).json({ message: `Connection error`, error: error.message });
  }
};
