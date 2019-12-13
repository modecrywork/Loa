// Core
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: Number,
    favorite: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: { createdAt: "created", updatedAt: "modified" } }
);

export const catScheme = mongoose.model("Cat", schema, "cat");
