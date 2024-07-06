import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
};

export default generateToken;
