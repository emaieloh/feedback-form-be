import express from "express";
import { authUser, registerUser } from "../controllers/UserController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);

export default router;
