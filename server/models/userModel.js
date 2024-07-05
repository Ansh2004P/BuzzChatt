import mongoose from "mongoose";
import { defaultPic } from "../utils/constant";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: true, default: defaultPic },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
