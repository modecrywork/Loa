// Core
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  login: String,
  token: String,
  salt: String
});

export const userScheme = mongoose.model("User", schema, "users");
