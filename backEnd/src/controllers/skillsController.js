import Skills from "../models/Skills.js";

import fs from "fs";

import { v2 as cloudinary } from "cloudinary";

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const addSkill = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: `No files downloaded` });
    }

    if (!fs.existsSync(req.file.path)) {
      return res.status(400).json({ error: "Error uploading file" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "skills",
    });
    console.log("Result upload Cloudinary:", uploadResult);

    fs.unlinkSync(req.file.path);

    const { title, category, level } = req.body;

    const newSkill = await Skills.create({
      title,
      category,
      level,
      image: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });

    console.log("New skill created:", newSkill);
    res.status(201).json({ skill: newSkill });
  } catch (error) {
    console.error("Complete error:", error);
    res.status(500).json({
      message: `Error during skill creation`,
      error: error.message,
    });
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json({ skills });
  } catch (error) {
    res.status(500).json({ message: `Error when retrieving skills`, error });
  }
};

export const updateSkill = async (req, res, next) => {
  try {
    const { title, category, level } = req.body;
    const { id: skillId } = req.params;

    const originalSkill = await Skills.findById(skillId);

    let public_id = originalSkill.public_id;
    let image = originalSkill.image;

    if (req.file) {
      await cloudinary.uploader.destroy(public_id);

      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "skills",
      });

      fs.unlinkSync(req.file.path);

      public_id = uploadResult.public_id;
      image = uploadResult.secure_url;
    }

    const skill = await Skills.findByIdAndUpdate(
      skillId,
      {
        title,
        category,
        level,
        public_id,
        image,
      },
      { new: true }
    );

    if (!skill) {
      return next({ status: 404, message: "Skill not found" });
    }

    res.status(200).json({ message: "The skill has been updated", skill });
  } catch (error) {
    next(error);
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skills.findByIdAndDelete(id);

    if (!skill) {
      return res.status(404).json({ error: `Skill not found` });
    }

    cloudinary.uploader.destroy(skill.public_id);
    res.status(201).json({ message: `The skill has been deleted` });
  } catch (error) {
    res.status(500).json({ message: `Error deleting skill` });
  }
};
