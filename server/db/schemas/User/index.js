// Core
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  login: String,
  token: String,
  salt: String,
  hash: String
});

export const userScheme = mongoose.model("User", schema, "users");
