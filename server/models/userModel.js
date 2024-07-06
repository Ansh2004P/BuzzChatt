import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { defaultPic } from "../utils/constant.js";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: defaultPic },
  },
  { timestamps: true }
);

//@desription    comparing the password with password in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
  // compare method will do the work of comparing the user password with database password + salt autometically
  return await bcrypt.compare(enteredPassword, this.password);
};

// @description    encrypting the password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(12);
  console.log(salt);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
