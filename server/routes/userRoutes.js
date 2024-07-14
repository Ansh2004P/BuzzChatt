import express from 'express';
import { authUser, registerUser, allUsers } from '../controllers/userController.js';

const router = express.Router();

router.route("/").post(registerUser).get(allUsers);
router.post("/login", authUser);

export default router;