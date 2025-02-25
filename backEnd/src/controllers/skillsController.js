const Skills = require("../models/Skills");

const fs = require("fs");

const { v2: cloudinary } = require("cloudinary");
require("dotenv").config();

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.addSkill = async (req, res) => {
  try {
    console.log("Fichier reçu:", req.file);
    console.log("Corps de la requête:", req.body);

    if (!req.file) {
      return res.status(400).json({ error: `Aucun fichier téléchargé` });
    }

    if (!fs.existsSync(req.file.path)) {
      return res
        .status(400)
        .json({ error: "Erreur lors de l'upload du fichier" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "skills",
    });
    console.log("Résultat upload Cloudinary:", uploadResult);

    fs.unlinkSync(req.file.path);

    const { title, category, level } = req.body;

    const newSkill = await Skills.create({
      title,
      category,
      level,
      image: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });

    console.log("Nouveau skill créé:", newSkill);
    res.status(201).json({ skill: newSkill });
  } catch (error) {
    console.error("Erreur complète:", error);
    res.status(500).json({
      message: `Erreur lors de la création du skill`,
      error: error.message,
    });
  }
};

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json({ skills });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Erreur lors de la récupération des skills`, error });
  }
};

exports.updateSkill = async (req, res, next) => {
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
      return next({ status: 404, message: "Skill non trouvé" });
    }

    res.status(200).json({ message: "Le skill a bien été mis à jour", skill });
  } catch (error) {
    next(error);
  }
};

exports.deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await Skills.findByIdAndDelete(id);

    if (!skill) {
      return res.status(404).json({ error: `Skill non trouvé` });
    }

    cloudinary.uploader.destroy(skill.public_id);
    res.status(201).json({ message: `Le skill a bien été supprimé` });
  } catch (error) {
    res.status(500).json({ message: `Erreur lors de la suppression du skill` });
  }
};
