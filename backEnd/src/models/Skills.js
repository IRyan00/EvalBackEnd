import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "back-end",
        "front-end",
        "design",
        "bdd",
        "déploiment",
        "hébergement",
        "testing",
      ],
    },
    level: {
      type: String,
      required: true,
      enum: ["débutant", "intermédiaire", "expert"],
    },
    image: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Skills", skillsSchema);
